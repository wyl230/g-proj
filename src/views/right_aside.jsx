/*
 * @Description:
 * 左侧区域，矩形、圆形...
 */
import React, { useCallback, useEffect } from 'react';
import { icons, interfaces } from '../utils/data';
import { hardware_properties } from '../utils/data';
import { component_properties } from '../utils/data';
import { Button, Modal, Popover } from 'antd';
import { Avatar, List, Skeleton } from 'antd';
import {useState } from 'react';
import { Col, Row } from 'antd';
// import Animate from 'rc-animate';
import QueueAnim from 'rc-queue-anim';

// use imgs
// import logo from "../assets/images/hya.png"
// <img src={logo} alt="" />



// antd
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, theme, Input } from 'antd';
const { Search } = Input;

const { Panel } = Collapse;

const text = `待定 `;

import { Layout, } from "antd";
const { Sider} = Layout;



const Right_aside = (props) => {
  // panel
  const [back, setBack] = useState(true);
  // useEffect(() => {
  //   set
  // }, [show]);
  useEffect(() => {
    setShow(false);
    // setShow(true);
    setTimeout(() => {
      setShow(true);
    }, 100)
    
  }, [props]);

  const { token } = theme.useToken();

  const panelStyle = {
    marginBottom: 4,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: 'none',
  };
  // panel end

  const handleSubmit = (event) => {
    event.preventDefault();

    const search_items = event.target.elements.search_items.value;

    alert(search_items);
  }

  const onSearch = () => {};
  const [collapsed, setCollapsed] = useState(false);


  const [show, setShow] = useState(true);
  const onClick = () => { setShow(!show); }
  const item = [
    {
      name: '名称',
      description: '描述...'
    }
  ];
  return (

    // <Sider  className="right_aside">

    <Sider theme={props.global_theme} className='right_aside' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>



      <div className="queue-demo">
          <Button type="primary" onClick={onClick}>Switch</Button>
        <QueueAnim className="demo-content">
          {show ? [
            <div className="demo-thead" key="a">
              {/* 234 */}
            </div>,
            <div className="demo-tbody" key="b">
              {/* 2424 */}
            </div>
          ] : null}
        </QueueAnim>
      </div>


        <QueueAnim className="demo-content">
        {  show ? 
        [<div key='23'>
    <List
      className="property-list"
      // loading={initLoading}
      itemLayout="horizontal"
      // loadMore={loadMore}
      // dataSource={list}
      dataSource={item}
      renderItem={(item) => (
        <List.Item>
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              // avatar={<Avatar src={item.picture.large} />}
              title={<a href="https://ant.design">{item.name}</a>}
              description={item.description}
            />
            {/* <div>content</div> */}
          </Skeleton>
        </List.Item>
      )}
    /> 
    </div>, 
  ]
     : null}
</QueueAnim>

    {/* <div className="right_aside" > */}


      <form onSubmit={handleSubmit}>
        <div className='search-bar_right'>
          <Search placeholder="搜索组件..." onSearch={onSearch} enterButton />
        </div>
      </form>

      <Collapse 
        bordered={false}
        defaultActiveKey={['1']}
        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
        style={{ background: token.colorBgContainer }}
      >


        <Panel header="硬件模型属性展示" key="1" style={panelStyle}>


        <QueueAnim className="demo-content">
          {show ? [
          <p key='test'> 测试属性: {props.value} </p> , 
          <hr />,
          <p key='testob'> key: {props.current_object} </p>, 
          <hr /> , 
            
              props.current_object_properties.map((item) => {
              return (
                <>
                  <p key='234'>{item}</p>
                  <hr />
                </>
              )
            })
          ,
          <Input
            addonBefore="硬件功能"
            id='1' placeholder="输入..." />,
          <Input 
            addonBefore="硬件性能"
            id='2' placeholder="输入..." />,
          <hr />,

            hardware_properties.map((property) => {
              return (
                <>
                  <p key={property}>{property}： ...</p> 
                  <hr />
                </>
              )
            })
          ,
          <p key='text'>{text}</p >
         ] : null}
        </QueueAnim>

        </Panel>
        <Panel header="组件模型属性展示" key="2" style={panelStyle}>
          {
            component_properties.map((property) => {
              return (
                <>
                  <p>{property}： ...</p> 
                  <hr />
                </>
              )
            })
          }
          <p>{text}</p >
        </Panel>
        <Panel header="模型属性展示 3" key="3" style={panelStyle}>
          <p>{text}</p>
        </Panel>
      </Collapse>


      {/* <div className="link" >
        <a href = "http://2ds.le5le.com/">帮助</a>
      </div> */}
    </Sider> 
  );
};

export default Right_aside;



