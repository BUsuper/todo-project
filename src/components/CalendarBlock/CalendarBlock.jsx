import { Grid2 } from '@mui/material';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export function CalendarBlock() {
    return (
        <Grid2 size={{sm: 12, md: 4}}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
                <DateCalendar></DateCalendar>
            </LocalizationProvider>
        </Grid2>
    );
}