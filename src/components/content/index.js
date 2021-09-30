import React, { useEffect, useState } from 'react';

import AlbumList from '../album-list';
import Album from '../album';

import { getAlbums } from '../../data';

import './style.scss';


function Content({ selected, selectImage, clearSelection }) {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    setAlbums(getAlbums());
  }, []);

  return (
    <main>
      <AlbumList />
      <section className="main-content">
        { albums.map((a, i) => (
          <Album
            key={ i } data={ a }
            selected={ selected } selectImage={ selectImage } clearSelection={ clearSelection }
          />
        )) }
      </section>
    </main>
  );
}

export default Content;
