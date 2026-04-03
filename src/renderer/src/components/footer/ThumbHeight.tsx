import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { setImageHeight } from '../../data';

const DEFAULT_THUMB_HEIGHT = 180;

function ThumbHeight() {
  const [thumbHeight, setThumbHeight] = useState(0);

  useEffect(() => {
    const h = window.localStorage.getItem('IRIS_IMAGE_HEIGHT');
    setThumbHeight(parseInt(h ?? '') || DEFAULT_THUMB_HEIGHT);
  }, []);

  useEffect(() => {
    if (thumbHeight) {
      setImageHeight(thumbHeight);
      window.localStorage.setItem('IRIS_IMAGE_HEIGHT', String(thumbHeight));
    }
  }, [thumbHeight]);

  return (
    <StyledDiv>
      <h3>Thumbnail Size</h3>
      <input
        type="range"
        min="60"
        max="250"
        step="15"
        value={thumbHeight}
        onChange={(ev) => setThumbHeight(Number(ev.target.value))}
      />
    </StyledDiv>
  );
}

export default ThumbHeight;

const StyledDiv = styled.div`
  position: relative;
  padding: 1.25rem 1rem;

  font-size: 0.875rem;
  line-height: var(--preview-height);
  font-weight: 500;
  text-align: center;

  h3 {
    margin-bottom: 1rem;
  }

  input[type='range'] {
    -webkit-appearance: none;
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 120px;
    background: none;

    &::-webkit-slider-runnable-track {
      width: 100%;
      height: 5px;
      border-radius: 5px;
      background: var(--color-content-secondary);
    }

    &:hover::-webkit-slider-runnable-track {
      background-color: var(--color-active);
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 12px;
      width: 12px;
      margin-top: -3px;
      border-radius: 6px;
      background-color: var(--color-content-default);
    }
  }
`;
