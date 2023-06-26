import styles from './card.module.css';
import { Counter } from '../Counter/Counter';
import Link from 'next/link';

interface Props {
  title: string;
  genre: string;
  posterUrl: string;
  id: string;
  renderDeleteButton?: () => HTMLButtonElement;
  inCart?: boolean;
}

export const FilmCard = ({ title, genre, posterUrl, id, renderDeleteButton, inCart }: Props) => {
  return (
    <div className={styles.main}>
      <img className={styles.pic} src={posterUrl} />
      <div className={styles.body}>
        <Link href={`../pages/${id}`} className={styles.title}>
          {title}
        </Link>
        <span className={styles.genre}>{genre}</span>
      </div>
      <div className={styles.buttons}>
        <Counter inCart={inCart} id={id} />
        {renderDeleteButton?.()}
      </div>
    </div>
  );
};
