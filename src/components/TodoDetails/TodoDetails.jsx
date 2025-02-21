import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleUserInput } from "../../handlers/handleUserInput";
import { selectTodo, updateTodo } from "../../features/todosSlice";

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
    return (<div onClick={(e) => e.stopPropagation()}>
        <TextField 
            slotProps={{readOnly: true}}
            disabled={!isEditingActive}
            value={taskText}
            onChange={(e) => handleUserInput(e, setTodoText)}
            id={`taskText${id}`} 
            label="Todo">
        </TextField>
        <TextField 
            slotProps={{readOnly: true}} 
            disabled={!isEditingActive} 
            value={notesText}
            onChange={(e) => handleUserInput(e, setNotesText)} 
            id={`notesText${id}`} 
            label="Notes">
        </TextField>
        <Button onClick={handleTriggerEditing}>Edit</Button>
        <Button onClick={() => handleSaving(id)} disabled={!isEditingActive}>Save</Button>
        <Button onClick={handleCancelEditing} disabled={!isEditingActive}>Cancel</Button>
    </div>);
}