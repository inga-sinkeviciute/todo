import { StyledButton } from './styles';

const Button = ({
  children,
  action,
  outline,
  inverted,
  success,
  danger,
  warning,
  size,
  className,
}) => {
  return (
    <StyledButton
      outline={outline}
      inverted={inverted}
      success={success}
      danger={danger}
      warning={warning}
      size={size}
      onClick={action}
      className={className}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
