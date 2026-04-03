import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { colors } from '../../GlobalStyles';
import { setImageHeight } from '../../data';

const StyledWrapper = styled.div``;

const StyledRange = styled.input`
  -webkit-appearance: none;
  margin: 0 auto;
  width: 100%;
  max-width: 120px;
  background: none;
  display: block;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    background: ${colors.grayMid1};
    border-radius: 5px;
  }

  &:hover::-webkit-slider-runnable-track {
    background-color: ${colors.green};
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 12px;
    width: 12px;
    margin-top: -3px;
    border-radius: 6px;
    background-color: ${colors.white};
  }
`;

const DEF_THUMB_HEIGHT = 180;

function ThumbHeight() {
  const [thumbHeight, setThumbHeight] = useState(0);

  useEffect(() => {
    const h = window.localStorage.getItem('IRIS_IMAGE_HEIGHT');
    setThumbHeight(parseInt(h ?? '') || DEF_THUMB_HEIGHT);
  }, []);

  useEffect(() => {
    if (thumbHeight) {
      setImageHeight(thumbHeight);
      window.localStorage.setItem('IRIS_IMAGE_HEIGHT', String(thumbHeight));
    }
  }, [thumbHeight]);

  return (
    <StyledWrapper>
      <h5>Thumbnail Size</h5>
      <StyledRange
        type="range"
        min="60"
        max="250"
        step="15"
        value={thumbHeight}
        onChange={(ev) => setThumbHeight(Number(ev.target.value))}
      />
    </StyledWrapper>
  );
}

export default ThumbHeight;
