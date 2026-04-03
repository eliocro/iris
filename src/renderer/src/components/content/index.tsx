import React, { useEffect, useState } from 'react'

import AlbumList from '../album-list'
import Album from '../album'

import { getAlbums, AlbumData, ImageItem } from '../../data'

import './style.scss'

interface SelectedImages {
  [hash: number]: string
}

interface ContentProps {
  selected: SelectedImages
  selectImage: (image: ImageItem, withKey: boolean) => void
  clearSelection: () => void
}

function Content({ selected, selectImage, clearSelection }: ContentProps): React.JSX.Element {
  const [albums, setAlbums] = useState<AlbumData[]>([])

  useEffect(() => {
    setAlbums(getAlbums())
  }, [])

  return (
    <main>
      <AlbumList />
      <section className="main-content">
        {albums.map((a, i) => (
          <Album
            key={i}
            data={a}
            selected={selected}
            selectImage={selectImage}
            clearSelection={clearSelection}
          />
        ))}
      </section>
    </main>
  )
}

export default Content
