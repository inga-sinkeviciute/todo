import { useRef, useEffect } from 'react';
import { useTheme } from 'styled-components';
import { StyledInputWrapper, StyledIcon, StyledInput } from './styles';

const Input = (props) => {
  const theme = useTheme();

  const { type, value, setValue, icon, placeholder, maxLength, multiline } = props;

  const inputWrapperRef = useRef();
  const inputRef = useRef();
  const iconRef = useRef();

  useEffect(() => {
    const handleOutsideInputClick = (e) => {
      if (!inputWrapperRef.current.contains(e.target)) {
        inputWrapperRef.current.style.borderColor = theme.palette.default.main;
        iconRef.current.style.color = theme.palette.secondary.main;
      }
    };

    document.addEventListener('click', handleOutsideInputClick);

    return () => {
      document.removeEventListener('click', handleOutsideInputClick);
    };
  }, []);

  const handleClick = () => {
    inputWrapperRef.current.style.borderColor = theme.palette.secondary.main;
    inputWrapperRef.current.style.borderWidth = '1px';
    inputWrapperRef.current.style.borderStyle = 'solid';
    inputRef.current.focus();
    iconRef.current.style.color = theme.palette.background.light;
  };

  return (
    <StyledInputWrapper {...props} ref={inputWrapperRef} onClick={handleClick}>
      <StyledIcon ref={iconRef}>{icon && icon}</StyledIcon>
      {multiline ? (
        <StyledInput
          as="textarea"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          ref={inputRef}
          placeholder={placeholder}
          icon={icon}
          maxLength={maxLength}
        />
      ) : (
        <StyledInput
          type={type || 'text'}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          ref={inputRef}
          placeholder={placeholder}
          icon={icon}
          maxLength={maxLength}
        />
      )}
    </StyledInputWrapper>
  );
};

export default Input;
