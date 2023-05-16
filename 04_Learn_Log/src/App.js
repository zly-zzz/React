import Logs from "./Components/Logs/Logs"
import { LogsForm } from "./Components/LogsForm/LogsForm"
import './App.css'
import { useState } from "react"

const App = ()=>{
  const [logsData,setLogsData] = useState([
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
    {   
      id: '005',
      date: new Date(2022,5,20,19,0),
      desc: "学习前端",
      time: 30
    },
    {   
      id: '006',
      date: new Date(2021,5,22,19,0),
      desc: "学习前端",
      time: 30
    },
    {   
      id: '007',
      date: new Date(2021,5,23,19,0),
      desc: "学习前端",
      time: 30
    },
  ])
  const saveLogHanlder = (newLog)=>{
    // 往对象中添加id
    newLog.id = Date.now() + ''
    // logsData.push(newLog)
    setLogsData([newLog, ...logsData])
  }
  // 定义一个函数 从数组中删除日志
  // const delLogByIndex = (index) => {
  //   setLogsData(prevState => {
  //     const newLogs = [...prevState]
  //     newLogs.splice(index,1)
  //     return newLogs
  //   })
  // }
  const delLogById = (id) => {
    setLogsData(prevState => {
      const newLogs = prevState.filter(item => item.id  !== id)
      return newLogs
    })
  }
  /*下一步：将LogsForm数据传递给APP，然后APP组件将日志添加在新的数组中*/
  return <div className="app">
    <LogsForm onSaveLog={saveLogHanlder}/>
    <Logs logsData={logsData} onDelLog={delLogById}/>
  </div>
}
export default App