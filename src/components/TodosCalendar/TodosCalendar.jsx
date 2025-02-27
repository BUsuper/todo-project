import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useDispatch, useSelector } from "react-redux";
import { setDate } from "../../features/filtersSlice";
import { CalendarDay } from '../../components';
import { makeSelectTodos } from '../../features/todosSlice';


export function TodosCalendar() {
    const dispatch = useDispatch();

    const handleDateSelection = (date) => {
        dispatch(setDate(`${date.year()}-${date.month() + 1}-${date.date()}`));
    }

    //const daysWithTodos = ['2025-2-14', '2025-2-19', '2025-2-3', '2025-3-1'];
    const selectTodos = makeSelectTodos(false);
    const todos = useSelector(selectTodos);
    const daysWithTodos = new Set(todos.map(todo => todo.date));

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