import React from 'react';

import './style.scss';


function Gallery({ images, selected, selectImage, clearSelection }) {

  const onImageClick = (ev, idx) => {
    ev.stopPropagation()
    selectImage(images[idx], ev.ctrlKey || ev.metaKey)
  };

  return (
    <section className="gallery" onClick={ () => clearSelection() }>
      { images.map((img, i) => (
        <div key={ i }
          style={{ backgroundImage: `url(${ img.url })` }}
          className={ `image${ selected[img.hash] ? ' selected' : '' }`}
          onClick={ ev => onImageClick(ev, i) }
          onDoubleClick={ ev => console.log('double-click', ev) }
        >
          <img src={ img.url } alt="" />
        </div>
      )) }
    </section>
  );
}

export default Gallery;
