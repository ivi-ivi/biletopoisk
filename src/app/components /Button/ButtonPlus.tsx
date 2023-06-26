import { PlusIcon } from '../../icons/PlusIcon';
import styles from './button.module.css';

interface Props {
  onClick?: () => void;
  disabled?: boolean;
}

export const ButtonPlus = (props: Props) => {
  return (
    <button {...props} className={styles.button}>
      <PlusIcon className={styles.icon} />
    </button>
  );
};
