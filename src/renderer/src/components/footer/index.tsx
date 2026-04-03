import React from 'react'

import SelectionPreview from './selection-preview'
import ThumbHeight from './thumb-height'
import ThumbLayout from './thumb-layout'

import './style.scss'

interface SelectedImages {
  [hash: number]: string
}

interface FooterProps {
  selected: SelectedImages
}

function Footer({ selected }: FooterProps): React.JSX.Element {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <SelectionPreview selected={selected} />
        <div>
          <h5>Actions</h5>
        </div>
        <ThumbLayout />
        <ThumbHeight />
      </div>
    </footer>
  )
}

export default Footer
