import React from 'react';
import Album from '../album';
import { getAlbums } from '../../data';

import './style.scss';


function Content() {

  const albums = getAlbums();

  return (
    <main className="main-content">
      { albums.map((a, i) => <Album key={ i } data={ a } />) }
    </main>
  );
}

export default Content;
