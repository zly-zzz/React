import { useState } from 'react'
import './App.css'
const App = ()=>{
  // 在React中，当组件渲染完毕后，在修改组件中的变量不会使组件重新渲染
  // 要使组件可以受到变量的影响，必须在变量修改后对组件进行重新渲染
  // 这里我们就需要一个特殊变量，当这个变量被修改时，组件会自动重新渲染

  // state相当于是一个变量
  // 只是这个变量在React中进行了注册
  // React会监控这个变量的变化，当state发生变化时，会自动触发组件的重新渲染
  // 使得我们的修改可以在页面中呈现出来
  // 在函数组件中，我们需要钩子函数，获取state
  // 使用钩子useState()来创建state
  // 它需要一个值作为参数，这个值就是state的初始值，该函数会返回一个数组
  // 数组中第一个元素是初始值  --- 初始值只用来显示数据，直接修改不会触发组件的重新渲染
  // 数组中第二个元素是一个函数 --- 这个函数用来修改state，调用其修改state后会触发组件的重新渲染


      /*
    *   state
    *     - state实际就是一个被React管理的变量
    *         当我们通过setState()修改变量的值时，会触发组件的自动重新渲染
    *     - 只有state值发生变化时，组件才会重新渲染
    *     - 当state的值是一个对象时，修改时是使用新的对象去替换已有对象
    *     - 当通过setState去修改一个state时，并不表示修改当前的state
    *         它修改的是组件下一次渲染时state值
    *     - setState()会触发组件的重新渲染，它是异步的,会有一个队列，和vue的原理相同
    *           所以当调用setState()需要用旧state的值时，一定要注意
    *           有可能出现计算错误的情况
    *           为了避免这种情况，可以通过为setState()传递回调函数的形式来修改state值
    *
    * */


  const [counter, setCounter] = useState(1)
  const [user, setUser] = useState({name: '孙悟空', age: 18})
  const addHanlder = ()=>{
    setTimeout((prevCounter)=>{
      /*
      *   setState()中回调函数的返回值将会成为新的state值
      *       回调函数执行时，React会将最新的state值作为参数传递
      * */
      setCounter(prevCounter+1)
      // setCounter(prevState => prevState + 1);
    },1000)
  }
  const lessHanlder = ()=>{
    setCounter(counter-1)
  }
  const updateUserHandler = ()=>{
    setUser({...user, name: '猪八戒'})
  }
  return <div className="app">
    {/* 当点击+时,数字增大 */}
    <h1>{counter} --- {user.name} --- {user.age}</h1>
    <button onClick={addHanlder}>+</button>
    <button onClick={lessHanlder}>-</button>
    <button onClick={updateUserHandler}>修改</button>
  </div>
}
export default App