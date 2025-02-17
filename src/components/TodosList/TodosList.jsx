import { Checkbox, List, ListItem } from '@mui/material/';
import { useDispatch, useSelector } from 'react-redux';
import { makeSelectTodos } from '../../features/todosSlice'
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

    return (
        <List>
            {
                todos.map(todo => {
                    return <ListItem key={todo.id} id={todo.id} onClick={() => handleTodoToggle(todo.id)}>
                               <Checkbox checked={todo.completed}/>
                               {todo.completed ? <s>{todo.task}</s> : todo.task}
                           </ListItem>
                })
                
            }
        </List>
    );
}