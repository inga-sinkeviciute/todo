import styled from 'styled-components';

export const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 56px);
`;

export const StyledHeroSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.palette.default.dark};
`;

export const StyledHeroContainer = styled.div`
  margin: 0 24px;
  padding: 11.5rem 0 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5em;
  max-width: 1224px;

  h1 {
    color: ${(props) => props.theme.palette.default.light};
    font-size: ${(props) => props.theme.typography.h1.mobile.fontSize};
    line-height: ${(props) => props.theme.typography.h1.mobile.lineHeight};
    text-align: center;
  }

  p {
    color: ${(props) => props.theme.palette.background.main};
    font-size: ${(props) => props.theme.typography.body.fontSize};
    line-height: ${(props) => props.theme.typography.body.lineHeight};
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: ${(props) => props.theme.typography.h1.tablet.fontSize};
      line-height: ${(props) => props.theme.typography.h1.tablet.lineHeight};
    }
  }

  @media screen and (min-width: 1024px) {
    h1 {
      font-size: ${(props) => props.theme.typography.h1.desktop.fontSize};
      line-height: ${(props) => props.theme.typography.h1.desktop.lineHeight};
    }
  }
`;

export const StyledHeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5em;
  max-width: 808px;

  span {
    text-transform: capitalize;
  }
`;

export const StyledHeroButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media screen and (min-width: 576px) {
    span {
      display: none;
    }
  }
`;

export const StyledFeaturesSectionWrapper = styled.div`
  padding: 5em 0 8.5em;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  background-color: ${(props) => props.theme.palette.background.dark};

  h2 {
    margin-bottom: 2em;
    justify-self: center;
    text-align: center;
    font-size: ${(props) => props.theme.typography.h2.mobile.fontSize};
    line-height: ${(props) => props.theme.typography.h2.mobile.lineHeight};
    color: ${(props) => props.theme.palette.default.light};
  }
`;

export const StyledFeaturesContainer = styled.div`
  margin: 0 24px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5em;
  width: calc(100% - 48px);
  max-width: 500px;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 1224px;
  }
`;
