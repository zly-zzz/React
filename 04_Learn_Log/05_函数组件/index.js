import ReactDOM from "react-dom/client";
import App from "./App";
// 组件有两种创建方式
// 1.函数式组件 
// -- 就是一个返回JSX的普通函数
// -- 组件首字母必须大写
// 2. 类组件

// function APP(){
//   return <div>Hello React!</div>
// }
const root = ReactDOM.createRoot(document.getElementById('root'))
// React组件可以直接通过JSX渲染
root.render(<App/>)