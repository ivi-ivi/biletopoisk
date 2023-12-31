import styles from '../page.module.css';
import { CartIcon } from '../icons/CartIcon';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { ReactNode } from 'react';

export const Layout = ({ children }: { children: ReactNode }) => {
  const amount = useSelector((state: any) => state.cart);
  const num = Object.values(amount).reduce(
    (accumulator: number, currentValue: any) => accumulator + currentValue,
    0
  );

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Link className={styles.logo} href='/'>
          Билетопоиск
        </Link>
        <Link className={styles.cart} href='../pages/cart'>
          {num ? <div className={styles.count}>{num}</div> : null}
          <CartIcon />
        </Link>
      </header>
      <div>{children}</div>
      <footer className={styles.footer}>
        <Link href='../pages/faq'>Вопросы-ответы</Link>
        <Link href='../pages/about'>О нас</Link>
      </footer>
    </main>
  );
};
