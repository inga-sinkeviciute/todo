import { useState } from 'react';
import InputTodo from '../../atoms/InputTodo/InputTodo';
import Button from '../../atoms/Button';
import ICONS from '../../../shared/icons';
import { AddTodoContainer } from './styles';

const AddTodo = ({ onAddTodo }) => {
    const [newTodoTitle, setNewTodoTitle] = useState('');

    const addNewTodo = async () => {
        if (newTodoTitle.trim()) {
            onAddTodo({
                title: newTodoTitle.trim(),
                status: 'In progress',
                description: '',
            });
            setNewTodoTitle('');
        }
    };

    return (
        <AddTodoContainer>
            <InputTodo
                type='text'
                value={newTodoTitle}
                setValue={setNewTodoTitle}
                icon={ICONS.add}
                placeholder='Add new todo'
                maxLength={40}
                onKeyDown={() => {
                    addNewTodo();
                }}
            />
            <Button action={addNewTodo} inverted={'inverted'}>
                Add
            </Button>
        </AddTodoContainer>
    );
};

export default AddTodo;
