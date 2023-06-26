import './globals.css';
import { Roboto } from 'next/font/google';
import React from 'react';
import { StoreProvider } from './StoreProvider';

const roboto = Roboto({
  weight: ['400', '500', '700', '300'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'cyrillic'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
