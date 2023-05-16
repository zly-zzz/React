import ReactDOM from "react-dom/client";
import './index.css'
const app = <div className="logs">
  {/*日志项容器*/}
  <div className="item">
      <div className="date">
        <div className="month">四月</div>
        <div className="day">19</div>
      </div>
      <div className="content">
        <h2 className="desc">学习React</h2>
        <h2 className="time">40分钟</h2>
      </div>
  </div>

</div>
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(app)