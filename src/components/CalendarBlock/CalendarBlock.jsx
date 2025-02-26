import { Grid2 } from '@mui/material';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';

export function CalendarBlock() {
    const [selectedDate, setSelectedDate] = useState("");

    const handleDateSelection = (date) => {
        setSelectedDate(`${date.year()}-${date.month() + 1}-${date.date()}`);
    }

    return (
        <Grid2 size={{sm: 12, md: 4}}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
                <DateCalendar onChange={handleDateSelection}></DateCalendar>
                Selected date: {selectedDate}
            </LocalizationProvider>
        </Grid2>
    );
}