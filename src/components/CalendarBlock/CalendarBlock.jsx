import { Badge, Grid2 } from '@mui/material';
import { DateCalendar, LocalizationProvider, PickersDay } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';

export function CalendarBlock() {
    const [selectedDate, setSelectedDate] = useState("");

    const handleDateSelection = (date) => {
        setSelectedDate(`${date.year()}-${date.month() + 1}-${date.date()}`);
    }

    const daysWithTodos = ['2025-2-14', '2025-2-19', '2025-2-3', '2025-3-1'];

    const highlightedDay = (pickersDayProps) => {
        // daysWithTodos shouldn't be passed to PickerDays (React doesn't recognise it as a correct prop)
        const {daysWithTodos, day, outsideCurrentMonth, ...otherProps} = pickersDayProps;

        // Now I just need to compare the date of this day to a list of days with a todo
        const hasTodo = daysWithTodos.some(dayWithTodo => dayWithTodo === `${day.year()}-${day.month() + 1}-${day.date()}`);
        const isHighlighted = !outsideCurrentMonth && hasTodo;

        return (
            <Badge 
                variant={isHighlighted && "dot"}
                overlap="circular"
                color='primary'
            >
                <PickersDay
                    day={day}
                    outsideCurrentMonth={outsideCurrentMonth}
                    {...otherProps}
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
                slotProps={{day: {daysWithTodos}}}
                >
                </DateCalendar>
                Selected date: {selectedDate}
            </LocalizationProvider>
        </Grid2>
    );
}