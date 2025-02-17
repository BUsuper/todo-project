import { Checkbox, Divider, IconButton, List, ListItem } from '@mui/material/';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, makeSelectTodos } from '../../features/todosSlice'
import { toggleTodo } from '../../features/todosSlice';

// TODO: Add checkbox!
// TODO: Add deletion

export function TodosList ({ completed = false }) {
    // A memoized selector so that the component doesn't rerender if no changed in state occur
    // Gets an object of todos from state, converts it into an array, filters the array based on completion status
    const selectTodos = makeSelectTodos(completed);
    
    const todos = useSelector(selectTodos);

    const dispatch = useDispatch();

    // Executed in closure so that click on the checkbox works as well
    // This function doesn't need to get the id from event target
    const handleTodoToggle = id => {
        dispatch(toggleTodo({ id }));
    }

    const handleDeletion = (e, id) => {
        e.stopPropagation();
        dispatch(deleteTodo(id));
    }

    return (<>
        <Divider>{completed ? "COMPLETED" : "TO DO"}</Divider>
        <List>
            {
            todos.map(todo => (
                <ListItem key={todo.id} id={todo.id}>
                    <Checkbox checked={todo.completed} onClick={() => handleTodoToggle(todo.id)}/>
                    {todo.completed ? <s>{todo.task}</s> : todo.task}
                    <IconButton onClick={(e) => handleDeletion(e, todo.id)}>
                        <DeleteIcon/>
                    </IconButton>
                </ListItem>
                ))
            }
        </List>
    </>);
}