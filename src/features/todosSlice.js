import { createSlice } from "@reduxjs/toolkit";

//Add initial state to test!
const initialState = {1: {id: 1, task: "Hello World"},
                      2: {id: 2, task: "Does it work?"}};

// Create slice for the whole todo app
// No need to type "initialState: initialState,"
// TODO: Add more reducers
const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        }
    },
});

// Export actions
export const { addTodo, } = todosSlice.actions;
// Export reducer
export default todosSlice.reducer;