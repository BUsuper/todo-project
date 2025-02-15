import { List, ListItem } from '@mui/material/';
import { useSelector } from 'react-redux';
import { makeSelectTodos } from '../../features/todosSlice'

// TODO: Add checkbox!
// TODO: Add deletion

export function TodosList ({ completed = false }) {
    // A memoized selector so that the component doesn't rerender if no changed in state occur
    // Gets an object of todos from state, converts it into an array, filters the array based on completion status
    const selectTodos = makeSelectTodos(completed);
    
    const todos = useSelector(selectTodos);

    return (
        <List>
            {
                todos.map(todo => {
                    return <ListItem key={todo.id}>{todo.task}</ListItem>
                })
                
            }
        </List>
    );
}