import React from 'react';

import './style.scss';

import { albums } from '../../data';


function Sidebar() {
  return (
    <aside className="sidebar">
      {/* <h3>Albums</h3> */}
      <ul>
        { albums.map((a,i) => <li key={ i }>{ a }</li>) }
      </ul>
    </aside>
  );
}

export default Sidebar;
