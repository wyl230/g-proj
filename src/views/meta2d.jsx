/*
 * @Description: 
 */

import React, { useEffect, useState } from 'react';
import { Meta2d } from '@meta2d/core';
import { my_compoent, my_compoent_Anchors } from '../utils/draw';
import { only_text, only_text_Anchors } from '../utils/draw';
 
  // 4. 开始使用
  const pen = {
    name: 'my_compoent',
    text: 'PIM',
    x: 100,
    y: 100,
    width: 140,
    height: 110,
    fromArrow: "triangleSolid",
  };

  const pen_text = {
    name: 'only_text',
    text: 'test',
    x: 100,
    y: 200,
    width: 0,
    height: 0,
  }

  const child_pen = {
    name: 'only_text',
    text: 'interface test',
    x: 100,
    y: 100,
    width: 100,
    height: 0,
  }
// const Meta2dContainer = (props) => {
const Meta2dContainer = () => {
  const [test_list, set_test_list] = useState('23')
  useEffect(() => {
    window.meta2d = new Meta2d('meta2d');
    window.meta2d.register({ my_compoent });
    window.meta2d.register({ only_text });
    window.meta2d.registerAnchors({ my_compoent: my_compoent_Anchors });
    window.meta2d.registerAnchors({ only_text: only_text_Anchors });
    // window.meta2d.addPen(child_pen);
    console.log('here', pen);
    window.meta2d.addPen(pen);
    const text_width = 200;
    const text_height = 14;
    window.meta2d.pushChildren(pen, 
      pen.anchors.map((anchor) => {
        return (
        {
          name: 'only_text',
          text: `interface`,
          // x: 100 + pen.width * pen.anchors[0].x - text_width/2,
          x: 100 + pen.width * anchor.x - text_width/2,
          // y: 100 + pen.height * pen.anchors[0].y - text_height,
          y: 100 + pen.height * anchor.y - text_height * (anchor.x === 0.5 ? 1 : 0),
          width: text_width,
          height: 0,
        })
      }) // pens.children
    );
    console.log('here', pen);
    // window.meta2d.addPen(pen_text);
    window.meta2d.inactive();
  }, []);

  var pens;
  return (
    <div className='main' >
      <div>
        <button
          onClick={() => meta2d.fitView()} >
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
            console.log('child pen', child_pen);
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


