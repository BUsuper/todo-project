import { List, ListItem } from '@mui/material/';

// TODO: Add checkbox!
export function TodosList ({ todos, completed = false }) {
    return <>
        <List>
            {
                // Filter out todos that are completed or not (depends of the completed parameter)
                // Render the filtered list of todos
                todos.filter(item => item.completed === completed).map((item, index) => {
                    return <ListItem key={item.id}>{item.task}</ListItem>
                })
            }
        </List>
    </>
}