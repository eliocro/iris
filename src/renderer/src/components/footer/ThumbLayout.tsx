import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import ViewCompactOutlinedIcon from '@mui/icons-material/ViewCompactOutlined';
import ViewModuleOutlinedIcon from '@mui/icons-material/ViewModuleOutlined';
import ViewQuiltOutlinedIcon from '@mui/icons-material/ViewQuiltOutlined';

import { setImageLayout } from '../../data';

const DEFAULT_LAYOUT = 'masonry';

type LayoutOption = {
  value: string;
  label: string;
  icon: React.JSX.Element;
};

const LAYOUT_OPTIONS: LayoutOption[] = [
  {
    value: 'masonry',
    label: 'Masonry',
    icon: <ViewCompactOutlinedIcon />,
  },
  {
    value: 'square',
    label: 'Square',
    icon: <ViewModuleOutlinedIcon />,
  },
  {
    value: 'contain',
    label: 'Contained',
    icon: <ViewQuiltOutlinedIcon />,
  },
];

export default function ThumbLayout() {
  const [thumbLayout, setThumbLayout] = useState('');

  useEffect(() => {
    const l = window.localStorage.getItem('IRIS_IMAGE_LAYOUT');
    setThumbLayout(l || DEFAULT_LAYOUT);
  }, []);

  useEffect(() => {
    if (thumbLayout) {
      setImageLayout(thumbLayout);
      window.localStorage.setItem('IRIS_IMAGE_LAYOUT', thumbLayout);
    }
  }, [thumbLayout]);

  return (
    <StyledDiv>
      <h3>Thumbnail Layout</h3>
      <div>
        {LAYOUT_OPTIONS.map((opt, idx) => (
          <button
            key={idx}
            aria-selected={thumbLayout === opt.value ? 'true' : undefined}
            aria-label={opt.label}
            onClick={() => setThumbLayout(opt.value)}
          >
            {opt.icon}
          </button>
        ))}
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  position: relative;
  padding: 1.25rem 1rem;

  font-size: 0.875rem;
  line-height: var(--preview-height);
  font-weight: 500;
  text-align: center;

  h3 {
    margin-bottom: 0.25rem;
  }

  div {
    display: flex;
    gap: 0.5rem;
    width: fit-content;
    margin: 0 auto;
  }

  button {
    padding: 0.125rem;
    border-radius: 0.25rem;
    background-color: var(--color-background-secondary);
    color: inherit;
    cursor: pointer;

    &[aria-selected='true'] {
      background-color: transparent;
      color: var(--color-active);
      cursor: initial;
    }
    & svg {
      display: block;
    }
  }
`;
