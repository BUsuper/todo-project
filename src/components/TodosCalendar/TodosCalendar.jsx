import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useDispatch, useSelector } from "react-redux";
import { setDate } from "../../features/filters/filtersSlice";
import { CalendarDay } from '../../components';
import { makeSelectTodos } from '../../features/todos/todosSelectors';


export function TodosCalendar() {
    const dispatch = useDispatch();

    const handleDateSelection = (date) => {
        dispatch(setDate(`${date.year()}-${date.month() + 1}-${date.date()}`));
    }

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