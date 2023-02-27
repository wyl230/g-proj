/*
 * @Description: 
 * @Author: 高浩然
 * @Date: 2021-10-11 15:32:00
 * @LastEditTime: 2021-10-11 16:36:43
 */
import React from 'react';
import Left_aside from './left_aside';
import Right_aside from './right_aside';
import Header from './header';
import Meta2dContainer from './meta2d';

const App = () => {
  return (
    <>
      <Header />
      <Left_aside />
      <Right_aside />
      <Meta2dContainer />
    </>
  );
};

export default App;