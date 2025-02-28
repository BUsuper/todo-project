import { Box, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectDate, selectFilter, setFilter } from '../../features/filtersSlice';

export function FiltersDetails() {
    const selectedDate = useSelector(selectDate);
    const activeFilter = useSelector(selectFilter);

    const dispatch = useDispatch();

    const handleFilterSelection = (filter) => {
        dispatch(setFilter(filter));
    }

    return (
        <Box id="filters">
            <Box>
                <Typography>Selected date: {selectedDate}</Typography>
                <Typography>Selected filter: {activeFilter}</Typography>
            </Box>
            <Box>
            <Typography>Show todos</Typography>
                <Button 
                    onClick={() => handleFilterSelection("today")}
                    variant={activeFilter === "today" ? "contained" : "outlined"}
                >
                    Due today
                </Button>
                <Button
                    onClick={() => handleFilterSelection("selected date")}
                    disabled={Boolean(!selectedDate)}
                    variant={activeFilter === "selected date" ? "contained" : "outlined"}
                >
                    Due on selected date
                </Button>
                <Button
                    onClick={() => handleFilterSelection("overdue")}
                    variant={activeFilter === "overdue" ? "contained" : "outlined"}
                >
                    Overdue
                </Button>
            </Box>
        </Box>
    );
}