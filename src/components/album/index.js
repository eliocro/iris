import React from 'react';
import Gallery from '../gallery';

import './style.scss';


function Album({ data, selected, selectImage, clearSelection }) {
  return (
    <article className="album">
      <h2>{ data.title }</h2>
      <p>{ data.description }</p>
      <Gallery
        images={ data.images }
        selected={ selected } selectImage={ selectImage } clearSelection={ clearSelection }
      />
    </article>
  );
}


export default Album;
