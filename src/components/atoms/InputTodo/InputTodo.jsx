import { StyledIcon, StyledInput } from './styles';

const InputTodo = (props) => {
  const { type, value, setValue, placeholder, maxLength, onKeyDown } = props;

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (onKeyDown) {
        onKeyDown();
      }
      e.preventDefault();
    }
  };

  return (
    <>
      <StyledIcon>{props.icon}</StyledIcon>
      <StyledInput
        type={type || 'text'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        maxLength={maxLength}
        onKeyDown={handleKeyDown}
      />
    </>
  );
};

export default InputTodo;
