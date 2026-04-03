import styled from 'styled-components';

import { AlbumData, ImageItem } from '../../data';
import Gallery from './Gallery';

type SelectedImages = {
  [hash: number]: string;
};

type AlbumProps = {
  data: AlbumData;
  selected: SelectedImages;
  selectImage: (image: ImageItem, withKey: boolean) => void;
  clearSelection: () => void;
};

export default function Album({
  data,
  selected,
  selectImage,
  clearSelection,
}: AlbumProps) {
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
  );
}

const StyledArticle = styled.article`
  &:not(:last-child) {
    margin-bottom: 40px;
  }

  h2 {
    margin-bottom: 0.25rem;
    font-size: 1.5rem;
  }
  p {
    color: var(--color-content-secondary);
  }
`;
