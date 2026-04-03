import React from 'react'
import styled from 'styled-components'
import Gallery from './Gallery'
import { AlbumData, ImageItem } from '../data'

const StyledArticle = styled.article`
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`

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
    <StyledArticle>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <Gallery
        images={data.images}
        selected={selected}
        selectImage={selectImage}
        clearSelection={clearSelection}
      />
    </StyledArticle>
  )
}

export default Album
