import styles from './input.module.css';
import { ChangeEvent } from 'react';

interface Props {
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: Props) => {
  return <input className={styles.input} {...props} />;
};
