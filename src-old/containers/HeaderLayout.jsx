import React from 'react';
import Header from '@containers/Header';

const HeaderLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default HeaderLayout
