import React from 'react'
import MyDate from './MyDate'
import './LogItem.css'

const Logitem = () => {
  return (
    <div className='item'>
      <MyDate/>
      <div className="content">
        {/*如果降组件中的数据全部写死，将会导致组件无法动态设置，我们希望组件数据可以由外部设置*/}
        <h2 className="desc">学习React</h2>
        <h2 className="time">40分钟</h2>
      </div>
    </div>
  )
}

export default Logitem