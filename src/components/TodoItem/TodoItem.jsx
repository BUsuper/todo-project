import { Box, Checkbox, IconButton, ListItem, Typography } from '@mui/material/';
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
        <Box sx={{border: "solid 1px", borderColor: "divider", borderRadius:"5px", width:"80%", margin:"15px auto"}}>
            <ListItem id={todo.id} onClick={handleTodoDetailsVisibility}>
                <Box sx={{display:"flex", alignItems: "center", width:"100%"}}>
                    <Checkbox id={`checkbox${todo.id}`} checked={todo.completed} sx={{width: "10%"}} onClick={(e) => handleTodoToggle(e, todo.id)}/>
                    <Typography sx={{width: "80%", paddingLeft:"10px"}}>{todo.completed ? <s>{todo.task}</s> : todo.task}</Typography>
                    <IconButton sx={{width: "10%"}} onClick={(e) => handleDeletion(e, todo.id)}>
                        <DeleteIcon/>
                    </IconButton>
                </Box>
            </ListItem>
            <Box>
                {isTodoDetailsVisible && <TodoDetails id={todo.id}></TodoDetails>}
            </Box>
        </Box>);
}