import { Card } from "../UI/Card/Card"
import Logitem from "./LogItem"
import './Logs.css'
const Logs = ()=>{
  const logsData = [
    {   
      id: '001',
      date: new Date(2022,5,22,19,0),
      desc: "学习前端",
      time: 30
    },
    { 
      id: '002',
      date: new Date(2023,8,10,5,30),
      desc: "学习React",
      time: 60
    },
    { 
      id: '003',   
      date: new Date(2023,3,2,5,30),
      desc: "学习Promise",
      time: 50
    },
    {    
      id: '004',
      date: new Date(2023,2,6,5,30),
      desc: "学习webpack",
      time: 30
    },
  ]
  const logItemDate = logsData.map(item => <Logitem key={item.id} {...item}/>)
  return <Card className="logs">
    {/* {logsData.map(item => <Logitem date={item.date} desc={item.desc} time={item.time}/> )} */}
    {logItemDate}
  </Card>
}
export default Logs