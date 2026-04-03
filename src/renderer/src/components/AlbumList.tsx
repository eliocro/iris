import styled from 'styled-components';

import { colors, FOOTER_HEIGHT } from '../GlobalStyles';
import { albums } from '../data';

const StyledAside = styled.aside`
  position: fixed;
  overflow: overlay;
  top: 0;
  left: 0;
  width: var(--sidebar-width);
  height: calc(100% - ${FOOTER_HEIGHT});
  padding: 20px;
  color: ${colors.white};
  background-color: ${colors.black};

  h3 {
    margin-bottom: 5px;
  }

  li {
    display: block;
    margin-bottom: 5px;
    font-size: 0.95em;
    color: ${colors.grayLight1};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    &:hover {
      color: ${colors.white};
      cursor: pointer;
    }
  }
`;

function AlbumList() {
  return (
    <StyledAside>
      <h3>Albums</h3>
      <ul>
        {albums.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>
    </StyledAside>
  );
}

export default AlbumList;
