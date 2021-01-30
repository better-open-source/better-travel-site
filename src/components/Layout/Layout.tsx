import React, { FC, useState } from 'react';
import { Dropdown } from '../Dropdown';
import { Footer } from '../Footer';
import { Header } from '../Header/Header';
import { GlobalStyle } from '../styles/GlobalStyles';



const Layout: FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <GlobalStyle />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <main>{children}</main>
      <Footer />
    </>
  );
};


export { Layout };
