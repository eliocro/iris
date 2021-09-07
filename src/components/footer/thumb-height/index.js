import React, { useEffect, useState } from 'react';
import { setImageHeight } from '../../../data';

import './style.scss';


const DEF_THUMB_HEIGHT = 180;


function ThumbHeight() {
  const [thumbHeight, setThumbHeight] = useState(0);

  useEffect(() => {
    const h = window.localStorage.getItem('IRIS_IMAGE_HEIGHT');
    setThumbHeight(parseInt(h) || DEF_THUMB_HEIGHT);
  }, [])

  useEffect(() => {
    if(thumbHeight) {
      setImageHeight(thumbHeight);
      window.localStorage.setItem('IRIS_IMAGE_HEIGHT', thumbHeight);
    }
  }, [thumbHeight]);

  return (
    <div className="thumb-height">
      <h5>Thumbnail Size</h5>
      <input type="range"
        min="60" max="250" step="15"
        value={ thumbHeight }
        onChange={ ev => setThumbHeight(ev.target.value) }
      />
    </div>
  );
}

export default ThumbHeight;
