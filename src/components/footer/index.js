import React from 'react';
import ThumbHeight from './thumb-height';
import ThumbLayout from './thumb-layout';

import './style.scss';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <h5>Selection</h5>
        </div>
        <div>
          <h5>Actions</h5>
        </div>
        <ThumbLayout />
        <ThumbHeight />
      </div>
    </footer>
  );
}

export default Footer;
