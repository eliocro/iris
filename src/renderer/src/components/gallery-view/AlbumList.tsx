import styled from 'styled-components';

import { colors } from '../../GlobalStyles';
import { getAlbums, ImageItem } from '../../data';
import Album from './Album';

const albums = getAlbums();

type AlbumListProps = {
  selected: { [hash: number]: string };
  selectImage: (image: ImageItem, withKey: boolean) => void;
  clearSelection: () => void;
};

export default function AlbumList({
  selected,
  selectImage,
  clearSelection,
}: AlbumListProps) {
  return (
    <StyledSection>
      {albums.map((item, idx) => (
        <Album
          key={idx}
          data={item}
          selected={selected}
          selectImage={selectImage}
          clearSelection={clearSelection}
        />
      ))}
    </StyledSection>
  );
}

const StyledSection = styled.div`
  height: 100%;
  overflow: auto;
  padding: 1rem 1.5rem;

  border-radius: 1rem;
  background-color: ${colors.grayDark1};
  color: white;
`;
