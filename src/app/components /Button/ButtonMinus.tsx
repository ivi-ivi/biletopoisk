import styles from './button.module.css';
import { MinusIcon } from '../../icons/MinusIcon';

interface Props {
  onClick?: () => void;
  disabled?: boolean;
}

export const ButtonMinus = (props: Props) => {
  return (
    <button {...props} className={styles.button}>
      <MinusIcon className={styles.icon} />
    </button>
  );
};
