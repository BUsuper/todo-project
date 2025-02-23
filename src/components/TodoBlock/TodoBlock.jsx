import { Box } from '@mui/material';
import { TodoForm, TodosList } from '../../components';

export function TodoBlock() {
    return (
        <Box>
            <TodoForm/>
            <TodosList/>
            <TodosList completed={true}/>
        </Box>
    );
}