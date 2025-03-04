import { Box, Checkbox, IconButton, ListItem, Typography } from '@mui/material/';
import { styled } from '@mui/material/styles'
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo, deleteTodo } from '../../features/todos/todosSlice';
import { selectTodo } from '../../features/todos/todosSelectors'
import { TodoDetails } from '../../components';

export function TodoItem({ id, overdue }) {
    const dispatch = useDispatch();

    const [isTodoDetailsVisible, setIsTodoDetailsVisible] = useState(false);

    const TodoItemContainer = styled(Box)(({theme}) => ({
        border: "solid 1px",
        borderColor: theme.palette.divider,
        borderRadius:"5px",
        width:"80%",
        margin:"15px auto",
        transition:"box-shadow 0.5s",
        "&:hover": {
            boxShadow: "0px 0px 2px 0px black"
        },
    }));

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
        <TodoItemContainer>
            <ListItem
                id={todo.id}
                onClick={handleTodoDetailsVisibility}
            >
                <Box sx={{display:"flex", alignItems: "center", width:"100%"}}>
                    <Checkbox
                        id={`checkbox${todo.id}`}
                        checked={todo.completed}
                        onClick={(e) => handleTodoToggle(e, todo.id)}
                    />
                    <Typography
                        color={overdue ? "error" : ""}
                        sx={{
                            flexGrow:1,
                            paddingLeft:"10px",
                            cursor:"pointer",
                            userSelect:"none",
                        }}
                    >
                        {todo.completed ? <s>{todo.task}</s> : todo.task}
                    </Typography>
                    <IconButton onClick={(e) => handleDeletion(e, todo.id)}>
                        <DeleteIcon/>
                    </IconButton>
                </Box>
            </ListItem>
            <Box>
                {isTodoDetailsVisible && <TodoDetails id={todo.id}></TodoDetails>}
            </Box>
        </TodoItemContainer>);
}