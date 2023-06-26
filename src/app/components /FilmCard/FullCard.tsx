import styles from './full.module.css';
import { Counter } from '../Counter/Counter';

interface Props {
  id: string;
  img: string;
  title: string;
  genre: string;
  releaseYear: number;
  rating: number;
  director: string;
  description: string;
}

export const FullCard = ({
  img,
  title,
  genre,
  releaseYear,
  rating,
  director,
  description,
  id,
}: Props) => {
  return (
    <div className={styles.main}>
      <img className={styles.img} src={img} />
      <section className={styles.body}>
        <section className={styles.part}>
          <div className={styles.titleBlock}>
            <span className={styles.title}>{title}</span>
            <Counter id={id} />
          </div>
          <div className={styles.info}>
            <span>
              <span className={styles.bold}>Жанр:</span>
              {genre}
            </span>
            <span>
              <span className={styles.bold}>Год выпуска:</span>
              {releaseYear}
            </span>
            <span>
              <span className={styles.bold}>Рейтинг:</span>
              {rating}
            </span>
            <span>
              <span className={styles.bold}>Режиссер:</span>
              {director}
            </span>
          </div>
        </section>
        <section className={styles.info}>
          <span className={styles.bold}>Описание</span>
          <span>{description}</span>
        </section>
      </section>
    </div>
  );
};
