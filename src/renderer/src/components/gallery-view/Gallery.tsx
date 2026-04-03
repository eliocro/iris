import React from 'react';
import styled from 'styled-components';

import { ImageItem } from '../../data';

type SelectedImages = {
  [hash: number]: string;
};

type GalleryProps = {
  images: ImageItem[];
  selected: SelectedImages;
  selectImage: (image: ImageItem, withKey: boolean) => void;
  clearSelection: () => void;
};

export default function Gallery({
  images,
  selected,
  selectImage,
  clearSelection,
}: GalleryProps) {
  const onImageClick = (ev: React.MouseEvent, idx: number): void => {
    ev.stopPropagation();
    selectImage(images[idx], ev.ctrlKey || ev.metaKey);
  };

  return (
    <StyledSection onClick={() => clearSelection()}>
      {images.map((img, idx) => (
        <figure
          key={idx}
          style={{ backgroundImage: `url(${img.url})` }}
          aria-selected={selected[img.hash] ? 'true' : undefined}
          onClick={(ev) => onImageClick(ev, idx)}
          onDoubleClick={(ev) => console.log('double-click', ev)}
        >
          <img src={img.url} alt="" />
        </figure>
      ))}
    </StyledSection>
  );
}

const StyledSection = styled.section`
  min-height: var(--image-height);
  margin-top: 1.25rem;

  &::after {
    content: '';
    display: block;
    clear: both;
  }

  img {
    display: none;
    height: var(--image-height);
    margin: 0 auto;
    opacity: 0;
    pointer-events: none;

    .thumb-layout--masonry & {
      display: block;
    }
  }

  figure {
    display: block;
    float: left;
    margin-right: 4px;
    margin-bottom: 4px;
    max-width: calc(var(--image-height) * 1.75);
    min-width: calc(var(--image-height) * 0.666);
    height: var(--image-height);
    width: calc(var(--image-height) * 1.25);

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    overflow: hidden;

    .thumb-layout--masonry & {
      width: auto;
    }
    .thumb-layout--contain & {
      background-size: contain;
    }

    &[aria-selected='true'] {
      box-shadow: inset 0px 0px 0px 4px rgba(255, 255, 255, 0.75);
    }
  }
`;
