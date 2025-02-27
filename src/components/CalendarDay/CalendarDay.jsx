import { Badge } from '@mui/material';
import { PickersDay } from '@mui/x-date-pickers';

export function CalendarDay(props) {
    // daysWithTodos shouldn't be passed to PickerDays (React doesn't recognise it as a correct prop)
    const {daysWithTodos, day, outsideCurrentMonth, ...otherProps} = props;

    // Now I just need to compare the date of this day to a list of days with a todo
    const hasTodo = daysWithTodos.has(`${day.year()}-${day.month() + 1}-${day.date()}`);
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