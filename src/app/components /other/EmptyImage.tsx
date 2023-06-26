import { ImageIcon } from '../../icons/ImageIcon';
import styles from './other.module.css';

export const EmptyImage = () => {
  return (
    <div className={styles.img}>
      <ImageIcon />
    </div>
  );
};
