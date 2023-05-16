import React from 'react'
import './Card.css'
export const Card = (props) => {
  // props.children表示组件的标签体
  return (
    <div className={`card ${props.className}`}>{props.children}</div>
  )
}
