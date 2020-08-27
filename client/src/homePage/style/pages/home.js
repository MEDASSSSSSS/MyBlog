import React from 'react';
import { Layout } from 'antd';

import { Menu } from 'antd';

import { BriefCard } from "../components/articleCard"


const { Header, Footer, Content } = Layout;

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      menus:[
        { name:'目录1',val: 'one'},
        { name:'目录2',val: 'two'},
        { name:'目录3',val: 'tree'},
        { name:'目录4',val: 'four'},
        { name:'目录5',val: 'five'},
      ],
      brifes:[
        {
          title:'文章一',
          author:'ren1',
          updataTime:'2020-8-7 10:00:00',
          clickCount:'100',
          content:'ahhhahhhhahh哈哈哈哈哈'
        },
        {
          title:'文章一',
          author:'ren1',
          updataTime:'2020-8-7 10:00:00',
          clickCount:'100',
          content:'ahhhahhhhahh哈哈哈哈哈'
        },
        {
          title:'文章一',
          author:'ren1',
          updataTime:'2020-8-7 10:00:00',
          clickCount:'100',
          content:'ahhhahhhhahh哈哈哈哈哈'
        },
        {
          title:'文章一',
          author:'ren1',
          updataTime:'2020-8-7 10:00:00',
          clickCount:'100',
          content:'ahhhahhhhahh哈哈哈哈哈'
        },
        {
          title:'文章一',
          author:'ren1',
          updataTime:'2020-8-7 10:00:00',
          clickCount:'100',
          content:'ahhhahhhhahh哈哈哈哈哈'
        },
        {
          title:'文章一',
          author:'ren1',
          updataTime:'2020-8-7 10:00:00',
          clickCount:'100',
          content:'ahhhahhhhahh哈哈哈哈哈'
        },
        {
          title:'文章一',
          author:'ren1',
          updataTime:'2020-8-7 10:00:00',
          clickCount:'100',
          content:'ahhhahhhhahh哈哈哈哈哈'
        },
        {
          title:'文章一',
          author:'ren1',
          updataTime:'2020-8-7 10:00:00',
          clickCount:'100',
          content:'ahhhahhhhahh哈哈哈哈哈'
        },
        {
          title:'文章一',
          author:'ren1',
          updataTime:'2020-8-7 10:00:00',
          clickCount:'100',
          content:'顶顶顶顶顶顶顶顶'
        },
        {
          title:'文章一',
          author:'ren1',
          updataTime:'2020-8-7 10:00:00',
          clickCount:'100',
          content:'ahhhahhhhahh哈哈哈哈哈'
        },
      ]
    }
  }
  handleClick(name){
    console.log(name);
  }
  
 
  render(){
    return (
      <Layout className={'home-page','site-layout'}>
        <Header className={'home-header'}>
          My Blog
        </Header>
        <Layout className={'home-content-wrapper'}>
          <Content className={'home-content'}>
            <Menu className={'home-menu'}
              onClick={this.handleClick}
              style={{width:200}}
            >
              {this.state.menus.map(ele => {
                return  <Menu.Item key={ele.val}>{ele.name}</Menu.Item>
              })}
            </Menu>
            <div className="flex-vertical home-content-left">
              {this.state.brifes.map(ele => {
                return <BriefCard data={ele}></BriefCard>
              })}
            </div>
            <div className="home-content-right flex-vertical">
              <div>热门贴</div>
              <div>推荐帖</div>
            </div>
          </Content>
        </Layout>
        <Footer style={{ textAlign: 'center' }}>
          底部
        </Footer>
      </Layout>
    )
  }
}
