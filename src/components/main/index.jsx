import React from 'react';
import './index.css';

const Main = (props) => {
  return (
    <main className="main">
      {props.children}
    </main>
  );
};

export default Main;
