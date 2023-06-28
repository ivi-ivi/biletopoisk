'use client';

import { Layout } from '../../layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../../store/servises/movieApi';
import { FilmCard } from '../../components /FilmCard/FilmCard';
import styles from './cart.module.css';
import { DeleteButton } from '../../components /Button/DeleteButton';
import { Modal } from '../../components /Modal/Modal';
import { useState } from 'react';
import { cartActions } from '../../store/features/cart';
import { Spinner } from '../../components /Spinner/Spinner';
import { Film } from '../../page';

export default function Cart() {
  const amount = useSelector((state: any) => state.cart);
  const { data, isLoading, error } = useGetMoviesQuery('movies');
  const [open, setOpen] = useState<string | null>(null);
  const dispatch = useDispatch();

  if (isLoading) {
    return <Spinner />;
  }

  if (!data || error) {
    return <span>NotFound</span>;
  }

  return (
    <>
      <Layout>
        <div className={styles.main}>
          {Object.values(amount).length ? (
            <>
              {data.map((item: Film) => {
                if (amount.hasOwnProperty(item.id))
                  return (
                    <FilmCard
                      renderDeleteButton={() => <DeleteButton onClick={() => setOpen(item.id)} />}
                      key={item.id}
                      title={item.title}
                      genre={item.genre}
                      posterUrl={item.posterUrl}
                      id={item.id}
                      inCart={true}
                    />
                  );
                else return null;
              })}
              <div className={styles.total}>
                <span className={styles.title}>Итого билетов:</span>
                <span className={styles.title}>
                  {Object.values(amount).reduce(
                    (accumulator: number, currentValue: any) => accumulator + currentValue,
                    0
                  )}
                </span>
              </div>
            </>
          ) : (
            <span className={styles.noTickets}>Нет билетов</span>
          )}
        </div>
      </Layout>
      <Modal
        title={'Удаление билета'}
        closeModal={() => setOpen(null)}
        cancelAction={() => setOpen(null)}
        confirmAction={() => dispatch(cartActions.remove(open))}
        open={open}
      >
        Вы уверены, что хотите удалить билет?
      </Modal>
    </>
  );
}
