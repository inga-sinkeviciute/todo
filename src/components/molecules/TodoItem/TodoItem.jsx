// TodoItem.jsx
import ListItem from '../../atoms/ListItem';
import ICONS from '../../../shared/icons';
import { ListItemWrapper } from './styles';

const TodoItem = ({ todo, onToggleTodoStatus, onEditTodo }) => {
    return (
        <ListItemWrapper>
            <span
                onClick={(e) => {
                    e.stopPropagation();
                    onToggleTodoStatus(todo);
                }}
                style={{
                    color: todo.status === 'In progress' ? `#534581` : `#98E3A9`,
                }}
            >
                {todo.status === 'In progress' ? ICONS.checkNone : ICONS.checkDone}
            </span>
            <ListItem
                title={todo.title}
                action={() => onEditTodo(todo)}
            />
        </ListItemWrapper>
    );
};

export default TodoItem;
