//! invalid for now

import { Divider, Menu, Switch, Breadcrumb,  theme, Layout, Slider, } from 'antd';
import React, { useEffect, useState } from 'react';
import {my_options} from './my_options';

  const item_navs = [
    // {
    //   label:
    //   '工具栏',
    //   key: 'title',
    // }, 
    {
      label: 
        <p onClick={() => meta2d.fitView()} 
         className={'vertical-text'}
        >
          自适应界面
        </p> , 
      key: '1',
    }, {
      label: 
        <p onClick={() => meta2d.centerView()} >
          居中显示
        </p> ,
      key: '2',
    }, {
      label: 
        <p onClick={() => meta2d.toggleAnchorMode()} >
            添加锚点
        </p> ,
      key: '3',
    }, {
      label: 
        <p onClick={() => meta2d.downloadPng('test.png')} >
          生成 png 图像
        </p> ,
      key: '4',
    }, {
      label: 
        <p onClick={() => {
            console.log('child pen', child_pen);
            pens = meta2d.mine();
            console.log('pens');
            console.log(pens);
            // draw_interface_text();
            set_test_list((Object.entries(meta2d.mine())).map((pen) => {
              console.log('pen');
              console.log(pen[1]);
              return (
                <>
                {pen[1].name}
                {pen[1].anchors[0].x}
                {pen[1].anchors[1].x}
                {pen[1].anchors[2].x}
                </>
              )
            }));
          }
          } >
            {
              // list.map(l => <p>234</p>)
              // meta2d.mine().map(l => <p>23</p>)
            }
          {/* onClick={() => console.log(Meta2d)} > */}
          {/* {draw_interface_text()} */}
          {test_list}
          test
        </p>,
      key: '5',
    }, {
      label: 

        <p onClick={() => 
          {
            meta2d.resize();
          // setStay(true)
          }
        } >
          {/* gen Meta2d */}
          调整画布
        </p> ,
      key: 'resize'
    }, {
      label: 

        <p onClick={() => 
          {
            // meta2d.fitView();
            setTest_info('ok')
            console.log(meta2d.getOptions());
            // grid gridsize, can't set
            // 
            // my_options.gridSize = 40;
            // my_options.grid = false;
            my_options.anchorRadius = 50;
            // meta2d.setOptions(my_options);
            let my_option = meta2d.getOptions();
            // my_option.anchorRadius = 100;
            my_option.gridSize = 100;
            my_option.gridColor = '#ffffff';
            meta2d.setOptions(my_option);
            meta2d.resize();
          }
        } >
          {test_info}
        </p> ,
      key: 'test_options'
    }, {
      label: <p onClick={ () => {
          let my_option = meta2d.getOptions();
          // my_option.gridSize = 100;
          // my_option.gridColor = '#ffffff';
          my_option.grid = !my_option.grid;
          meta2d.setOptions(my_option);
          meta2d.resize();
      }}> 网格开关</p>,
      key: 'grid-set',
    }, 
    {
      label: <Slider defaultValue={30} 
        onChange={(value) => {
          // console.log(value);
          let my_option = meta2d.getOptions();
          // my_option.gridSize = 100;
          // my_option.gridColor = '#ffffff';
          my_option.gridSize = value;
          meta2d.setOptions(my_option);
          // meta2d.resize();
          meta2d.canvas.resize();
          // meta2d.render();
        }}
      />,
      key: 'gridSize'
    }, 
    {
      label: <>
        拓扑层级
        </>,
      key: 'topo'
    }, 
    {
      label: <>
        待定
        </>,
      key: 'remain'
    }, 
  ]

  export default item_navs;