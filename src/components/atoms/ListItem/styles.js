import styled from "styled-components";

export const StyledListItem = styled.li`
  padding: 8px 16px 8px;
  width: 100%;
  list-style-type: none;
  overflow-wrap: break-word;
  border-bottom: 1px solid ${(props) => (props.theme.palette.secondary.main)};
  color: ${(props) => (props.theme.palette.background.light)};
  cursor: pointer;
  transition: all 150ms ease-in-out;

  &:hover {
    border-bottom: 1px solid ${(props) => (props.theme.palette.primary.main)};
}
`;
