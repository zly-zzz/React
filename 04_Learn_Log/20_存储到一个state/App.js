
import Logs from "./Components/Logs/Logs"
import { LogsForm } from "./Components/LogsForm/LogsForm"
import './App.css'

const App = ()=>{
  return <div className="app">
    <LogsForm/>
    <Logs/>
  </div>
}
export default App