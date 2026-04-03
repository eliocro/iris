import React from 'react'

import './style.scss'

import { albums } from '../../data'

function AlbumList(): React.JSX.Element {
  return (
    <aside className="album-list">
      <h3>Albums</h3>
      <ul>
        {albums.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>
    </aside>
  )
}

export default AlbumList
