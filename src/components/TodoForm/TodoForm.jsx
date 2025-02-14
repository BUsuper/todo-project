import { Button, TextField } from "@mui/material";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from "../../features/todosSlice";

export function TodoForm() {
    const [todoInput, setTodoInput] = useState("");
    const [notesInput, setNotesInput] = useState("");

    // Get dispatch from useDispatch
    const dispatch = useDispatch();

    // Use event and a setter function passed to it to save text from a field into corresponding state
    const handleUserInput = (e, setter) => {
        const userInput = e.target.value;
        setter(userInput);
    }

    const handleTodoAddition = (todo, notes) => {
        // Generate an id and create a todo object
        const newTodo = {
            id: uuidv4(),
            task: todo,
            notes,
            completed: false,
        }

        // Add the object to the Redux state
        dispatch(addTodo(newTodo));
    }

    // Use a closure to pass additonal parameters to handleUserInput
    return <>
        <TextField label="Todo" variant="outlined" onChange={e => handleUserInput(e, setTodoInput)}></TextField>
        <TextField label="Add notes" variant="outlined" onChange={e => handleUserInput(e, setNotesInput)}></TextField>
        <Button variant="contained" onClick={() => handleTodoAddition(todoInput, notesInput)}>Add Todo</Button>
    </>
}