import { Checkbox, IconButton, ListItem } from '@mui/material/';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo, deleteTodo, selectTodo } from '../../features/todosSlice';
import { TodoDetails } from '../../components';

export function TodoItem({ id }) {
    const dispatch = useDispatch();

    const [isTodoDetailsVisible, setIsTodoDetailsVisible] = useState(false);

    // Executed in closure so that click on the checkbox works as well
    // This function doesn't need to get the id from event target
    const handleTodoToggle = (e, id) => {
        e.stopPropagation();
        dispatch(toggleTodo({ id }));
    }

    const handleDeletion = (e, id) => {
        e.stopPropagation();
        setIsTodoDetailsVisible(false);
        dispatch(deleteTodo(id));
    }

    const handleTodoDetailsVisibility = () => {
        setIsTodoDetailsVisible(prev => !prev)
    };

    const todo = useSelector(selectTodo(id));
    return (
        <ListItem id={todo.id} onClick={handleTodoDetailsVisibility}>
            <Checkbox id={`checkbox${todo.id}`} checked={todo.completed} onClick={(e) => handleTodoToggle(e, todo.id)}/>
            {todo.completed ? <s>{todo.task}</s> : todo.task}
            <IconButton onClick={(e) => handleDeletion(e, todo.id)}>
                <DeleteIcon/>
            </IconButton>
            {isTodoDetailsVisible && <TodoDetails id={todo.id}></TodoDetails>}
        </ListItem>
    );
}