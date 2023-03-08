/*
 * @Description: 
 */

import { Divider, Menu, Switch, Breadcrumb,  theme, Layout, Slider, } from 'antd';
import React, { useEffect, useState } from 'react';
import { Meta2d } from '@meta2d/core';
import { my_compoent, my_compoent_Anchors } from '../utils/draw';
import { only_text, only_text_Anchors } from '../utils/draw';

import Sider from 'antd/es/layout/Sider';
const { Content } = Layout;

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
const Meta2dContainer = (props) => {
  const [test_list, set_test_list] = useState('23')
  const [test_info, setTest_info] = useState('设置')
  // const meta2d = new Meta2d('meta2d11');
  const [first, set_first] = useState(true)
  const [stay, setStay] = useState(true)
  // const [meta2d, SetMeta2d] = useState(null);
  useEffect(() => {
    if(stay == false) {
      console.log(first, 'dont gen meta2d now');
      return () => set_first('qwer');
    } else {
      console.log(first, '??');
    const meta2d = new Meta2d('meta2d11');
    console.log('use effect')
    meta2d.resize();
    // window.meta2d = new Meta2d('meta2d11'); // 创建了一个id为此的<>
    // meta2d.register({ my_compoent }); // use path2d
    meta2d.registerCanvasDraw({ my_compoent }); // use canvas draw
    meta2d.register({ only_text });
    meta2d.registerAnchors({ my_compoent: my_compoent_Anchors });
    meta2d.registerAnchors({ only_text: only_text_Anchors });
    // window.meta2d.addPen(child_pen);
    console.log('here', pen);
    meta2d.addPen(pen);
    const text_width = 200;
    const text_height = 14;
    meta2d.pushChildren(pen, 
      pen.anchors.map((anchor) => {
        return (
        {
          name: 'only_text',
          text: `interface`,
          // x: 100 + pen.width * pen.anchors[0].x - text_width/2,
          x: 100 + pen.width * anchor.x - text_width/2,
          y: 100 + pen.height * anchor.y - text_height * (anchor.x === 0.5 ? 1 : 0),
          width: text_width,
          height: 0,
        })
      }) // pens.children
    );
    console.log('here', pen);
    // window.meta2d.addPen(pen_text);
    meta2d.inactive();

    return () => {
      console.log('un effect') ;
    }
    }
  }, [stay]);

  var pens;

  const item_navs = [
    {
      label:
      '工具栏',
      key: 'title',
    }, {
      label: 
        <p onClick={() => meta2d.fitView()} 
         className={'vertical-text'}
        >
          自适应界面
        </p> , 
        // <button onClick={() => meta2d.fitView()} >
        //   自适应界面
        // </button> , 
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
            const my_options = {
                "fontFamily": "\"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial",
                "fontSize": 12,
                "lineHeight": 1.5,
                "textAlign": "center",
                "textBaseline": "middle",
                "color": "#222222",
                "activeColor": "#278df8",
                "hoverColor": "rgba(39,141,248,0.5)",
                "anchorColor": "#278DF8",
                "hoverAnchorColor": "#FF4101",
                "anchorRadius": 5,
                "anchorBackground": "#fff",
                "dockColor": "rgba(39,141,248,1)",
                "dockPenColor": "#1890FF",
                "dragColor": "#1890ff",
                "rotateCursor": "rotate.cur",
                "hoverCursor": "pointer",
                "minScale": 0.2,
                "maxScale": 5,
                "keydown": 0,
                'grid': false,
                'gridSize': 20,
                "gridColor": "#e2e2e2",
                "ruleColor": "#888888",
                "drawingLineName": "polyline",
                "interval": 30,
                "animateInterval": 30,
                "autoPolyline": true,
                "autoAnchor": true,
                "animateColor": "#ff4d4f",
                "ruleLineColor": "#FF4101",
                "defaultAnchors": [
                    {
                        "x": 0.5,
                        "y": 0
                    },
                    {
                        "x": 1,
                        "y": 0.5
                    },
                    {
                        "x": 0.5,
                        "y": 1
                    },
                    {
                        "x": 0,
                        "y": 0.5
                    }
                ],
                "measureTextWidth": true,
                "mouseRightActive": true,
                "disableClipboard": false,
                "disableRotate": true,
                "moveConnectedLine": false,
                "drawingLineLength": 0
            };
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
    }
  ]

  const [collapsed, setCollapsed] = useState(true);
  return (
    // <div className='main' >
    <>
    <Sider width={150} 
      theme={props.global_theme}
      collapsible 
      collapsed={collapsed} 
      onCollapse={(value) => setCollapsed(value) }
      onMouseEnter={() => setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)}
      // onMouseOut=
      style={{ 
          // overflow: 'auto',
          // height: '89.6vh',
          'height': 'calc(100vh - 64px)',
          // position: 'fixed',
          left: 0,
      }}
    >
    <Menu theme={'light'} 
    // mode="inline" 
    // mode="horizontal" 
    defaultSelectedKeys={['主界面']} items={item_navs} selectable={false}
    
    />
  </Sider>
    <Content 
      onMouseOver={() => setStay(true)}
    >
      {/* <div className="meta2d" id="meta2d"></div> */}
      {/* <Content id='meta2d11'>

      </Content> */}
      <div id="meta2d11"
        style={{
          // 'width': '920px',
          'height': 'calc(100vh - 64px)',
          // 'height': '89.6vh',
          'width': `${window.innerWidth - 240 - 64}px`,
          // 'height': `${window.innerHeight - 300}px`,
        }}
      >
      </div>
    </Content>
</>
  );
};

export default Meta2dContainer;


