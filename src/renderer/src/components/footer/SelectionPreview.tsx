import styled from 'styled-components';

const PREVIEW_HEIGHT = '40px';

type SelectedImages = {
  [hash: number]: string;
};

type SelectionPreviewProps = {
  selected: SelectedImages;
};

function SelectionPreview({ selected }: SelectionPreviewProps) {
  const selectedCount = Object.keys(selected).length;
  const selectedImages = Object.values(selected);

  return (
    <StyledDiv>
      <h3>
        {!selectedCount
          ? 'No selection'
          : `${selectedCount} image${selectedCount > 1 ? 's' : ''} selected`}
      </h3>
      <ul>
        {selectedImages.slice(0, 8).map((url, idx) => (
          <li key={idx} style={{ backgroundImage: `url(${url})` }} />
        ))}
      </ul>
    </StyledDiv>
  );
}

export default SelectionPreview;

const StyledDiv = styled.div`
  --preview-height: ${PREVIEW_HEIGHT};

  position: relative;
  padding: 1.5rem 1rem;

  font-size: 0.875rem;
  line-height: var(--preview-height);
  font-weight: 500;
  text-shadow: 0 0 5px black;

  h3 {
    display: flex;
    flex-direction: column;
    align-items: center;

    position: absolute;
    z-index: 2;
    width: calc(100% - 2rem);
    height: var(--preview-height);
  }

  ul {
    display: flex;
    gap: 0.25rem;
    width: fit-content;
    margin: 0 auto;
  }

  li {
    list-style: none;
    width: var(--preview-height);
    height: var(--preview-height);

    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.333;
  }
`;
