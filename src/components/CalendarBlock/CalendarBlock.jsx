import { Grid2 } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectDate } from '../../features/filtersSlice';
import { TodosCalendar } from '../TodosCalendar/TodosCalendar';

export function CalendarBlock() {
    const selectedDate = useSelector(selectDate);

    return (
        <Grid2 size={{sm: 12, md: 4}}>
            <TodosCalendar />
            Selected date: {selectedDate}
        </Grid2>
    );
}