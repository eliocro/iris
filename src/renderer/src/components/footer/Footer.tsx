import styled from 'styled-components';

import SelectionPreview from './SelectionPreview';
import ThumbHeight from './ThumbHeight';
import ThumbLayout from './ThumbLayout';

type SelectedImages = {
  [hash: number]: string;
};

type FooterProps = {
  selected: SelectedImages;
};

function Footer({ selected }: FooterProps) {
  return (
    <StyledFooter>
      <SelectionPreview selected={selected} />
      <div></div>
      <ThumbLayout />
      <ThumbHeight />
    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: var(--footer-height);

  display: grid;
  grid-template-columns: 400px auto 200px 200px;

  h3 {
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
  }
`;
