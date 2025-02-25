// Use event and a setter function passed to it to save text from a field into corresponding state
// Used in TodoForm and TodoDetails
export function handleUserInput(e, setter) {
    const userInput = e.target.value;
    setter(userInput);
}