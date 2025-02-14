import { TodoForm, TodosList } from '../components/';
import './App.css'

function App() {

  return (
    <>
      <TodoForm></TodoForm>
      <TodosList/>
      <TodosList completed={true}/>
    </>
  )
}

export default App
