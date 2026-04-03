import styled from 'styled-components';

const PREVIEW_HEIGHT = '40px';

const StyledWrapper = styled.div`
  position: relative;
  --preview-height: ${PREVIEW_HEIGHT};
`;

const StyledOverlay = styled.div`
  position: absolute;
  z-index: 2;
  width: calc(100% - 20px);
  height: var(--preview-height);

  h5 {
    line-height: var(--preview-height);
    font-weight: 700;
    text-shadow: 0 0 5px black;
  }
`;

const StyledList = styled.ul`
  overflow: hidden;
  margin: 0;
  padding: 0;
  height: var(--preview-height);
  text-align: center;
`;

const StyledItem = styled.li`
  display: inline-block;
  margin: 0 2px;
  width: var(--preview-height);
  height: var(--preview-height);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.4;
  list-style: none;
`;

interface SelectedImages {
  [hash: number]: string;
}

interface SelectionPreviewProps {
  selected: SelectedImages;
}

function SelectionPreview({ selected }: SelectionPreviewProps) {
  const selectedCount = Object.keys(selected).length;
  const selectedImages = Object.values(selected);

  return (
    <StyledWrapper>
      <StyledOverlay>
        <h5>
          {!selectedCount
            ? 'No selection'
            : `${selectedCount} image${selectedCount > 1 ? 's' : ''} selected`}
        </h5>
      </StyledOverlay>
      <StyledList>
        {selectedImages.map((url, i) => (
          <StyledItem key={i} style={{ backgroundImage: `url(${url})` }} />
        ))}
      </StyledList>
    </StyledWrapper>
  );
}

export default SelectionPreview;
