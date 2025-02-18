import { Divider, List } from '@mui/material/';
import { useSelector } from 'react-redux';
import { makeSelectTodos } from '../../features/todosSlice'
import { TodoItem } from '../../components';

// TODO: Put all consts and stuff into useTodoList?

export function TodosList ({ completed = false }) {
    // A memoized selector so that the component doesn't rerender if no changed in state occur
    // Gets an object of todos from state, converts it into an array, filters the array based on completion status
    const selectTodos = makeSelectTodos(completed);
    
    const todos = useSelector(selectTodos);

    return (<>
        <Divider>{completed ? "COMPLETED" : "TO DO"}</Divider>
        <List>
            {
            todos.map(todo => (
                <TodoItem id={todo.id} key={todo.id}></TodoItem>
                ))
            }
        </List>
    </>);
}