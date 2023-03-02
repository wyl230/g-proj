/*
 * @Description: 
 */

import React, { useEffect, useState } from 'react';
import { Meta2d } from '@meta2d/core';
import { my_compoent, my_compoent_Anchors } from '../utils/draw';

// const Meta2dContainer = (props) => {
const Meta2dContainer = () => {
  const [test_list, set_test_list] = useState('23')
  useEffect(() => {
    window.meta2d = new Meta2d('meta2d');
    window.meta2d.register({ my_compoent });
    window.meta2d.registerAnchors({ my_compoent: my_compoent_Anchors });
    // 4. 开始使用
    const pen = {
      name: 'my_compoent',
      text: 'PIM',
      x: 100,
      y: 100,
      width: 140,
      height: 110,
    };
    meta2d.addPen(pen);
    meta2d.inactive();
  }, []);
  var pens;
  return (
    <div className='main' >
      <div>
        <button
          onClick={() => window.meta2d.fitView()} >
          自适应界面
        </button> <button
          onClick={() => meta2d.centerView()} >
          居中显示
        </button> <button
          onClick={() => meta2d.toggleAnchorMode()} >
            添加锚点
        </button> <button
          onClick={() => meta2d.downloadPng()} >
          生成 png 图像
        </button> <button
          onClick={() => {
            pens = window.meta2d.mine();
            console.log('pens');
            console.log(pens);
            // draw_interface_text();
            set_test_list((Object.entries(window.meta2d.mine())).map((pen) => {
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
        </button>

      </div>
      <div className="meta2d" id="meta2d"></div>
    </div>
  );
};

export default Meta2dContainer;


