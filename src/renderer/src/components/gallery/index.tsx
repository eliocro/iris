import React from 'react'

import { ImageItem } from '../../data'

import './style.scss'

interface SelectedImages {
  [hash: number]: string
}

interface GalleryProps {
  images: ImageItem[]
  selected: SelectedImages
  selectImage: (image: ImageItem, withKey: boolean) => void
  clearSelection: () => void
}

function Gallery({ images, selected, selectImage, clearSelection }: GalleryProps): React.JSX.Element {
  const onImageClick = (ev: React.MouseEvent, idx: number): void => {
    ev.stopPropagation()
    selectImage(images[idx], ev.ctrlKey || ev.metaKey)
  }

  return (
    <section className="gallery" onClick={() => clearSelection()}>
      {images.map((img, i) => (
        <div
          key={i}
          style={{ backgroundImage: `url(${img.url})` }}
          className={`image${selected[img.hash] ? ' selected' : ''}`}
          onClick={(ev) => onImageClick(ev, i)}
          onDoubleClick={(ev) => console.log('double-click', ev)}
        >
          <img src={img.url} alt="" />
        </div>
      ))}
    </section>
  )
}

export default Gallery
