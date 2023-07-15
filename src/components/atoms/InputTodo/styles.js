import styled from 'styled-components';

export const StyledIcon = styled.span`
  color: ${(props) => props.theme.palette.secondary.main};
`;

export const StyledInput = styled.input`
  margin-right: 1rem;
  padding-left: 0.75em;
  width: 100%;
  outline: none;
  border: none;
  font-size: ${(props) => props.theme.typography.body.fontSize};
  color: ${(props) => props.theme.palette.default.light};
  background-color: transparent;

  &::placeholder {
    color: ${(props) => props.theme.palette.background.main};
  }
`;
