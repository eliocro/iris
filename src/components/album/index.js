import React from 'react';
import Gallery from '../gallery';

import './style.scss';


function Album({ data }) {
  return (
    <article className="album">
      <h2>{ data.title }</h2>
      <p>{ data.description }</p>
      <Gallery images={ data.images } />
    </article>
  );
}


export default Album;
