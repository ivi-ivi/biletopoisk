'use client';

import { useGetMovieQuery } from '../../store/servises/movieApi';
import { FullCard } from '../../components /FilmCard/FullCard';
import { Layout } from '../../layout/Layout';
import { Reviews } from '../../components /Reviews/Reviews';
import { Spinner } from '../../components /Spinner/Spinner';

export default function Film({ params }: { params: { id: number } }) {
  const { data, isLoading, error } = useGetMovieQuery(params.id);

  if (isLoading) {
    return <Spinner />;
  }

  if (!data || error) {
    return <span>NotFound</span>;
  }

  return (
    <Layout>
      <FullCard
        img={data.posterUrl}
        title={data.title}
        genre={data.genre}
        director={data.director}
        description={data.description}
        rating={data.rating}
        releaseYear={data.releaseYear}
        id={params.id}
      />
      <Reviews id={params.id} />
    </Layout>
  );
}
