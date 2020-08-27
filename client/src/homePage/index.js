import React from "react"
import ReactDom from "react-dom"
import "./index.scss"
import Home from "./pages/home"
import 'antd/dist/antd.css';


class App extends React.Component{
  render (){
    return (
      <Home></Home>
    )
  }
}

ReactDom.render(<App></App>,document.getElementById('app'))