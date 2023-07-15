import { StyledListItem } from "./styles";

const ListItem = ({ title, action, statusIcon }) => {
    return (
        <StyledListItem onClick={action}>
            {statusIcon}
            {title}
        </StyledListItem>
    );
};

export default ListItem;
