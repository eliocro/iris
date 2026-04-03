import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Footer from './footer/Footer'
import Content from './Content'

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
`

interface SelectedImages {
  [hash: number]: string
}

function App(): React.JSX.Element {
  const [selected, setSelected] = useState<SelectedImages>({})

  function clearSelection(): void {
    setSelected({})
  }

  function selectImage(image: { hash: number; url: string }, withKey: boolean): void {
    let items = { ...selected }
    if (items[image.hash]) {
      delete items[image.hash]
    } else if (withKey) {
      items[image.hash] = image.url
    } else {
      items = { [image.hash]: image.url }
    }
    setSelected(items)
  }

  useEffect(() => {
    const onkeyup = (ev: KeyboardEvent): void => {
      if (ev.key === 'Escape') {
        clearSelection()
      }
    }
    window.addEventListener('keyup', onkeyup)
    return () => window.removeEventListener('keyup', onkeyup)
  }, [])

  return (
    <StyledWrapper>
      <h1 className="hidden">Iris</h1>
      <Content selected={selected} selectImage={selectImage} clearSelection={clearSelection} />
      <Footer selected={selected} />
    </StyledWrapper>
  )
}

export default App
