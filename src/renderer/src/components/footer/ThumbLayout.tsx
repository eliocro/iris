import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { colors } from '../../GlobalStyles'
import ViewCompactOutlinedIcon from '@mui/icons-material/ViewCompactOutlined'
import ViewModuleOutlinedIcon from '@mui/icons-material/ViewModuleOutlined'
import ViewQuiltOutlinedIcon from '@mui/icons-material/ViewQuiltOutlined'
import { setImageLayout } from '../../data'

const StyledWrapper = styled.div``

const StyledOptions = styled.div`
  > span {
    position: relative;
    display: inline-block;
    margin-left: 4px;
    margin-right: 4px;
  }
`

const StyledRadio = styled.input`
  position: absolute;
  clip: rect(0, 0, 0, 0);

  & + label span {
    position: absolute;
    clip: rect(0 0 0 0);
  }

  &:checked + label svg {
    fill: ${colors.green};
  }
`

const StyledLabel = styled.label``

const DEF_THUMB_LAYOUT = 'masonry'

interface LayoutOption {
  title: string
  icon: React.JSX.Element
}

const THUMB_LAYOUT_OPTIONS: Record<string, LayoutOption> = {
  masonry: {
    title: 'Masonry',
    icon: <ViewCompactOutlinedIcon />,
  },
  square: {
    title: 'Square',
    icon: <ViewModuleOutlinedIcon />,
  },
  contain: {
    title: 'Contained',
    icon: <ViewQuiltOutlinedIcon />,
  },
}

function ThumbLayout(): React.JSX.Element {
  const [thumbLayout, setThumbLayout] = useState('')

  useEffect(() => {
    const l = window.localStorage.getItem('IRIS_IMAGE_LAYOUT')
    setThumbLayout(l || DEF_THUMB_LAYOUT)
  }, [])

  useEffect(() => {
    if (thumbLayout) {
      setImageLayout(thumbLayout)
      window.localStorage.setItem('IRIS_IMAGE_LAYOUT', thumbLayout)
    }
  }, [thumbLayout])

  return (
    <StyledWrapper>
      <h5>Thumbnail Layout</h5>
      <StyledOptions>
        {Object.keys(THUMB_LAYOUT_OPTIONS).map((opt, i) => (
          <span key={i}>
            <StyledRadio
              id={`radio-layout-${i}`}
              type="radio"
              name="layout"
              value={opt}
              checked={thumbLayout === opt}
              onChange={(ev) => setThumbLayout(ev.target.value)}
            />
            <StyledLabel htmlFor={`radio-layout-${i}`} title={THUMB_LAYOUT_OPTIONS[opt].title}>
              <span>{THUMB_LAYOUT_OPTIONS[opt].title}</span>
              {THUMB_LAYOUT_OPTIONS[opt].icon}
            </StyledLabel>
          </span>
        ))}
      </StyledOptions>
    </StyledWrapper>
  )
}

export default ThumbLayout
