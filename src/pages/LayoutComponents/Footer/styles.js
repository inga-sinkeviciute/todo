import styled from 'styled-components';

export const StyledFooter = styled.footer`
  position: relative;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3.5rem;
  background-color: ${(props) => props.theme.palette.default.main};

  p {
    font-size: ${(props) => props.theme.typography.legal.fontSize};
    text-align: center;
    color: ${(props) => props.theme.palette.background.light};
  }
`;
