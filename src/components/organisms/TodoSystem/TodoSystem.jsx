import { useState, useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';
import { API } from '../../../shared/api/api';
import { userState } from '../../../shared/state/atoms';
import AddTodo from '../../molecules/AddTodo';
import TodoList from '../../organisms/TodoList';
import FilterTodo from '../../molecules/FilterTodo';
import { StyledTodoSystemWrapper, StyledTodoContainer } from './styles';

const TodoSystem = () => {
    const [user] = useRecoilState(userState);

    const userId = user.id;

    const queryClient = useQueryClient();

    const [filter, setFilter] = useState(() => {
        const savedFilter = localStorage.getItem('todoFilter');
        return savedFilter ? JSON.parse(savedFilter) : 'all';
    });

    useEffect(() => {
        localStorage.setItem('todoFilter', JSON.stringify(filter));
    }, [filter]);

    const handleFilterChange = (filterBy) => {
        setFilter(filterBy);
    };

    const handleAddTodo = async (newTodo) => {
        try {
            const response = await API.createTodo({
                userId,
                title: newTodo.title,
                status: newTodo.status,
                description: newTodo.description,
            });
            queryClient.setQueryData(['todos', userId, filter], (oldData) => {
                if (oldData === undefined) {
                    return [response];
                } else {
                    const newData = [...oldData, response];
                    newData.sort((a, b) => b.id - a.id);
                    return newData;
                }
            });
            queryClient.invalidateQueries(['todos', userId, filter]);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <StyledTodoSystemWrapper>
            <StyledTodoContainer>
                <AddTodo onAddTodo={handleAddTodo} />
                <TodoList userId={userId} filter={filter} />
            </StyledTodoContainer>
            <FilterTodo onFilterChange={handleFilterChange} />
        </StyledTodoSystemWrapper>
    );
};

export default TodoSystem;
