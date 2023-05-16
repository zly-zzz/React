import { useState } from "react"
import { Card } from "../UI/Card/Card"
import { LogFilter } from "./LogFilter/LogFilter"
import Logitem from "./LogItem"
import './Logs.css'
const Logs = (props)=>{
  /*当遇到一个组件需要多个组件使用时，我们可以将数据放入到这些组件共同的祖先元素中*/ 
  const [year, setYear] = useState(2022)
  // 修改年份
  const changeYearHanlder = (year)=>{
    setYear(year)
  }
  let filterData = props.logsData.filter(item => item.date.getFullYear() === year)
  const logItemData = filterData.map((item,index) => <Logitem key={item.id} {...item} onDelLog={()=>{props.onDelLog(item.id)}}/>)
  return <Card className="logs">
    <LogFilter year={year} onYearChange={changeYearHanlder}/>
    {/* {logsData.map(item => <Logitem date={item.date} desc={item.desc} time={item.time}/> )} */}
    {logItemData.length !== 0 ? logItemData : <p className="noLogs">没有找到日志</p>}
  </Card>
}
export default Logs