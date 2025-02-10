import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useSelector } from 'react-redux'
import './App.css'

function App() {
  const todosList = useSelector(state => state.todos);

  return (
    <>
      <List>
        {
          todosList.map((item, index) => {
            return <ListItem key={index}>{item.task}</ListItem>
          })
        }
      </List>
    </>
  )
}

export default App
