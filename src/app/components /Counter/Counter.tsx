'use client';
import { ButtonPlus } from '../Button/ButtonPlus';
import { ButtonMinus } from '../Button/ButtonMinus';
import styles from './counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/features/cart';
import { selectProductAmount } from '../../store/features/cart/selector';
import { Modal } from '../Modal/Modal';
import { useState } from 'react';

export const Counter = ({ id, inCart }: { id: string; inCart?: boolean }) => {
  const dispatch = useDispatch();
  const amount = useSelector((state) => selectProductAmount(state, id));
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className={styles.main}>
      <ButtonMinus
        onClick={() => {
          if (inCart && amount <= 1) setOpen(id);
          else dispatch(cartActions.decrement(id));
        }}
        disabled={amount < 1}
      />
      {amount}
      <ButtonPlus onClick={() => dispatch(cartActions.increment(id))} disabled={amount > 29} />
      <Modal
        title={'Удаление билета'}
        confirmAction={() => dispatch(cartActions.decrement(id))}
        cancelAction={() => setOpen(null)}
        open={open}
        closeModal={() => setOpen(null)}
      >
        Вы уверены, что хотите удалить билет?
      </Modal>
    </div>
  );
};
