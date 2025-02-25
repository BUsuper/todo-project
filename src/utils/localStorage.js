export function loadTodos() {
    try {
        const serializedState = localStorage.getItem('state');
        return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (error) {
        console.log(error);
        return undefined;
    }
}

// Need to serialize the object before adding it to local storage
export function saveTodos(state) {
    try {
        localStorage.setItem('state', JSON.stringify(state));
    }    
    catch (error) {
        console.log(error);
    }
}