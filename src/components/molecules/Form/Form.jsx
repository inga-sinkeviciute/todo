import { useState } from 'react';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import {
  StyledForm,
  StyledFormControl,
  StyledFormBottomContainer,
  StyledLabel,
  StyledErrorMessage,
} from './styles';

const Form = ({ inputs, handleSubmit, buttonText, children, customErrors }) => {
  const [notValid, setNotValid] = useState([]);

  const validateSubmit = (e) => {
    e.preventDefault();

    const NotValid = inputs.filter((input) =>
      !input.required ? false : input.value ? false : true
    );

    if (!NotValid.length) {
      setNotValid([]);
      handleSubmit();
    } else {
      setNotValid(NotValid);
    }
  };

  const handleFocus = (label) => {
    setNotValid((prevNotValid) =>
      prevNotValid.filter((x) => x.label !== label)
    );
  };

  return (
    <StyledForm onSubmit={validateSubmit}>
      {inputs.map((input) => (
        <StyledFormControl key={input.label}>
          <StyledLabel>{input.label}</StyledLabel>
          <Input
            type={input.type}
            icon={input.icon}
            value={input.value}
            setValue={input.setValue}
            placeholder={input.placeholder}
            onFocus={() => handleFocus(input.label)}
          />
          {notValid.find((x) => x.label === input.label) ||
            (customErrors && customErrors[input.label]) ? (
            <StyledErrorMessage>
              {input.errorMessage || customErrors[input.label]}
            </StyledErrorMessage>
          ) : null}
        </StyledFormControl>
      ))}
      <StyledFormBottomContainer>
        <Button type='submit'>{buttonText}</Button>
        {children}
      </StyledFormBottomContainer>
    </StyledForm>
  );
};

export default Form;
