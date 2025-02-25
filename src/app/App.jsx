import { Container, Grid2 } from '@mui/material';
import { CalendarBlock, TodoBlock } from '../components/';
import './App.css'

function App() {

  return (
    <Container>
      <Grid2 container spacing={1}>
        <CalendarBlock />
        <TodoBlock />
      </Grid2>
    </Container>
  )
}

export default App
