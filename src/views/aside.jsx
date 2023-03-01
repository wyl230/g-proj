
import React, { useCallback, useState } from 'react';

import Left_aside from './left_aside';
import Right_aside from './right_aside';
class Aside extends React.Component {
// const Aside = () => {

  constructor(props) {
    super(props);
    this.state = {
      current_property: 'test property'
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
  render_left_aside(i) {
    return (
        <Left_aside 
          value={this.state.current_property} 
          onClick={(i) => this.handleClick(i)}
          // parentCallback={this.handleClick}
        />
    )
  };


  render_right_aside(i) {
    return (
        <Right_aside value={this.state.current_property} />
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