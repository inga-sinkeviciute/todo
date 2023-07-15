import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../../../shared/auth/auth';
import Button from '../../../components/atoms/Button/Button.jsx';
import ICONS from '../../../shared/icons';
import SignupForm from '../../../components/organisms/SignupForm/SignupForm';
import LoginForm from '../../../components/organisms/LoginForm/LoginForm';
import Modal from '../../../components/molecules/Modal/Modal';
import {
  StyledHeader,
  StyledNav,
  StyledLogotype,
  StyledLogo,
  StyledBtnContainer,
  StyledLogoutButtonContainer,
  StyledInitialButtonContainer,
} from './styles.js';

const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const navigate = useNavigate();

  const handleLoginClick = () => {
    setShowLoginModal(true);
    setShowSignUpModal(false);
  };

  const handleSignUpClick = () => {
    setShowSignUpModal(true);
    setShowLoginModal(false);
  };

  const handleNavigateLogo = () => {
    navigate('');
  };

  return (
    <Auth>
      {({ loggedIn, logout }) => (
        <>
          <StyledHeader>
            <StyledNav>
              <StyledLogotype onClick={handleNavigateLogo}>
                <StyledLogo>{ICONS.logo}</StyledLogo>
                <h1>todo<span>Mañana</span>
                </h1>
              </StyledLogotype>
              <StyledBtnContainer>
                {loggedIn && (
                  <StyledLogoutButtonContainer>
                    <Button action={logout} outline='outline'>
                      Log Out
                    </Button>
                  </StyledLogoutButtonContainer>
                )}
                {!loggedIn && (
                  <StyledInitialButtonContainer>
                    <Button action={handleLoginClick} outline='outline'>
                      Log In
                    </Button>
                    <Button action={handleSignUpClick}>Sign Up</Button>
                  </StyledInitialButtonContainer>
                )}
              </StyledBtnContainer>
            </StyledNav>
          </StyledHeader>
          {showLoginModal && (
            <Modal onClose={() => setShowLoginModal(false)} title='Log In'>
              <LoginForm
                onClose={() => setShowLoginModal(false)}
                toggleForm={handleSignUpClick}
              />
            </Modal>
          )}
          {showSignUpModal && (
            <Modal onClose={() => setShowSignUpModal(false)} title='Sign Up'>
              <SignupForm
                onClose={() => setShowSignUpModal(false)}
                toggleForm={handleLoginClick}
              />
            </Modal>
          )}
        </>
      )}
    </Auth>
  );
};

export default Header;