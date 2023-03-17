/*
 * @Description: 
 */

import { Divider, Menu, Switch, Breadcrumb,  theme, Layout, Slider, } from 'antd';
import { Button, Dropdown , Form, Input} from 'antd';
import React, { useEffect, useState, useRef } from 'react';
import { Meta2d, randomId } from '@meta2d/core';
import { my_compoent, my_compoent_Anchors } from '../utils/draw';
import { only_text, only_text_Anchors } from '../utils/draw';
import { interface_part, interface_part_Anchors } from '../utils/draw';

import MyDrawer from './drawer';
import Sider from 'antd/es/layout/Sider';
import {my_options} from './my_options';
const { Content } = Layout;

  // 4. 开始使用
  const pen = {
    name: 'my_compoent',
    text: 'PIM',
    x: 100,
    y: 150,
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

  const interface_part_eg = {
    name: 'interface_part',
    text: 'interface test',
    x: 100,
    y: 100,
    width: 10,
    height: 10,
  }
// const Meta2dContainer = (props) => {



const Meta2dContainer = (props) => {
  const [test_list, set_test_list] = useState('23')
  const [test_info, setTest_info] = useState('设置')
  // const meta2d = new Meta2d('meta2d11');
  const [first, set_first] = useState(true)
  const [stay, setStay] = useState(true)
  const [pos_x, setPosX] = useState(0.1)
  const [test, setTest] = useState(0.1)
  const [pos_y, setPosY] = useState(0.1)
  const items_navs = [
    {
      key:'1',
      label: 'test'
    }
  ];

  const pos_x_Ref = useRef(0); // 设置初值
  pos_x_Ref.current = pos_x;
  const pos_y_Ref = useRef(0); // 设置初值
  pos_y_Ref.current = pos_y;

  // 右键菜单


  const showContextMenu = (e, client_rect) => { 
    console.log('ok', e, client_rect);

    const onFinish = (res) => {
      setPosX(res.pos_x);
      setPosY(res.pos_y);
      console.log('res',res, pos_x_Ref.current, pos_y_Ref.current );

      const new_interface = {
        name: 'interface_part',
        text: 'interface test',
        width: 10,
        height: 15,
      }
      new_interface.text = res.name;
      new_interface.width = res.name.length * 9;
      new_interface.x = pen.x + pen.width * pos_x_Ref.current;
      new_interface.y = pen.y + pen.height * pos_y_Ref.current;
      console.log('here1', new_interface,pen);
      meta2d.pushChildren(pen, [new_interface]);
      console.log('here2', new_interface,pen);
      // window.meta2d.addPen(pen_text);
      meta2d.render();
      meta2d.inactive();
    }
    const onFinishFailed = () => {}
    const lists = (
      <>
        {
          meta2d.store.active.map(
            (component) => (
              <p key={component.id}>
                {component.name}
              </p>
            )
          )
        }
        <p> 接口：</p> <hr />
        {
          meta2d.store.active.map(
            (component) => (

              component.children.map(
                child => {
                  console.log('child', child)
                  const text = meta2d.find(child)[0].text
                  return (
                    <p key={child}>
                      {text}
                    </p>
                  )
                }
              )
            )
          )
        }

        <Form id='myForm'
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="接口"
            name="name"
            rules={[{ required: true, message: '请输入完整' }]}
          >
            <Input id='test' placeholder="输入接口名字" />
          </Form.Item>
          <Form.Item
            label="x坐标"
            name="pos_x"
            rules={[{ required: true, message: '请输入完整' }]}
          >
            <Input id='x' placeholder="please" />
          </Form.Item>
          <Form.Item
            label="y坐标"
            name="pos_y"
            rules={[{ required: true, message: '请输入完整' }]}
          >
            <Input id='y' placeholder="please" />
          </Form.Item>
        </Form>

        <Button form="myForm" key="submit" htmlType="submit">
            Submit
        </Button>
      </>
    )
    console.log('lists', lists)
    props.set_info(meta2d.store.active == 0 ? '请右键选中要查看的模块' : lists);
    // return (
      //     <MyDrawer
      //       // draggable
      //       title = { (
      //         'asdf'
      //       ) }
      //       // onDragStart = { (e) => onDragStart(e, data) }
      //     >{234}
      //     </MyDrawer>
      // <Dropdown menu={{items: items_navs}} key='234'>
      //   <div>{234}</div>
      // </Dropdown>
    // );
  };



  useEffect(() => {
    if(stay == false) {
      console.log(first, 'dont gen meta2d now');
      return () => set_first('qwer');
    } else {
      console.log(first, '??');
      const meta2d = new Meta2d('meta2d11');

      let my_option = meta2d.getOptions();
      my_option.anchorRadius = 10;
      meta2d.setOptions(my_option);
      meta2d.canvas.resize();

      const hideContextMenu = () => {};

      meta2d.on('contextmenu', showContextMenu);
      // 点击画布
      meta2d.on('click', hideContextMenu);

      console.log('use effect')
      meta2d.resize();
      // window.meta2d = new Meta2d('meta2d11'); // 创建了一个id为此的<>
      // meta2d.register({ my_compoent }); // use path2d
      meta2d.registerCanvasDraw({ my_compoent }); // use canvas draw
      meta2d.register({ only_text });
      meta2d.register({ interface_part });
      meta2d.registerAnchors({ interface_part: interface_part_Anchors });
      meta2d.registerAnchors({ my_compoent: my_compoent_Anchors });
      meta2d.registerAnchors({ only_text: only_text_Anchors });
      // window.meta2d.addPen(child_pen);
      console.log('here', pen);
      meta2d.addPen(pen);
      // deep clone
      const pen_test = {
        name: 'my_compoent',
        text: 'PIM',
        x: 100,
        y: 100,
        width: 140,
        height: 110,
        fromArrow: "triangleSolid",
      };
      const str = JSON.stringify(pen_test);
      console.log('pen3', str);
      const pen2 = JSON.parse(JSON.stringify(pen_test));
      pen2.x = 300;
      pen2.y = 300;
      meta2d.addPen(pen2);
      meta2d.setLayer(pen2, 10);
      console.log('pen', pen);
      console.log('pen2', pen2);
      console.log(meta2d.store.pens);
      
      // deep clone end
      const text_width = 200;
      const text_height = 14;
      meta2d.pushChildren(pen, 
        pen.anchors.map((anchor) => {
          return (
          {
            name: 'only_text',
            text: `interface`,
            // x: 100 + pen.width * pen.anchors[0].x - text_width/2,
            x: pen.x + pen.width * anchor.x - text_width/2,
            y: pen.y + pen.height * anchor.y - text_height * (anchor.x === 0.5 ? 1 : 0),
            width: text_width,
            height: 0,
          })
        }) // pens.children
      );


      console.log('here wh', interface_part_eg,pen);
      interface_part_eg.x = pen.x + pen.width * 0.7;
      console.log('here wh', interface_part_eg,pen);
      interface_part_eg.y = pen.y + pen.height * 0.5;
      console.log('here wh', interface_part_eg,pen);
      meta2d.pushChildren(pen, [interface_part_eg]);
      // console.log('here', pen);
      console.log('here wh', interface_part_eg,pen);
      // window.meta2d.addPen(pen_text);
      meta2d.inactive();

      return () => {
        console.log('un effect') ;
      }
    }
  }, [stay]);

  var pens;
  // useEffect(() => {
  //   const new_interface = {
  //     name: 'interface_part',
  //     text: 'interface test',
  //     width: 10,
  //     height: 10,
  //   }
  //     new_interface.x = pen.x + pen.width * pos_x_Ref.current;
  //     new_interface.y = pen.y + pen.height * pos_y_Ref.current;
  //     const max=11110;
  //     const min=0;
  //     new_interface.id = Math.floor(Math.random() * (max - min + 1)) + min;

  //     console.log('here1', new_interface,pen);
  //     meta2d.pushChildren(pen, [new_interface]);
  //     console.log('here2', new_interface,pen);
  //     // window.meta2d.addPen(pen_text);
  //     meta2d.render();
  //     meta2d.inactive();

  // }, [pos_x, pos_y]);

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
            my_options.anchorRadius = 10;
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
          'width': '72vw'
          // 'width': `${window.innerWidth - 240 - 64}px`,
          // 'height': `${window.innerHeight - 300}px`,
        }}
      >
      </div>
    </Content>
</>
  );
};

export default Meta2dContainer;


