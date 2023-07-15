import Box from '../../atoms/Box/Box';
import {
  StyledBoxCardImg,
  StyledBoxCardContent,
  StyledBoxCardContainer,
} from './styles';

const BoxCard = ({ icon, title, desc }) => {
  return (
    <Box>
      <StyledBoxCardContainer>
        <StyledBoxCardImg>{icon}</StyledBoxCardImg>
        <StyledBoxCardContent>
          <h4>{title}</h4>
          <p>{desc}</p>
        </StyledBoxCardContent>
      </StyledBoxCardContainer>
    </Box>
  );
};

export default BoxCard;
