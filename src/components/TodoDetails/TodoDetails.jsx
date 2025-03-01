import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTodo, updateTodo } from "../../features/todosSlice";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/en-gb';

export function TodoDetails({ id }) {
    const todo = useSelector(selectTodo(id))

    const [isEditingActive, setIsEditingActive] = useState(false);
    // These values are obtained from the todo that's being edited first
    // then they're used to update it
    const [taskText, setTodoText] = useState(todo.task);
    const [notesText, setNotesText] = useState(todo.notes);
    const [date, setDate] = useState(todo.date);

    const dispatch = useDispatch();

    const handleTriggerEditing = () => {
        setIsEditingActive(prev => !prev);
    }

    const handleSaving = (id) => {
        const todo = {
            id,
            task: taskText,
            notes: notesText,
            date,
        }

        dispatch(updateTodo(todo));
        setIsEditingActive(false);
    }

    const handleCancelEditing = () => {
        setTodoText(todo.task);
        setNotesText(todo.notes);
        setDate(todo.date);
        setIsEditingActive(false);
    }

    // Saves the date as a simple string, not a dayjs object
    const handleDateChange = (date) => {
        setDate(`${date.year()}-${date.month() + 1}-${date.date()}`);
    }

    // Yes, you need to stop the event from bubbling up to the TodoList
    return (
    <Box id={`todoDetails${id}`}onClick={(e) => e.stopPropagation()}>
        <Box sx={{display:"flex", flexDirection:"column"}}>
            <TextField 
                slotProps={{readOnly: true}}
                disabled={!isEditingActive}
                value={taskText}
                onChange={(e) => setTodoText(e.target.value)}
                id={`taskText${id}`} 
                name={`taskText${id}`}
                label="Todo"
                sx={{margin:"5px"}}>
            </TextField>
            <TextField 
                slotProps={{readOnly: true}} 
                disabled={!isEditingActive} 
                value={notesText}
                multiline
                onChange={(e) => setNotesText(e.target.value)} 
                id={`notesText${id}`}
                name={`notesText${id}`} 
                label="Notes"
                sx={{margin:"5px"}}>
            </TextField>
        </Box>
        <Box>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
                <DatePicker 
                    onAccept={handleDateChange}
                    id={`datePicker${id}`}
                    label="Todo Deadline"
                    defaultValue={date ? dayjs(date) : undefined}
                    disabled={!isEditingActive}
                    sx={{margin:"5px"}}>
                </DatePicker>
            </LocalizationProvider>
        </Box>
        {/* This works like shit: if the date is already picked and you remove it,
        and you want to set the same date again, you have to click on another date
        then click on the old one */}
        <Box>
            {date ?
            <Button onClick={() => setDate(undefined)} id={`deadlineButton${id}`} disabled={!isEditingActive} variant="outlined">Delete deadline</Button> :
            <Button id={`deadlineButton${id}`} disabled variant="contained">No deadline</Button>}
        </Box>
        <Box>
            {
            isEditingActive ?
                <Button id={`editButton${id}`} variant="contained" sx={{margin:"10px"}} onClick={handleTriggerEditing}>Edit</Button> :
                <Button id={`editButton${id}`} variant="outlined" sx={{margin:"10px"}} onClick={handleTriggerEditing}>Edit</Button>
            }
            <Button id={`saveButton${id}`} variant="outlined" sx={{margin:"10px"}} onClick={() => handleSaving(id)} disabled={!isEditingActive}>Save</Button>
            <Button id={`undoButton${id}`} variant="outlined" sx={{margin:"10px"}} onClick={handleCancelEditing} disabled={!isEditingActive}>Undo</Button>
        </Box>
    </Box>);
}