import React from "react"
import '../../style/components/briefCard.scss'
export class BriefCard extends React.PureComponent{

  constructor(props){
    super(props);
  }

  render (){
    return (
      <div className="brief-card flex-vertical">
        <h3 className="card-title">{this.props.data.title}</h3>
        <div className="card-info-wrapper">
          <div className="text">更新时间：{this.props.data.updateTime || '-'}</div>
          <div className="text">点击量：{this.props.data.clickCount || '-'}</div>
        </div>
        <p className="card-content"> 
        {this.props.data.content || '-'}
        </p>
      </div>
    )
  }

}