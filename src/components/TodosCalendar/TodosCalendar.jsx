import { Badge } from '@mui/material';
import { DateCalendar, LocalizationProvider, PickersDay } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useDispatch } from "react-redux";
import { setDate } from "../../features/filtersSlice";


export function TodosCalendar() {
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

    const dispatch = useDispatch();

    const handleDateSelection = (date) => {
        dispatch(setDate(`${date.year()}-${date.month() + 1}-${date.date()}`));
    }

    const daysWithTodos = ['2025-2-14', '2025-2-19', '2025-2-3', '2025-3-1'];

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
            <DateCalendar
                onChange={handleDateSelection}
                slots={{day: highlightedDay}}
                slotProps={{day: {daysWithTodos}}}
            >
            </DateCalendar>
        </LocalizationProvider>      
    );
}