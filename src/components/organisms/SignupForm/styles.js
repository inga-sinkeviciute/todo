import styled from 'styled-components';

export const StyledFormBottomMessage = styled.p`
  display: flex;
  gap: 6px;
  font-size: 14px;
  line-height: ${(props) => props.theme.typography.body.lineHeight};
  color: ${(props) => props.theme.palette.background.light};
`;

export const StyledFormBottomButton = styled.button`
  border: none;
  font-size: 14px;
  line-height: ${(props) => props.theme.typography.body.lineHeight};
  color: ${(props) => props.theme.palette.primary.main};
  background-color: transparent;
  cursor: pointer;
  transition: all 150ms ease-in-out;

  &:hover {
    color: ${(props) => props.theme.palette.primary.dark};
  }
`;
