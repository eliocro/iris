import React from 'react'
import styled from 'styled-components'
import { colors, FOOTER_HEIGHT } from '../../GlobalStyles'
import SelectionPreview from './SelectionPreview'
import ThumbHeight from './ThumbHeight'
import ThumbLayout from './ThumbLayout'

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${FOOTER_HEIGHT};
  border-top: 1px solid ${colors.border1};
  color: white;
  background-color: ${colors.grayDark2};
`

const StyledInner = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr 1fr 1fr;
  height: 100%;

  h5 {
    font-weight: 300;
  }

  > div {
    padding: 22px 10px;
    font-weight: 300;
    text-align: center;
  }
`

interface SelectedImages {
  [hash: number]: string
}

interface FooterProps {
  selected: SelectedImages
}

function Footer({ selected }: FooterProps): React.JSX.Element {
  return (
    <StyledFooter>
      <StyledInner>
        <SelectionPreview selected={selected} />
        <div>
          <h5>Actions</h5>
        </div>
        <ThumbLayout />
        <ThumbHeight />
      </StyledInner>
    </StyledFooter>
  )
}

export default Footer
