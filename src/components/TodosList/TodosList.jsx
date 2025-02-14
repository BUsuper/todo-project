import { List, ListItem } from '@mui/material/';
import { useSelector } from 'react-redux'

// TODO: Add checkbox!
export function TodosList ({ completed = false }) {
    const todosIdsList = useSelector(state => state.todos.ids);
    const todosEntries = useSelector(state => state.todos.entities);

    const todos = todosIdsList.map(item => todosEntries[item]).filter(item => item.completed === completed);

    return <>
        <List>
            {
                // Filter out todos that are completed or not (depends of the completed parameter)
                // Render the filtered list of todos
                todos.map(item => {
                    return <ListItem key={item.id}>{item.task}</ListItem>
                })
                
            }
        </List>
    </>
}