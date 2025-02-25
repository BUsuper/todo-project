import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todosSlice';
import { saveTodos, loadTodos } from '../utils/localStorage';

// Will be used as initial state when passed as a parameter
// Yes, it has to be called preloadedState
const preloadedState = {
    todos: loadTodos(),
}

const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
    preloadedState,
});

store.subscribe(() => {
    saveTodos(store.getState().todos);
})

export default store;