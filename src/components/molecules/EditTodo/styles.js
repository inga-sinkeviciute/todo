import styled from 'styled-components';

export const StyledEditTodoWrapper = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledInputLabel = styled.label`
  margin-bottom: 0.5rem;
  margin-left: 0.25rem;
  display: block;
  color: ${(props) => props.theme.palette.background.light};
  font-family: var(--font-family-nunito-sans);
  font-size: ${(props) => props.theme.typography.h4.mobile.fontSize};
  font-weight: 800;
  line-height: ${(props) => props.theme.typography.h4.mobile.lineHeight};
  letter-spacing: ${(props) => props.theme.typography.h4.mobile.letterSpacing};
  text-transform: uppercase;
`;

export const StyledErrorMessage = styled.p`
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
  display: block;
  color: ${(props) => props.theme.palette.danger.main};
  font-size: ${(props) => props.theme.typography.legal.fontSize};
  line-height: ${(props) => props.theme.typography.legal.lineHeight};
`;

export const StyledNotificationContainer = styled.div`
  width: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  gap: 2rem;
  border: 1px solid ${(props) => props.theme.palette.danger.main};
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.palette.danger.dark};

  @media screen and (min-width: 768px) {
    width: 80%;
  }
`;

export const StyledNotificationMessage = styled.p`
  color: ${(props) => props.theme.palette.background.light};
  font-size: ${(props) => props.theme.typography.body.fontSize};
  line-height: ${(props) => props.theme.typography.body.lineHeight};
  text-align: center;
`;

export const StyledNotificationButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  @media screen and (max-width: 430px) {
    flex-direction: column-reverse;
    gap: 1.5rem;

    span {
      flex-direction: row-reverse;
    }
  }

  @media screen and (min-width: 431px) and (max-width: 575px) {
    justify-content: center;
    flex-direction: row-reverse;
    gap: 1rem;
  }

  @media screen and (min-width: 576px) {
    justify-content: space-between;
  }
`;
