import React from 'react'

export const LogFilter = (props) => {
  // 创建监听change事件的响应实验
  const changeHandler = e => {
    console.log(e.target.value)
    props.onYearChange(Number(e.target.value))
  }
  return (
    <div>年份：<select value={props.year} onChange={changeHandler}>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </select></div>
  )
}
