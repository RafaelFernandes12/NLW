import { Habit } from "./components/Habit"
import './styles/global.css'
function App() {

  return (
    <>
    <Habit  completed={3}/> 
    <Habit  completed={3}/> 
    <Habit  completed={10}/> 
    <Habit  completed={20}/> 
    </>
  ) 
}

export default App
