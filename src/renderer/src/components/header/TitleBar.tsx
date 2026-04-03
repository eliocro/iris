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
  inset: 0;
  height: var(--titlebar-height);

  h1 {
    padding: 8px 0;
    font-size: 20px;
    color: #ccc;
    text-align: center;
    pointer-events: none;
  }
`;
