/*
 * @Description: 
 */

import React, { useEffect } from 'react';
import { Meta2d } from '@meta2d/core';
import { my_compoent, my_compoent_Anchors } from '../utils/draw';

const Meta2dContainer = () => {
  useEffect(() => {
    window.meta2d = new Meta2d('meta2d');
    // window.meta2d.resize(200, 200); 调节整个画布的大小

    // 1. 编写图形绘画函数
    // 其中，calculative.worldRect为canvas的世界坐标。更多信息，参考 “架构” - “概要” 和 Pen 相关文档
    // 形参 ctx 仅仅在 downloadSvg 时有值
    // 2. 如果需要，编写锚点函数。通常，可以使用默认锚点，然后通过快捷键动态添加锚点
    // 注意，锚点左边为相对宽高的百分比小数（0-1之间的小数）

    // 3. 注册图形
    // 参数 {key: fn}。key为图形唯一name，否则覆盖原来图形，fn为相关函数
    meta2d.register({ my_compoent });
    meta2d.registerAnchors({ my_compoent: my_compoent_Anchors });

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

  return (
    <div className='main' >
      <div>
        <button
          onClick={() => meta2d.fitView()} >
          自适应界面
        </button>

        <button
          onClick={() => meta2d.centerView()} >
          居中显示
        </button>

        <button
          onClick={() => meta2d.toggleAnchorMode()} >
            添加锚点
        </button>

        <button
          onClick={() => meta2d.downloadPng()} >
          生成 png 图像
        </button>

      </div>
      <div className="meta2d" id="meta2d"></div>
    </div>
  );
};

export default Meta2dContainer;


