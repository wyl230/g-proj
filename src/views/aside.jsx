
import React, { useCallback, useState } from 'react';

import Left_aside from './left_aside';
import Right_aside from './right_aside';
class Aside extends React.Component {
// const Aside = () => {

  constructor(props) {
    super(props);
    this.state = {
      current_property: 'test property',
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

  update_current_object(key, title, data) {
    this.setState({
      current_object: key,
      current_object_properties: [title]
    })
  }

  render_left_aside(i) {
    return (
        <Left_aside 
        // 等号前面是子组件的名称
          value={this.state.current_property} 
          current_object={this.state.current_object} 
          onClick={(i) => this.handleClick(i)}
          update_current_object = {(key,title,data) => this.update_current_object(key, title, data)}

          // parentCallback={this.handleClick}
        />
    )
  };


  render_right_aside(i) {
    return (
        <Right_aside 
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
        {this.render_left_aside(0)}
        {this.render_right_aside(0)}
        </>
    )
  }
};

export default Aside;