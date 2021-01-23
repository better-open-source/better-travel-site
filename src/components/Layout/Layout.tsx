import React, { FC } from 'react';
import { Header } from '../Header/Header';
import { GlobalStyle } from '../styles/GlobalStyles';



const Layout: FC = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    <main role="main">{children} </main>
  </>
);


export { Layout };
