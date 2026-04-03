import { useEffect, useState } from 'react';
import styled from 'styled-components';

import TitleBar from './components/header/TitleBar';
import Footer from './components/footer/Footer';
import Sidebar from './components/gallery-view/Sidebar';
import AlbumList from './components/gallery-view/AlbumList';

type SelectedImages = {
  [hash: number]: string;
};

export default function App() {
  const [selected, setSelected] = useState<SelectedImages>({});

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
      if (ev.key === 'Escape') setSelected({});
    };
    window.addEventListener('keyup', onkeyup);
    return () => window.removeEventListener('keyup', onkeyup);
  }, []);

  return (
    <StyledWrapper>
      <TitleBar />
      <StyledMain>
        <Sidebar />
        <AlbumList
          selected={selected}
          selectImage={selectImage}
          clearSelection={() => setSelected({})}
        />
      </StyledMain>
      <Footer selected={selected} />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const StyledMain = styled.main`
  position: fixed;
  left: 0;
  right: 0;
  top: var(--titlebar-height);
  bottom: var(--footer-height);

  display: grid;
  grid-template-columns: 250px auto;
  gap: 1rem;
  padding: 0 1rem;
`;
