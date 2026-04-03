import React, { useEffect, useState } from 'react'
import ViewCompactOutlinedIcon from '@mui/icons-material/ViewCompactOutlined'
import ViewModuleOutlinedIcon from '@mui/icons-material/ViewModuleOutlined'
import ViewQuiltOutlinedIcon from '@mui/icons-material/ViewQuiltOutlined'
import { setImageLayout } from '../../../data'

import './style.scss'

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
    <div className="thumb-layout">
      <h5>Thumbnail Layout</h5>
      <div className="thumb-layout__options">
        {Object.keys(THUMB_LAYOUT_OPTIONS).map((opt, i) => (
          <span key={i}>
            <input
              id={`radio-layout-${i}`}
              type="radio"
              name="layout"
              value={opt}
              checked={thumbLayout === opt}
              onChange={(ev) => setThumbLayout(ev.target.value)}
            />
            <label htmlFor={`radio-layout-${i}`} title={THUMB_LAYOUT_OPTIONS[opt].title}>
              <span>{THUMB_LAYOUT_OPTIONS[opt].title}</span>
              {THUMB_LAYOUT_OPTIONS[opt].icon}
            </label>
          </span>
        ))}
      </div>
    </div>
  )
}

export default ThumbLayout
