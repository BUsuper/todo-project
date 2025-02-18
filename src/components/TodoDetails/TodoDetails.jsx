import { TextField } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectTodo } from "../../features/todosSlice";

export function TodoDetails({ id }) {
    const todo = useSelector(selectTodo(id))

    const [taskText, setTodoText] = useState(todo.task);
    const [notesText, setNotesText] = useState(todo.notes);
    // Do I really need the disabled attribute?
    return (<>
        <TextField slotProps={{readOnly: true}} disabled value={taskText} label="Todo"></TextField>
        <TextField slotProps={{readOnly: true}} disabled value={notesText} label="Notes"></TextField>
    </>);
}