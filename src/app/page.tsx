'use client';

import styles from './page.module.css';
import { SearchFilter } from './components /SearchFilter/SearchFilter';
import { FilmCard } from './components /FilmCard/FilmCard';
import { Layout } from './layout/Layout';
import { useGetMoviesQuery } from './store/servises/movieApi';
import { useEffect, useState } from 'react';
import { Spinner } from './components /Spinner/Spinner';

export interface Film {
  id: string;
  title: string;
  genre: string;
  posterUrl: string;
}

export default function Home() {
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');

  const { data, isLoading, error } = useGetMoviesQuery('movies');
  const [filtered, setFiltered] = useState<Film[]>();
  const [filteredName, setFilteredName] = useState<Film[]>();
  const [filteredGenre, setFilteredGenre] = useState<Film[]>();
  let timeoutId: NodeJS.Timeout;

  useEffect(() => {
    setFilteredName(data);
    setFilteredGenre(data);
    setFiltered(data);
  }, [data]);

  useEffect(() => {
    if (genre || name) {
      const common = filteredName?.reduce((arr: Film[], item: Film) => {
        if (filteredGenre?.includes(item)) {
          arr.push(item);
        }
        return arr;
      }, []);
      setFiltered(common);
    } else setFiltered(data);
  }, [filteredName, filteredGenre]);

  useEffect(() => {
    if (!name) {
      setTimeout(() => setFilteredName(data), 201);
    } else {
      const debouncedFilter = debounce(() => filterByName(name), 200);
      debouncedFilter();
    }
  }, [name]);

  useEffect(() => {
    if (genre !== '-') {
      let tmp = data?.filter((item: Film) => item.genre === genre);
      setFilteredGenre(tmp);
    } else setFilteredGenre(data);
  }, [genre]);

  function debounce<T extends (...args: any[]) => void>(func: T, delay: number): (...args: Array<T>) => void {

    return function debouncedFn(this: any, ...args: Array<T>): void {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }


  if (isLoading) {
    return <Spinner />;
  }

  if (!data || error) {
    return <span>NotFound</span>;
  }

  function filterByName(currName: string) {
    let tmp = data?.filter((item: Film) => item.title.toLowerCase().startsWith(currName));
    setFilteredName(tmp);
  }

  return (
    <Layout>
      <section className={styles.sectionMain}>
        <SearchFilter name={name} setName={setName} setGenre={setGenre} />
        <section className={styles.filmsList}>
          {!!filtered?.length &&
          filtered.map((item) => {
            return (
              <FilmCard
                key={item.id}
                title={item.title}
                genre={item.genre}
                posterUrl={item.posterUrl}
                id={item.id}
              />
            );
          })}
        </section>
      </section>
      <div id='select-root' />
    </Layout>
  );
}
