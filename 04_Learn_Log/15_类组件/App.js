import React, { Component } from 'react'
import './App.css'
import User from './components/User'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <User name="猪八戒" age="28" gender="男"/>
      </div>
    )
  }
}
