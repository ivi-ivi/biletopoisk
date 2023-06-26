'use client';

import { Layout } from '../../layout/Layout';
import styles from './faq.module.css';
import Dropdown from '../../components /Dropdown/Dropdown';

export default function FAQ() {
  return (
    <Layout>
      <section className={styles.body}>
        <Dropdown />
      </section>
    </Layout>
  );
}
