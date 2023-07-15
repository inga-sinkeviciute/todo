import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: ${(props) => (props.size === 'large' ? '9px 20px' : '7px 16px')};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) =>
    props.outline === 'outline'
      ? props.theme.palette.secondary.main
      : props.warning === 'warning'
      ? props.theme.palette.warning.main
      : 'transparent'};
  border-radius: 0.375em;
  font-size: ${(props) =>
    props.size === 'large' ? '18px' : props.theme.typography.body.fontSize};
  font-weight: 600;
  line-height: ${(props) => props.theme.typography.body.lineHeight};
  letter-spacing: ${(props) => props.theme.typography.body.letterSpacing};
  text-align: center;
  cursor: pointer;
  color: ${(props) =>
    props.outline === 'outline' ||
    props.danger === 'danger' ||
    props.warning === 'warning' ||
    props.success === 'success'
      ? props.theme.palette.default.light
      : props.inverted === 'inverted'
      ? props.theme.palette.default.light
      : props.theme.palette.default.main};
  background-color: ${(props) =>
    props.outline === 'outline' || props.warning === 'warning'
      ? 'transparent'
      : props.danger === 'danger'
      ? props.theme.palette.danger.main
      : props.inverted === 'inverted' && !props.className?.includes('selected')
      ? 'transparent'
      : props.success === 'success'
      ? props.theme.palette.success.main
      : props.theme.palette.primary.main};

  transition: all 100ms;

  &:active {
    background-color: ${(props) =>
      props.outline === 'outline'
        ? props.theme.palette.secondary.main
        : props.warning === 'warning'
        ? props.theme.palette.warning.main
        : props.danger === 'danger'
        ? props.theme.palette.danger.light
        : props.inverted === 'inverted'
        ? props.theme.palette.secondary.main
        : props.success === 'success'
        ? props.theme.palette.success.light
        : props.theme.palette.primary.dark};
  }

  &.selected {
    background-color: ${(props) => props.theme.palette.secondary.main};
  }

  @media screen and (min-width: 1024px) {
    &:active {
      background-color: transparent;
    }

    &:hover {
      background-color: ${(props) =>
        props.outline === 'outline'
          ? props.theme.palette.secondary.main
          : props.danger === 'danger'
          ? props.theme.palette.danger.light
          : props.inverted === 'inverted'
          ? props.theme.palette.secondary.main
          : props.warning === 'warning'
          ? props.theme.palette.warning.main
          : props.success === 'success'
          ? props.theme.palette.success.light
          : props.theme.palette.primary.dark};
    }
  }
`;
