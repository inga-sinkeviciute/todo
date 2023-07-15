import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { isLoggedIn, userState } from "../../shared/state/atoms";
import Button from '../../components/atoms/Button/Button';
import ICONS from '../../shared/icons';
import BoxCard from '../../components/molecules/BoxCard/BoxCard';
import SignupForm from '../../components/organisms/SignupForm/SignupForm';
import LoginForm from '../../components/organisms/LoginForm/LoginForm';
import Modal from '../../components/molecules/Modal/Modal';
import {
  StyledContentContainer,
  StyledFeaturesSectionWrapper,
  StyledFeaturesContainer,
  StyledHeroSectionWrapper,
  StyledHeroContainer,
  StyledHeroContent,
  StyledHeroButtons,
} from './styles';

const HomePage = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const [loggedIn] = useRecoilState(isLoggedIn);
  const [user] = useRecoilState(userState);

  const navigate = useNavigate();

  const handleLoginClick = () => {
    setShowLoginModal(true);
    setShowSignUpModal(false);
  };

  const handleSignUpClick = () => {
    setShowSignUpModal(true);
    setShowLoginModal(false);
  };

  const handleNavigateTodo = () => {
    navigate('/todos');
  };

  return (
    <>
      <StyledContentContainer>
        <StyledHeroSectionWrapper>
          <StyledHeroContainer>
            <StyledHeroContent>
              {!loggedIn && (
                <>
                  <h1>Best todo app in Town!</h1>
                  <p>
                    Don't leave it until mañana,<br></br>use this marvellous tool and do it today!
                  </p>
                </>
              )}
              {loggedIn && (
                <>
                  <h1>Hi there, <span>{user && (user.name)}</span>!</h1>
                  <p>
                    Are you ready to sort some todos out <br></br> or will you leave it until 'mañana'?
                  </p>
                </>
              )}
            </StyledHeroContent>
            <StyledHeroButtons>
              {loggedIn && (
                <Button action={handleNavigateTodo} size='large'>Let's TODO!</Button>
              )}
              {!loggedIn && (
                <>
                  <span>
                    <Button action={handleLoginClick} outline='outline' size='large'>
                      Login
                    </Button>
                  </span>
                  <Button action={handleSignUpClick} size='large'>
                    Sign Up
                  </Button>
                </>
              )}
            </StyledHeroButtons>
          </StyledHeroContainer>
        </StyledHeroSectionWrapper>
        <StyledFeaturesSectionWrapper>
          <h2>How does it work?</h2>
          <StyledFeaturesContainer>
            <BoxCard
              icon={ICONS.addUser}
              title={'STEP ONE'}
              desc={
                'Simply signup or login to your account to view your TODO list!'
              }
            />
            <BoxCard
              icon={ICONS.list}
              title={'STEP TWO'}
              desc={
                'Add your items and organize them by selecting the tasks you want to modify.'
              }
            />
            <BoxCard
              icon={ICONS.sort}
              title={'STEP THREE'}
              desc={
                "Filter your TODO list to see what you have and haven't done yet!"
              }
            />
          </StyledFeaturesContainer>
        </StyledFeaturesSectionWrapper>
      </StyledContentContainer>
      {showLoginModal && (
        <Modal onClose={() => setShowLoginModal(false)} title='Log In'>
          <LoginForm onClose={() => setShowLoginModal(false)} toggleForm={handleSignUpClick} />
        </Modal>
      )}
      {showSignUpModal && (
        <Modal onClose={() => setShowSignUpModal(false)} title='Sign Up'>
          <SignupForm onClose={() => setShowSignUpModal(false)} toggleForm={handleLoginClick} />
        </Modal>
      )}
    </>
  );
};

export default HomePage;
