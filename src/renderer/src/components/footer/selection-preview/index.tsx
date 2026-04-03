import React from 'react'

import './style.scss'

interface SelectedImages {
  [hash: number]: string
}

interface SelectionPreviewProps {
  selected: SelectedImages
}

function SelectionPreview({ selected }: SelectionPreviewProps): React.JSX.Element {
  const selectedCount = Object.keys(selected).length
  const selectedImages = Object.values(selected)

  return (
    <div className="selection-preview">
      <div>
        <h5>
          {!selectedCount
            ? 'No selection'
            : `${selectedCount} image${selectedCount > 1 ? 's' : ''} selected`}
        </h5>
      </div>
      <ul>
        {selectedImages.map((url, i) => (
          <li key={i} style={{ backgroundImage: `url(${url})` }}></li>
        ))}
      </ul>
    </div>
  )
}

export default SelectionPreview
