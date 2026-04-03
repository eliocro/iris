import styled from 'styled-components';

import { albums } from '../../data';

export default function Sidebar() {
  return (
    <StyledAside>
      <h2>Albums</h2>
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
  background-color: var(--color-background-secondary);

  h2 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
  }

  li {
    display: block;
    margin-bottom: 0.25rem;
    font-size: 1rem;

    color: var(--color-content-secondary);
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    &:hover {
      color: var(--color-content-default);
      cursor: pointer;
    }
  }
`;
