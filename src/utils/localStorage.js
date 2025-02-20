export function loadTodos() {
    try {
        const serializedState = localStorage.getItem('state');
        return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (error) {
        console.log(error);
        return undefined;
    }
}

export function saveTodos(state) {
    localStorage.setItem('state', JSON.stringify(state));
}