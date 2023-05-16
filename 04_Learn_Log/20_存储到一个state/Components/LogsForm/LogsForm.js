import { useState } from 'react'
import { Card } from '../UI/Card/Card'
import './LogsForm.css'

export const LogsForm = () => {
  // let inputDate = ""
  // let inputDesc = ""
  // let inputTime = 0
  // const [inputDate,setInputDate] = useState("")
  // const [inputDesc,setInputDesc] = useState("")
  // const [inputTime,setInputTime] = useState("")
  const [fomData,setFormData] = useState({
    inputDate: '',
    inputDesc: '',
    inputTime: ''
  })

  /*当表单项发生变化时，获取用户输入的内容*/
  // 创建一个响应函数，监听表单项的变化
  const dateChangeHanlder = (e) => {
    // setInputDate(e.target.value)
    setFormData({
      ...fomData,
      inputDate: e.target.value
    })
  }
  const timeChangeHanlder = (e) => {
    setFormData({
      ...fomData,
      inputTime: e.target.value
    })
  }

  const descChangeHanlder = (e)=>{
    // 事件对象中保存了当前事件触发时的所有信息
    // e.target 执行的是触发事件的对象（DOM对象）
    // console.log("desc发生了变化")
    // 获取到当前触发事件的对象
    setFormData({
      ...fomData,
      inputDesc: e.target.value
    })
  }
  // 在React中，通过表单不需要自行提交 而是要通过React提交
  const formSubmitHandler = (e)=>{
    e.preventDefault()
    const newLog = {
      date: new Date(fomData.inputDate),
      desc: fomData.inputDesc,
      time: +fomData.inputTime
    }
    /*提交对象后如何清空表单中的旧数据  现在这种表单，在React我们成为非受控组件*/
    console.log(newLog)
    setFormData({
      inputDate: '',
      inputDesc: '',
      inputTime: ''
    })
    /*我们可以将表单中的数据存储到state中，然后将state设置为表单项的value值，然后当表单项发生变化时，state会随之变化，反正，state发生变化时，表单项也会发生变化，这种操作我们称之为双向绑定*/
    /*这样一来，表单就成了一个受控组件*/
    // 清空表单项
    // setInputDate('')
    // setInputDesc('')
    // setInputTime('')
  }
  return (
    <Card className = "logs-Form">
      <form>
        <div className='form-item'>
          <label htmlFor='date'>日期</label>
          <input id="date" type='date' onChange={dateChangeHanlder} value={fomData.inputDate}></input>
        </div>
        <div className='form-item'>
          <label htmlFor='desc'>内容</label>
          <input onChange={descChangeHanlder} id="desc" type='text' value={fomData.inputDesc}></input>
        </div>
        <div className='form-item'>
          <label htmlFor='time'>时长</label>
          <input id="time" type='number' onChange={timeChangeHanlder} value={fomData.inputTime}></input>
        </div>
        <div className='form-btn'>
          <button onClick={formSubmitHandler}>添加</button>
        </div>
      </form>
    </Card>
  )
}
