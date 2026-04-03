import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { colors, FOOTER_HEIGHT } from '../GlobalStyles';
import AlbumList from './AlbumList';
import Album from './Album';
import { getAlbums, AlbumData, ImageItem } from '../data';

const StyledSection = styled.section`
  position: fixed;
  overflow: overlay;
  top: 0;
  right: 0;
  width: calc(100% - var(--sidebar-width));
  height: calc(100% - ${FOOTER_HEIGHT});
  padding: 20px 30px 40px;
  color: white;
  background-color: ${colors.grayDark1};
`;

interface SelectedImages {
  [hash: number]: string;
}

interface ContentProps {
  selected: SelectedImages;
  selectImage: (image: ImageItem, withKey: boolean) => void;
  clearSelection: () => void;
}

function Content({ selected, selectImage, clearSelection }: ContentProps) {
  const [albums, setAlbums] = useState<AlbumData[]>([]);

  useEffect(() => {
    setAlbums(getAlbums());
  }, []);

  return (
    <main>
      <AlbumList />
      <StyledSection>
        {albums.map((a, i) => (
          <Album
            key={i}
            data={a}
            selected={selected}
            selectImage={selectImage}
            clearSelection={clearSelection}
          />
        ))}
      </StyledSection>
    </main>
  );
}

export default Content;
