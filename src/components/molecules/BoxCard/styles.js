import styled from 'styled-components';

export const StyledBoxCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.25em;
  width: 100%;
`;

export const StyledBoxCardImg = styled.div`
  font-size: 5em;
  align-self: center;
  color: ${(props) => props.theme.palette.secondary.main};

  .fa-user-plus {
    padding-left: 28px;
  }
`;

export const StyledBoxCardContent = styled.div`
  max-width: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  text-align: center;

  h4 {
    color: ${(props) => props.theme.palette.background.light};
    font-size: ${(props) => props.theme.typography.h4.mobile.fontSize};
    line-height: ${(props) => props.theme.typography.h4.mobile.lineHeight};
    letter-spacing: ${(props) => props.theme.typography.h4.mobile.letterSpacing};
  }

  p {
    color: ${(props) => props.theme.palette.background.main};
    font-size: ${(props) => props.theme.typography.body.fontSize};
    line-height: ${(props) => props.theme.typography.body.lineHeight};
  }
`;
