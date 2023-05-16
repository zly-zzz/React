import React from 'react'
import './ConformModal.css'
import { Card } from '../Card'
import BackDrop from '../../BackDrop/BackDrop'

const ConformModal = (props) => {
  return (
    <BackDrop>
      <Card className='conformModal'>
        <div className='conformText'>
          <p>{props.confirmText}</p>
        </div>
        <div className='conformButton'>
          <button className='okButton' onClick={props.onOk}>确认</button>
          <button onClick={props.onCancel}>取消</button>
        </div>
    </Card>
    </BackDrop>
  )
}

export default ConformModal