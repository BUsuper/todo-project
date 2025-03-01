import { Box, Divider, List } from '@mui/material/';
import { useSelector } from 'react-redux';
import { makeSelectTodos } from '../../features/todos/todosSelectors'
import { TodoItem } from '../../components';
import { selectFilter, selectDate } from '../../features/filters/filtersSelectors';
import { getToday } from '../../utils/';

export function TodosList ({ completed = false }) {
    // A memoized selector so that the component doesn't rerender if no changed in state occur
    // Gets an object of todos from state, converts it into an array, filters the array based on completion status
    const selectTodos = makeSelectTodos(completed);
    
    const todos = useSelector(selectTodos)
    
    const filter = useSelector(selectFilter);
    const selectedDate = useSelector(selectDate);
    const today = getToday()

    const filteredTodos = todos.filter((todo) => {
        switch(filter) {
            case "today":
                return todo.date === today;
            case "selected date":
                return todo.date === selectedDate && !todo.completed;
            case "overdue":
                return todo.date < today && !todo.completed;
            default:
                return true;
        }
    });

    return (
        <Box sx={{margin: "25px auto"}}>
            <Divider>{completed ? "COMPLETED" : "TO DO"}</Divider>
            <List>
                {
                filteredTodos.map(todo => (
                    <TodoItem id={todo.id} key={todo.id} overdue={todo.date < today && !todo.completed}></TodoItem>
                    ))
                }
            </List>
        </Box>
    );
}