import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useDispatch } from "react-redux";
import { setDate } from "../../features/filtersSlice";
import { CalendarDay } from '../../components';


export function TodosCalendar() {
    const dispatch = useDispatch();

    const handleDateSelection = (date) => {
        dispatch(setDate(`${date.year()}-${date.month() + 1}-${date.date()}`));
    }

    const daysWithTodos = ['2025-2-14', '2025-2-19', '2025-2-3', '2025-3-1'];

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
            <DateCalendar
                onChange={handleDateSelection}
                slots={{day: CalendarDay}}
                slotProps={{day: {daysWithTodos}}}
            >
            </DateCalendar>
        </LocalizationProvider>      
    );
}