import React from 'react';

import Footer from '../footer';
import Sidebar from '../sidebar';
import Content from '../content';

import './style.scss';


function App() {
  return (
    <div className="wrapper">
      <h1 className="hidden">Iris</h1>
      <Sidebar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
