'use client';

import styles from './reviews.module.css';
import { EmptyImage } from '../other/EmptyImage';

interface Props {
  name: string;
  text: string;
  rating: number;
}

export const Review = ({ name, text, rating }: Props) => {
  return (
    <section className={styles.main}>
      <EmptyImage />
      <div className={styles.body}>
        <div className={styles.title}>
          <span className={styles.name}>{name}</span>
          <span>
            Оценка: <span className={styles.name}>{rating}</span>
          </span>
        </div>
        <span>{text}</span>
      </div>
    </section>
  );
};
