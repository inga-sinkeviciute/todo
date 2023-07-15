import styled from 'styled-components';

export const StyledForm = styled.form``;

export const StyledFormControl = styled.div`
  margin-bottom: 1rem;
`;

export const StyledLabel = styled.label`
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

export const StyledFormBottomContainer = styled.div`
  padding: 2rem 0px 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
