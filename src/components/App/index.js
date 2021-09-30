import React, { useEffect, useState } from 'react';

import Footer from '../footer';
import Content from '../content';

import './style.scss';


function App() {
  const [selected, setSelected] = useState({});

  function clearSelection() {
    setSelected({});
  }

  function selectImage({ hash, url }, withKey) {
    let items = { ...selected };
    if(items[hash]) {
      delete items[hash];
    }
    else if(withKey) {
      items[hash] = url;
    }
    else {
      items = { [hash]: url };
    }
    setSelected(items);
  }

  useEffect(() => {
    const onkeyup = ev => {
      if(ev.keyCode === 27) {
        clearSelection();
      }
    }
    window.addEventListener('keyup', onkeyup);
    return () => window.removeEventListener('keyup', onkeyup);
  }, []);

  return (
    <div className="wrapper">
      <h1 className="hidden">Iris</h1>
      <Content
        selected={ selected } selectImage={ selectImage } clearSelection={ clearSelection }
      />
      <Footer selected={ selected } />
    </div>
  );
}

export default App;
