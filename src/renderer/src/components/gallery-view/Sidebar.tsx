import styled from 'styled-components';

import { colors } from '../../GlobalStyles';
import { albums } from '../../data';

export default function Sidebar() {
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

const StyledAside = styled.aside`
  height: 100%;
  padding: 20px;
  overflow: overlay;

  border-radius: 1rem;
  /* border: 1px solid red; */
  background-color: #111;
  color: ${colors.white};

  h3 {
    margin-bottom: 0.5rem;
  }

  li {
    display: block;
    margin-bottom: 0.25rem;
    font-size: 1rem;

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
