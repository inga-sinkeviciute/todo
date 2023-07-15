import { useState } from 'react';
import Form from '../../molecules/Form';
import ICONS from '../../../shared/icons';
import { API } from '../../../shared/api/api';
import Auth from '../../../shared/auth/auth';
import { StyledFormBottomMessage, StyledFormBottomButton } from './styles';

const LoginForm = ({ onClose, toggleForm }) => {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const validateEmail = (value) => {
    setEmailError(null);
    if (!value) {
      setEmailError('Required');
    }
    setLogin((prev) => ({ ...prev, email: value }));
  };

  const validatePassword = (value) => {
    setPasswordError(null);
    if (!value) {
      setPasswordError('Required');
    }
    setLogin((prev) => ({ ...prev, password: value }));
  };

  const inputs = [
    {
      type: 'email',
      label: 'Email',
      placeholder: 'Enter your email...',
      value: login.email,
      setValue: validateEmail,
      icon: ICONS.envelope,
      required: true,
      errorMessage: emailError || 'Required',
    },
    {
      type: 'password',
      label: 'Password',
      placeholder: 'Enter your password...',
      value: login.password,
      setValue: validatePassword,
      icon: ICONS.lock,
      required: true,
      errorMessage: passwordError || 'Required',
    },
  ];

  const handleSubmit = async (loginFunction) => {
    validateEmail(login.email);
    validatePassword(login.password);

    if (emailError || passwordError) {
      return;
    }

    try {
      const users = await API.getUsers();
      const user = users.find(
        (user) => user.email.toLowerCase() === login.email.toLowerCase()
      );
      if (user) {
        if (user.password === login.password) {
          loginFunction(user);
          onClose();
        } else {
          setPasswordError('Your password is incorrect');
        }
      } else {
        setEmailError('This user does not exist');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Auth>
      {({ login }) => (
        <Form
          inputs={inputs}
          handleSubmit={() => handleSubmit(login)}
          buttonText={'Log In'}
          customErrors={{
            ...((emailError && { Email: emailError }) || {}),
            ...((passwordError && { Password: passwordError }) || {}),
          }}
        >
          <StyledFormBottomMessage>
            Don't have an account?
            <StyledFormBottomButton onClick={toggleForm}>
              Sign Up!
            </StyledFormBottomButton>
          </StyledFormBottomMessage>
        </Form>
      )}
    </Auth>
  );
};

export default LoginForm;
