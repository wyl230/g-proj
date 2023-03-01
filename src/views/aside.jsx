
import React, { useCallback, useState } from 'react';

import Left_aside from './left_aside';
import Right_aside from './right_aside';
class Aside extends React.Component {
// const Aside = () => {

  render_left_aside(i) {
    return (
        <Left_aside/>
    )
  };


  render_right_aside(i) {
    return (
        <Right_aside />
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