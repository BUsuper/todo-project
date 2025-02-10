import { createSlice } from "@reduxjs/toolkit";

// Create slice for the whole todo app
// TODO: Add initial state to test!
// TODO: Add more reducers
const todosSlice = createSlice({
    name: 'todos',
    initialState: {},
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