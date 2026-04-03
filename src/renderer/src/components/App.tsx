import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Footer from './footer/Footer';
import Content from './Content';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledDragBar = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--titlebar-height);
  -webkit-app-region: drag;

  h1 {
    padding: 8px 0;
    font-size: 20px;
    color: #CCC;
    text-align: center;
    pointer-events: none;
  }
`;

type SelectedImages = {
  [hash: number]: string;
};

function App() {
  const [selected, setSelected] = useState<SelectedImages>({});

  function clearSelection(): void {
    setSelected({});
  }

  function selectImage(
    image: { hash: number; url: string },
    withKey: boolean,
  ): void {
    let items = { ...selected };
    if (items[image.hash]) {
      delete items[image.hash];
    } else if (withKey) {
      items[image.hash] = image.url;
    } else {
      items = { [image.hash]: image.url };
    }
    setSelected(items);
  }

  useEffect(() => {
    const onkeyup = (ev: KeyboardEvent): void => {
      if (ev.key === 'Escape') {
        clearSelection();
      }
    };
    window.addEventListener('keyup', onkeyup);
    return () => window.removeEventListener('keyup', onkeyup);
  }, []);

  return (
    <StyledWrapper>
      <StyledDragBar>
        <h1>I R I S</h1>
      </StyledDragBar>
      <Content
        selected={selected}
        selectImage={selectImage}
        clearSelection={clearSelection}
      />
      <Footer selected={selected} />
    </StyledWrapper>
  );
}

export default App;
