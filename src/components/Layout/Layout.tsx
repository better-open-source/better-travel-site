import React, { ReactNode } from 'react';
import { Header } from '../Header/Header';
import { GlobalStyle } from '../styles/GlobalStyles';

export interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main role="main">{children} </main>
    </>
  );
};

export { Layout };
