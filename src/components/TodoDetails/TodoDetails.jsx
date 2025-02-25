import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleUserInput } from "../../handlers/handleUserInput";
import { selectTodo, updateTodo } from "../../features/todosSlice";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/de';

export function TodoDetails({ id }) {
    const todo = useSelector(selectTodo(id))

    const [isEditingActive, setIsEditingActive] = useState(false);
    const [taskText, setTodoText] = useState(todo.task);
    const [notesText, setNotesText] = useState(todo.notes);

    const dispatch = useDispatch();

    const handleTriggerEditing = () => {
        setIsEditingActive(prev => !prev);
    }

    const handleSaving = (id) => {
        const todo = {
            id,
            task: taskText,
            notes: notesText,
        }

        dispatch(updateTodo(todo));
        setIsEditingActive(false);
    }

    const handleCancelEditing = () => {
        setTodoText(todo.task);
        setNotesText(todo.notes);
        setIsEditingActive(false);
    }

    // Yes, you need to stop the event from bubbling up to the TodoList
    return (
    <Box onClick={(e) => e.stopPropagation()}>
        <Box sx={{display:"flex", flexDirection:"column"}}>
            <TextField 
                slotProps={{readOnly: true}}
                disabled={!isEditingActive}
                value={taskText}
                onChange={(e) => handleUserInput(e, setTodoText)}
                id={`taskText${id}`} 
                label="Todo"
                sx={{margin:"5px"}}>
            </TextField>
            <TextField 
                slotProps={{readOnly: true}} 
                disabled={!isEditingActive} 
                value={notesText}
                multiline
                onChange={(e) => handleUserInput(e, setNotesText)} 
                id={`notesText${id}`} 
                label="Notes"
                sx={{margin:"5px"}}>
            </TextField>
        </Box>
        <Box>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
                {isEditingActive && <DatePicker></DatePicker>}
            </LocalizationProvider>
        </Box>
        <Box>
            {
            isEditingActive ?
                <Button variant="contained" sx={{margin:"10px"}} onClick={handleTriggerEditing}>Edit</Button> :
                <Button variant="outlined" sx={{margin:"10px"}} onClick={handleTriggerEditing}>Edit</Button>
            }
            <Button variant="outlined" sx={{margin:"10px"}} onClick={() => handleSaving(id)} disabled={!isEditingActive}>Save</Button>
            <Button variant="outlined" sx={{margin:"10px"}} onClick={handleCancelEditing} disabled={!isEditingActive}>Undo</Button>
        </Box>
    </Box>);
}