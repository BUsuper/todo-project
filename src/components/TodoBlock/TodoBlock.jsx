import { Grid2 } from '@mui/material';
import { TodoForm, TodosList } from '../../components';

export function TodoBlock() {
    return (
        <Grid2 size={{xs: 12, sm: 8}}>
            <TodoForm/>
            <TodosList/>
            <TodosList completed={true}/>
        </Grid2>
    );
}