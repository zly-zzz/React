import Logitem from "./LogItem"
import './Logs.css'
const Logs = ()=>{
  return <div className="logs">
    <Logitem date={new Date()} desc={"学习前端"} time={"50分钟"}/>
    <Logitem date={new Date()} desc={"学习React"} time={"60分钟"}/>
  </div>
}
export default Logs