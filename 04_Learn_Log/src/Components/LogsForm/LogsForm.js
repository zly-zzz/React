import { useState } from 'react'
import { Card } from '../UI/Card/Card'
import './LogsForm.css'

export const LogsForm = (props) => {
  const [inputDate,setInputDate] = useState("")
  const [inputDesc,setInputDesc] = useState("")
  const [inputTime,setInputTime] = useState("")

  const dateChangeHanlder = (e) => {
    setInputDate(e.target.value)
  }
  const timeChangeHanlder = (e) => {
    setInputTime(e.target.value)
  }

  const descChangeHanlder = (e)=>{
    setInputDesc(e.target.value)
  }
  const formSubmitHandler = (e)=>{
    e.preventDefault()
    const newLog = {
      date: new Date(inputDate),
      desc: inputDesc,
      time: +inputTime
    }
    // 调用父组件传递的函数
    props.onSaveLog(newLog)
    setInputDate('')
    setInputDesc('')
    setInputTime('')
  }
  return (
    <Card className = "logs-Form">
      <form>
        <div className='form-item'>
          <label htmlFor='date'>日期</label>
          <input id="date" type='date' onChange={dateChangeHanlder} value={inputDate}></input>
        </div>
        <div className='form-item'>
          <label htmlFor='desc'>内容</label>
          <input onChange={descChangeHanlder} id="desc" type='text' value={inputDesc}></input>
        </div>
        <div className='form-item'>
          <label htmlFor='time'>时长</label>
          <input id="time" type='number' onChange={timeChangeHanlder} value={inputTime}></input>
        </div>
        <div className='form-btn'>
          <button onClick={formSubmitHandler}>添加</button>
        </div>
      </form>
    </Card>
  )
}
