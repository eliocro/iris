import React from 'react';

import './style.scss';


function Gallery({ images }) {
  return (
    <section className="gallery">
      { images.map((src, i) => (
        <div key={ i } className="image" style={{ backgroundImage: `url(${ src })` }}><img src={ src } alt="" /></div>
      )) }
    </section>
  );
}

export default Gallery;
