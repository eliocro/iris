import React from 'react'
import Gallery from '../gallery'

import { AlbumData, ImageItem } from '../../data'

import './style.scss'

interface SelectedImages {
  [hash: number]: string
}

interface AlbumProps {
  data: AlbumData
  selected: SelectedImages
  selectImage: (image: ImageItem, withKey: boolean) => void
  clearSelection: () => void
}

function Album({ data, selected, selectImage, clearSelection }: AlbumProps): React.JSX.Element {
  return (
    <article className="album">
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <Gallery
        images={data.images}
        selected={selected}
        selectImage={selectImage}
        clearSelection={clearSelection}
      />
    </article>
  )
}

export default Album
