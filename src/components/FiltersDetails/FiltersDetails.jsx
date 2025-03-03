import { Box, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../features/filters/filtersSlice';
import { selectDate, selectFilter } from '../../features/filters/filtersSelectors';

export function FiltersDetails() {
    const selectedDate = useSelector(selectDate);
    const activeFilter = useSelector(selectFilter);

    const dispatch = useDispatch();

    const handleFilterSelection = (filter) => {
        dispatch(setFilter(filter));
    }

    return (
        <Box 
            id="filters"
            sx={{
                width: "320px",
                margin: "17px auto",
                border: "solid 1px",
                borderColor: "divider",
                borderRadius:"5px",
                padding:"10px"
            }}>
            <Box>
                {selectedDate && <Typography>Selected date: {selectedDate}</Typography>}
            </Box>
            <Typography>Show todos</Typography>
            <Box sx={{display:"flex", flexDirection:"column"}}>
                <Button 
                    onClick={() => handleFilterSelection("today")}
                    variant={activeFilter === "today" ? "contained" : "outlined"}
                    sx={{margin:"7.5px auto", maxWidth:"200px"}}
                >
                    Due today
                </Button>
                <Button
                    onClick={() => handleFilterSelection("selected date")}
                    disabled={Boolean(!selectedDate)}
                    variant={activeFilter === "selected date" ? "contained" : "outlined"}
                    sx={{margin:"7.5px auto", maxWidth:"200px"}}
                >
                    Due on selected date
                </Button>
                <Button
                    onClick={() => handleFilterSelection("overdue")}
                    variant={activeFilter === "overdue" ? "contained" : "outlined"}
                    sx={{margin:"7.5px auto", maxWidth:"200px"}}
                >
                    Overdue
                </Button>
                <Button
                    onClick={() => handleFilterSelection("")}
                    variant={activeFilter === "" ? "contained" : "outlined"}
                    sx={{margin:"7.5px auto", maxWidth:"200px"}}
                >
                    {activeFilter === "" ? "All" : "Remove filters"}
                </Button>
            </Box>
        </Box>
    );
}