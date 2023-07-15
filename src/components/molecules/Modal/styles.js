import styled from 'styled-components';

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${(props) => props.theme.palette.overlay.dark};
`;

export const StyledModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledModalTopContainer = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.5rem 0.5rem 0 0;
  background-color: ${(props) => props.theme.palette.default.main};
`;

export const StyledModalTitle = styled.h4`
  max-width: calc(100% - 44px);
  overflow-wrap: break-word;
  color: ${(props) => props.theme.palette.default.light};
  font-size: ${(props) => props.theme.typography.h4.mobile.fontSize};
  line-height: ${(props) => props.theme.typography.h4.mobile.lineHeight};
  letter-spacing: ${(props) => props.theme.typography.h4.mobile.letterSpacing};

  @media screen and (min-width: 768px) {
    font-size: ${(props) => props.theme.typography.h4.tablet.fontSize};
    line-height: ${(props) => props.theme.typography.h4.tablet.lineHeight};
    letter-spacing: ${(props) => props.theme.typography.h4.tablet.letterSpacing};
  }

  @media screen and (min-width: 1024px) {
    font-size: ${(props) => props.theme.typography.h4.desktop.fontSize};
    line-height: ${(props) => props.theme.typography.h4.desktop.lineHeight};
    letter-spacing: ${(props) => props.theme.typography.h4.desktop.letterSpacing};
  }
`;

export const StyledModalBottomContainer = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 0.5rem 0.5rem;
  background-color: ${(props) => props.theme.palette.default.main};
`;

export const SyledCloseButtonContainer = styled.div`
  span {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  i {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 100%;
    font-size: 0.875rem;
    color: ${(props) => props.theme.palette.default.light};
    background-color: ${(props) => props.theme.palette.secondary.main};
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.palette.secondary.light};
    }
  }
`;

export const StyledModalContentContainer = styled.div`
  padding: 2.25rem 1rem 1rem;
`;

export const StyledModal = styled.div`
  min-width: 320px;
  width: calc(100% - 3.5rem);
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.palette.default.dark};

  @media screen and (min-width: 768px) {
    max-width: 698px;
  }
`;
