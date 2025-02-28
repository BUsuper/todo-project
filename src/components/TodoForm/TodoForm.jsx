import { Box, Button, TextField } from "@mui/material";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { handleUserInput } from "../../handlers/handleUserInput";
import { addTodo } from "../../features/todosSlice";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/en-gb';

export function TodoForm() {
    const [todoInput, setTodoInput] = useState("");
    const [notesInput, setNotesInput] = useState("");
    const [dateInput, setDateInput] = useState(null);

    // Get dispatch from useDispatch
    const dispatch = useDispatch();

    const handleTodoAddition = (e, todo, notes, date) => {
        // Prevent the page from reloading when the form is submitted
        e.preventDefault();

        // Generating an id and create a todo object
        const newTodo = {
            id: uuidv4(),
            task: todo,
            notes,
            completed: false,
            date: `${date.year()}-${date.month() + 1}-${date.date()}`
        }

        // Adding the object to the Redux state
        dispatch(addTodo(newTodo));

        // Tidying up the input fields
        setTodoInput("");
        setNotesInput("");
        setDateInput(null);
    }

    // Using a closure to pass additonal parameters to handleUserInput
    return (
        <Box 
            component="form"
            id="TodoForm"
            sx={{border: "solid 1px", borderColor: "divider", borderRadius:"5px", padding:"10px"}}
            onSubmit={(e) => handleTodoAddition(e, todoInput, notesInput, dateInput)}
        >
            <TextField
                id="todoInputField"
                name="todo"
                label="Todo"
                variant="outlined"
                value={todoInput}
                required
                sx={{width: "80%", margin: "7.5px auto"}}
                onChange={e => handleUserInput(e, setTodoInput)}>
            </TextField>
            <TextField
                id="notesInputField"
                name="notes"
                label="Add notes"
                variant="outlined"
                value={notesInput}
                sx={{width: "80%", margin: "7.5px auto"}}
                onChange={e => handleUserInput(e, setNotesInput)}>
            </TextField>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
                <DatePicker 
                    onAccept={(date) => setDateInput(date)}
                    id={`datePickerTodoForm`}
                    label="Set Todo Deadline"
                    value={dateInput}
                    sx={{margin:"7.5px"}}>
                </DatePicker>
            </LocalizationProvider>
            <Button 
                id="addTodoButton"
                type="submit"
                variant="contained"
                sx={{
                        display: "block",
                        margin: "7.5px auto"
                    }}
            >
                Add Todo
            </Button>
        </Box>
    );
}