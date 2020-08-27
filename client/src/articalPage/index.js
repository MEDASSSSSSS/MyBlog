import React from "react"
import ReactDom from "react-dom"
import "./index.scss"
import 'antd/dist/antd.css';


class App extends React.Component{
  render (){
    return (
      <div>文章</div>
    )
  }
}

ReactDom.render(<App></App>,document.getElementById('app'))