import { Badge, Grid2 } from '@mui/material';
import { DateCalendar, LocalizationProvider, PickersDay } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';

export function CalendarBlock() {
    const [selectedDate, setSelectedDate] = useState("");

    const handleDateSelection = (date) => {
        setSelectedDate(`${date.year()}-${date.month() + 1}-${date.date()}`);
    }

    const highlightedDay = (pickersDayProps) => {
        const {day, outsideCurrentMonth} = pickersDayProps;
        // Now I just need to compare this to a list of days with a todo
        const hasTodo = !Boolean(`${day.year()}-${day.month() + 1}-${day.date()}`.localeCompare("2025-2-1"))

        return (
            <Badge variant={!outsideCurrentMonth && hasTodo && "dot"} overlap="circular" color='success'>
                <PickersDay
                    {...pickersDayProps}
                />
            </Badge>
        );
    }

    return (
        <Grid2 size={{sm: 12, md: 4}}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
                <DateCalendar
                onChange={handleDateSelection}
                slots={{day: highlightedDay}}
                >
                </DateCalendar>
                Selected date: {selectedDate}
            </LocalizationProvider>
        </Grid2>
    );
}