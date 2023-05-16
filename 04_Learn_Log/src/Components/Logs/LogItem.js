import React, { useState } from 'react'
import MyDate from './MyDate'
import './LogItem.css'
import { Card } from '../UI/Card/Card'
import ConformModal from '../UI/Card/ConformModal/ConformModal'

const Logitem = (props) => {
  // 在函数组件中，属性就相当于是函数的参数，可以通过参数来访问
  // 在函数组件的形参中定义一个props，props指向的是一个对象
  // props是只读的 不能修改
  // props.desc = '嘻嘻嘻' 会报错
  const [showConfirm,setShowConfirm] = useState(false)
  const cancelHandler = ()=>{
    setShowConfirm(false)
  }
  const okHandler = () => {
    console.log(123456)
    props.onDelLog()
    setShowConfirm(false)
  }
  /*
  --组件默认会作为父组件的后代渲染到页面中
  但是有些时候这种方法会带来一些问题
  通过portal可以将组件渲染到页面中的指定位置
  --*/
  const deleteHandler = ()=>{
    // 显示确认窗口
    setShowConfirm(true)
    // const isDel = window.confirm("该操作不可恢复，确定吗")
    // if(isDel) {
    //   // 删除当前item
    //   props.onDelLog()
    // }
  }
  return (
    <Card className='item'>
      {showConfirm && <ConformModal confirmText = "该操作不可恢复！请确认" onCancel={cancelHandler} onOk = {okHandler}/>}
      <MyDate date={props.date}/>
         {/*如果降组件中的数据全部写死，将会导致组件无法动态设置，我们希望组件数据可以由外部设置*/}
         {/**/}
      <div className="content">
        <h2 className="desc">{props.desc}</h2>
        <h2 className="time">{props.time}</h2>
      </div>
      <div className='delete' onClick={deleteHandler}>✖</div>
    </Card>
  )
}

export default Logitem