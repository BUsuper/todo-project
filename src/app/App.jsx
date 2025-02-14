import { useSelector } from 'react-redux'
import { TodoForm, TodosList } from '../components/';
import './App.css'

function App() {
  const todosIdsList = useSelector(state => state.ids);

  return (
    <>
      <TodoForm></TodoForm>
      <TodosList todos={[{id: 1, task: "Cat", completed: false}, {id: 2, task: "Dog", completed: false}, {id: 3, task: "Fish", completed: true}]}/>
      <TodosList completed={true} todos={[{id: 1, task: "Cat", completed: false}, {id: 2, task: "Dog", completed: true}, {id: 3, task: "Fish", completed: true}]}/>
    </>
  )
}

export default App
