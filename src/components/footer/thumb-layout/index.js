import React, { useEffect, useState } from 'react';
import ViewCompactOutlinedIcon from '@material-ui/icons/ViewCompactOutlined';
import ViewModuleOutlinedIcon from '@material-ui/icons/ViewModuleOutlined';
import ViewQuiltOutlinedIcon from '@material-ui/icons/ViewQuiltOutlined';
import { setImageLayout } from '../../../data';

import './style.scss';


const DEF_THUMB_LAYOUT = 'masonry';

const THUMB_LAYOUT_OPTIONS = {
  masonry: { 
    title: 'Masonry',
    icon: <ViewCompactOutlinedIcon />
  },
  square: {
    title: 'Square',
    icon: <ViewModuleOutlinedIcon />
  },
  contain: {
    title: 'Contained',
    icon: <ViewQuiltOutlinedIcon />
  },
};


function ThumbLayout() {
  const [thumbLayout, setThumbLayout] = useState('');

  useEffect(() => {
    const l = window.localStorage.getItem('IRIS_IMAGE_LAYOUT');
    setThumbLayout(l || DEF_THUMB_LAYOUT);
  }, [])

  useEffect(() => {
    if(thumbLayout) {
      setImageLayout(thumbLayout);
      window.localStorage.setItem('IRIS_IMAGE_LAYOUT', thumbLayout);
    }
  }, [thumbLayout]);

  return (
    <div className="thumb-layout">
      <h5>Thumbnail Layout</h5>
      <div className="thumb-layout__options">
         { Object.keys(THUMB_LAYOUT_OPTIONS).map((opt, i) => (
          <span key={ i }>
            <input id={ `radio-layout-${i}`} type="radio" name="layout"
              value={ opt }
              checked={ thumbLayout === opt }
              onChange={ ev => setThumbLayout(ev.target.value) }
            />
            <label htmlFor={ `radio-layout-${i}`} title={ THUMB_LAYOUT_OPTIONS[opt].title }>
              <span>{ THUMB_LAYOUT_OPTIONS[opt].title }</span>
              { THUMB_LAYOUT_OPTIONS[opt].icon }
            </label>
          </span>
         )) }
      </div>
    </div>
  );
}

export default ThumbLayout;
