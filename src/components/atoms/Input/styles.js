import styled from 'styled-components';

export const StyledInputWrapper = styled.div`
  padding: calc(0.625rem - 1px) calc(0.75rem - 1px);
  display: flex;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.theme.palette.default.main};
  border-radius: 0.375em;
  background-color: ${(props) => props.theme.palette.default.main};
`;

export const StyledIcon = styled.span`
  color: ${(props) => props.theme.palette.secondary.main};
`;

export const StyledInput = styled.input`
  padding-left: calc(0.75em - 1px);
  padding-right: calc(0.75em - 1px);
  width: 100%;
  outline: none;
  border: none;
  font-size: ${(props) => props.theme.typography.body.fontSize};
  color: ${(props) => props.theme.palette.background.light};
  background-color: transparent;
  resize: none;

  &::placeholder {
    color: ${(props) => props.theme.palette.background.main};
  }

  ${(props) =>
    props.as === 'textarea' &&
    `
      padding-top: calc(0.625rem - 1px);
      height: 225px;
    `}
`;
