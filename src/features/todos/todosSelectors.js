import { createSelector } from 'reselect';

// A factory function for a memoized selector for todos
// The input reducer returns a stable reference (no change in state means no reference)
// Gets an object of todos from state, converts it into an array, filters the array based on completion status
export const makeSelectTodos = (completed) => createSelector(
    state => state.todos.entities,
    todos => {
        const todosList = Object.values(todos);
        return todosList.filter(todo => todo.completed === completed);
    },
);

// Don't need memoization here, just a simple selector
export const selectTodo = id => state => state.todos.entities[id];