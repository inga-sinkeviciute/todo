import styled from 'styled-components';

export const AddTodoContainer = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  width: 100%;
  border-radius: 8px;
  background-color: ${(props) => props.theme.palette.default.main};
`;
