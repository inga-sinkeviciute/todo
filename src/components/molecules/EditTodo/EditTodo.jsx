import React, { useState, useEffect } from 'react';
import { API } from '../../../shared/api/api';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import {
  StyledEditTodoWrapper,
  StyledInputWrapper,
  StyledInput,
  StyledInputLabel,
  StyledErrorMessage,
  StyledButtonContainer,
  StyledNotificationContainer,
  StyledNotificationMessage,
  StyledNotificationButtons,
} from './styles';

const EditTodo = ({ todo, onUpdateTodo, onDeleteTodo, onClose }) => {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [isTitleValid, setIsTitleValid] = useState(true);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  useEffect(() => {
    setIsTitleValid(title.trim().length > 0);
  }, [title]);

  const handleConfirmChanges = async () => {
    if (!isTitleValid) return;

    const updatedTodo = {
      ...todo,
      title,
      description,
    };

    await API.updateTodo(updatedTodo);
    onUpdateTodo(updatedTodo);
    onClose();
  };

  const handleCancelChanges = () => {
    setTitle(todo.title);
    setDescription(todo.description);
    onClose();
  };

  const handleDeleteTodo = () => {
    setShowDeleteConfirmation(true);
  };

  const handleConfirmDelete = async () => {
    await API.deleteTodo(todo.id);
    onDeleteTodo(todo);
    onClose();
  };

  const handleCloseDeleteConfirmation = () => {
    setShowDeleteConfirmation(false);
  };

  return (
    <>
      <StyledEditTodoWrapper>
        <StyledInputWrapper>
          <StyledInput>
            <StyledInputLabel>Title</StyledInputLabel>
            <Input
              label='title'
              value={title}
              setValue={setTitle}
              placeholder='Enter your TODO title...'
              maxLength={40}
            />
            {!isTitleValid && <StyledErrorMessage>Required</StyledErrorMessage>}
          </StyledInput>
          <StyledInput>
            <StyledInputLabel>Description</StyledInputLabel>
            <Input
              multiline
              value={description}
              setValue={setDescription}
              placeholder='Enter your TODO description...'
            />
          </StyledInput>
        </StyledInputWrapper>
        {showDeleteConfirmation && (
          <StyledNotificationContainer>
            <StyledNotificationMessage>
              Are you sure you want to delete this TODO?
            </StyledNotificationMessage>
            <StyledNotificationButtons>
              <Button danger={'danger'} action={handleConfirmDelete}>
                Yes
              </Button>
              <Button
                success={'success'}
                action={handleCloseDeleteConfirmation}
              >
                No
              </Button>
            </StyledNotificationButtons>
          </StyledNotificationContainer>
        )}
        <StyledButtonContainer>
          <Button action={handleDeleteTodo} warning='warning'>
            Delete Todo
          </Button>
          <span>
            <Button action={handleCancelChanges} outline='outline'>
              Cancel
            </Button>
            <Button action={handleConfirmChanges}>Update</Button>
          </span>
        </StyledButtonContainer>
      </StyledEditTodoWrapper>
    </>
  );
};

export default EditTodo;
