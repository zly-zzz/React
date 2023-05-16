import React from "react"

// 类组件必须要继承 React.Component
// 相较于函数组件 类组件的编写要麻烦一些 但是他俩的功能是一样的

class App extends React.Component{
// 类组件中必须添加一个render()方法
  render(){
    return  <div>我是一个类组件！！！</div>
  }
}
export default App