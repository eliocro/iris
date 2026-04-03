import styled from 'styled-components';

export default function Header() {
  return (
    <StyledHeader>
      <h1>I R I S</h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  -webkit-app-region: drag;

  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  height: var(--titlebar-height);

  h1 {
    margin: 0.5rem auto;
    width: fit-content;
    color: #ccc;

    font-size: 1.25rem;
    line-height: 1.2;
    text-align: center;
    pointer-events: none;
  }
`;
