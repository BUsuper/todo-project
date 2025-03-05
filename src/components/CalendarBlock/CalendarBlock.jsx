import { Grid2 } from '@mui/material';
import { TodosCalendar, FiltersDetails } from '../../components';


export function CalendarBlock() {

    return (
        <Grid2 size={{sm: 12, md: 5}} sx={{margin:"0 auto"}}>
            <TodosCalendar />
            <FiltersDetails />
        </Grid2>
    );
}