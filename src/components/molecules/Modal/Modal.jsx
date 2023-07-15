import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import {
  StyledOverlay,
  StyledModalWrapper,
  SyledCloseButtonContainer,
  StyledModal,
  StyledModalTopContainer,
  StyledModalTitle,
  StyledModalContentContainer,
} from './styles';
import ICONS from '../../../shared/icons';

const Modal = ({ children, onClose, title }) => {
  useEffect(() => {
    const closeModalOnEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', closeModalOnEscape);

    return () => {
      document.removeEventListener('keydown', closeModalOnEscape);
    };
  }, [onClose]);

  const closeOnOverlay = (e) => {
    if (e.target.dataset.id === 'modalWrapper') onClose();
    return;
  };

  return createPortal(
    <>
      <StyledOverlay></StyledOverlay>
      <StyledModalWrapper onClick={closeOnOverlay} data-id='modalWrapper'>
        <StyledModal>
          <StyledModalTopContainer>
            <StyledModalTitle>{title}</StyledModalTitle>
            <SyledCloseButtonContainer>
              <span onClick={onClose}>{ICONS.xmark}</span>
            </SyledCloseButtonContainer>
          </StyledModalTopContainer>
          <StyledModalContentContainer>{children}</StyledModalContentContainer>
        </StyledModal>
      </StyledModalWrapper>
    </>,
    document.getElementById('portal')
  );
};

export default Modal;
