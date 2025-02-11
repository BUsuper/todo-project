import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

// Normalise state using createEntityAdapter
const todoAdapter = createEntityAdapter();

//Add initial state
const initialState = todoAdapter.getInitialState();

// Create slice for the whole todo app
// No need to type "initialState: initialState" because the property name and variable name are the same (syntactic sugar)
// TODO: Add more reducers
const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: todoAdapter.addOne,
        deleteTodo: todoAdapter.removeOne,
    },
});

/*
Todo entry structure:
{
    id,     - a unique identifier (num)
    task,   - the main text of the task, necessary to create it (string)
    status, - shows whether the task is completed or not (boolean)
    notes,  - another text field, a longer description of the task, empty by default (string)
}
*/

// Export actions
export const { addTodo, deleteTodo } = todosSlice.actions;
// Export reducer
export default todosSlice.reducer;