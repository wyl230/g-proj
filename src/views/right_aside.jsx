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
    setTimeout(() => { setShow(true); }, 100);
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

  const show_properties = () => {
    return ([
    <p key='test'> 测试属性: {props.value} </p> , 
    <hr key='1hr'/>,
    <p key='testob'> key: {props.current_object} </p>, 
    <hr key='2hr'/> , 
    <div key='whole'>
      {props.current_object_properties.map((item) => {
        return (
          <div key={item}>
            <p key={item}>{item}</p>
            <hr />
          </div>
        )
      })}
    </div>
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
    <p key='text'>{text}</p > // only show once
  ])};

  const show_list = () => { 
    return ([
      <div key='23'>
        <List
          className="property-list"
          // loading={initLoading}
          itemLayout="horizontal"
          // loadMore={loadMore}
          // dataSource={list}
          style={{ 
            'padding-left': '8%'
          }}
          dataSource={item}
          renderItem={(item) => (
            <List.Item>
              <Skeleton avatar title={false} loading={item.loading} active>
                <List.Item.Meta
                  title={<a href="https://ant.design">{item.name}</a>}
                  description={item.description}
                />
              </Skeleton>
            </List.Item>
          )}
          /> 
      </div>, 
    ])
  }
  return (
    <Sider theme={props.global_theme} 
      // style={{
      //   height: '10%',
      //   overflow: 'auto',
      // }}
      // width={200} 
      style={{ 
          overflow: 'auto',
          height: '89.6vh',
          // height: '100vh',
          // position: 'fixed',
          left: 0,
      }}
      className='right_aside' 
      // collapsible 
      collapsed={collapsed} onCollapse={(value) => setCollapsed(value) }
    >

    <div className='try_middle'>
      <Button type="primary" onClick={onClick}
      >Switch</Button>
    </div>

      <QueueAnim className="demo-content">
        { show ?  show_list() : null }
      </QueueAnim>

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
          <QueueAnim 
            duration={100} interval={10}
            forcedReplay={true}
            className="demo-content"
          >
            {show ? show_properties() : null}
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
    </Sider> 
  );
};

export default Right_aside;



