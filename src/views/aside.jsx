
import React, { useCallback, useState } from 'react';

import { Layout, } from "antd";
const { Content, Sider } = Layout;
import Left_aside from './left_aside';
import Right_aside from './right_aside';
import Meta2dContainer from './meta2d';
class Aside extends React.Component {
// const Aside = () => {

  constructor(props) {
    super(props);
    this.state = {
      current_property: '从服务器获取模型',
      current_object: 'undefined',
      current_object_properties: []
    };

    // handleClick = (child_data) => {
    //   this.setState({current_property: child_data});
    // }
  }

  handleClick(i) {
    this.setState({
      current_property: i
    })
  }

  update_current_object(key, title, data, info) {
    this.setState({
      current_object: key,
      current_object_properties: info // [title, info]
    })
  }

  render_left_aside(i) {
    return (
        <Left_aside 
        // 等号前面是子组件的名称
          global_theme={this.props.global_theme}
          value={this.state.current_property} 
          current_object={this.state.current_object} 
          onClick={(i) => this.handleClick(i)}
          update_current_object = {(key,title,data, info) => this.update_current_object(key, title, data, info)}

          // parentCallback={this.handleClick}
        />
    )
  };


  render_right_aside(i) {
    return (
        <Right_aside 
          global_theme={this.props.global_theme}
          value={this.state.current_property} 
          current_object={this.state.current_object} 
          current_object_properties={this.state.current_object_properties}
        />
    )
    // <Square value={i}/>;
  };

  render() {
    return (
        <>
        <Layout>
        {this.render_left_aside(0)}
        <Meta2dContainer 
          global_theme={this.props.global_theme}
          stay={true}
        />
        {this.render_right_aside(0)}
        </Layout>
        </>
    )
  }
};

export default Aside;