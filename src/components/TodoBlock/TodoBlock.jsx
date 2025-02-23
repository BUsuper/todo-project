import { Grid2 } from '@mui/material';
import { TodoForm, TodosList } from '../../components';

export function TodoBlock() {
    return (
        <Grid2 size={{sm: 12, md: 8}}>
            <TodoForm/>
            <TodosList/>
            <TodosList completed={true}/>
        </Grid2>
    );
}