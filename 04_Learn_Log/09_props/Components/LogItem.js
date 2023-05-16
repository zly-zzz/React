import React from 'react'
import MyDate from './MyDate'
import './LogItem.css'

const Logitem = (props) => {
  // 在函数组件中，属性就相当于是函数的参数，可以通过参数来访问
  // 在函数组件的形参中定义一个props，props指向的是一个对象
  console.log(props)
  return (
    <div className='item'>
      <MyDate/>
         {/*如果降组件中的数据全部写死，将会导致组件无法动态设置，我们希望组件数据可以由外部设置*/}
         {/**/}
      <div className="content">
        <h2 className="desc">{props.desc}</h2>
        <h2 className="time">{props.time}</h2>
      </div>
    </div>
  )
}

export default Logitem