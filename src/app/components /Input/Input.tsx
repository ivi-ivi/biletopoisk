import styles from './input.module.css';

interface Props {
  placeholder: string;
  value: string;
  onChange: (e) => void;
}

export const Input = (props: Props) => {
  return <input className={styles.input} {...props} />;
};
