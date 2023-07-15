import { useRecoilState } from 'recoil';
import { userState } from '../../shared/state/atoms';
import TodoSystem from '../../components/organisms/TodoSystem/TodoSystem';
import { StyledContentContainer, StyledTodoListSectionWrapper, StyledTodoListTitle, StyledTodoSystemContainer } from "./styles";

const TodoListPage = () => {

  const [user] = useRecoilState(userState);
  const userName = user.name;

  return (
    <StyledContentContainer>
      <StyledTodoListSectionWrapper>
        <StyledTodoListTitle>
          <span>{userName}'s</span> TODO list
        </StyledTodoListTitle>
        <StyledTodoSystemContainer>
          <TodoSystem />
        </StyledTodoSystemContainer>
      </StyledTodoListSectionWrapper>
    </StyledContentContainer>
  );
};

export default TodoListPage;
