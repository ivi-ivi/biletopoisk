import styles from './button.module.css';
import { CrossIcon } from '../../icons/CrossIcon';

interface Props {
  onClick?: () => void;
  disabled?: boolean;
}

export const DeleteButton = (props: Props) => {
  return (
    <button {...props} className={styles.delBut}>
      <CrossIcon className={styles.delIcon} />
    </button>
  );
};
