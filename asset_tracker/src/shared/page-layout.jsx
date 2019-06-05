import React from 'react';
import { Header } from '../Components/Header';

export function PageLayout({ children }) {
  return (
    <Fragment>
      <NavBar />
      <Header />

      {children}

      <footer>This could be the footer of the app</footer>
    </Fragment>
  );
}
