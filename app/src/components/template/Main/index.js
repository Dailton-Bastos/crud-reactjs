import React from 'react';
import Header from '../Header';

import './style.css';

const Main = ({ children, ...props }) => {
  return (
    <>
      <Header {...props} />
      <main className="wrapper-main">
        <div className="content">{children}</div>
      </main>
    </>
  );
};

export default Main;
