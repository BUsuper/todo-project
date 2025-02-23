import { Grid2 } from '@mui/material';
import { CalendarBlock, TodoBlock } from '../components/';
import './App.css'

function App() {

  return (
    <Grid2 container spacing={1}>
      <CalendarBlock />
      <TodoBlock />
    </Grid2>
  )
}

export default App
