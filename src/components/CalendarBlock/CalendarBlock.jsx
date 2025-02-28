import { Box, Button, Grid2, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectDate } from '../../features/filtersSlice';
import { TodosCalendar } from '../TodosCalendar/TodosCalendar';

export function CalendarBlock() {
    const selectedDate = useSelector(selectDate);

    return (
        <Grid2 size={{sm: 12, md: 5}}>
            <TodosCalendar />
            Selected date: {selectedDate}
        </Grid2>
    );
}