/*
 * @Description:
 * 左侧区域，矩形、圆形...
 */
import React, { useCallback, useState } from 'react';
import { icons } from '../utils/data';
import { hardwares } from '../utils/data';
import { Card, List } from 'antd';
import logo from "../assets/images/hya.png"
import { Button, Modal, Popover } from 'antd';
import MyDrawer from './drawer';
const { Search } = Input;
import { Checkbox, Form, Input } from 'antd';
import { Collapse } from 'antd';
const { Panel } = Collapse;
import { Col, Row } from 'antd';

import { ConfigProvider } from 'antd';
import { theme } from 'antd';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const text = ` 待定 `;

import { Layout, } from "antd";
const { Sider} = Layout;
// class Left_aside extends React.Component {
const Left_aside = (props) => {
  const onChange = (key) => { console.log(key); };
  const onDragStart = useCallback((e, data) => {
    console.log(e); // this
    console.log(meta2d.store.data.pens);
    e.dataTransfer.setData('Meta2d', JSON.stringify(data)); // first argument is the class type of data
    console.log(meta2d.store.data.pens);
    // meta2d.store
  }, []);

  const onDragEnd = useCallback((e, data) => {
    console.log(e); // 这个时候的值才开始被放置图的处理
    // meta2d.store.data.pens[0].x = 200;
    console.log(meta2d.store.data.pens);
    
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const search_items = event.target.elements.search_items.value;
    alert(search_items);
  }


  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddressInputModalOpen, setIsAddressInputModalOpen] = useState(false);
  // const [address, setAddress] = useState('http://162.105.85.214:8000/test_interface');

  const showModal = () => {
    // console.log(meta2d.store.data.pens);
    setIsModalOpen(true);
  };

  const show_address_input_modal = () => {
    setIsAddressInputModalOpen(true);
  }

  const handleOk = () => {
    setIsModalOpen(false);
    alert('功能待完善');
  };

  const handle_input_adderss_Ok = () => {
    setIsAddressInputModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setIsAddressInputModalOpen(false);
  };

  const [MyIcons, setMyIcons] = useState(icons);
  const addIcon = () => {
    const data = window.meta2d.data();
    console.log(data);
    const json = JSON.stringify(data, undefined, 4);
    console.log(json);

    const requestOptions = {
        method: 'POST',
        headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
        },
        body: json
    };
    fetch(props.address.ip_address, requestOptions)
    // fetch('http://162.105.85.214:8000/test_interface', requestOptions)
        .then(response => response.json())
        .then(data => {
          // console.log('get: ', data.data_mine);
          console.log('get', data);
          const max = 10000;
          const min = 0;
          const icon = data;
          // const icon = data.data_mine;
          icon.key = Math.floor(Math.random() * (max - min + 1)) + min;
          // icon.info = [
          //   '型号 : kk',
          //   '功耗 : 10w' 
          // ]
          // console.log('icon', icon);
          const newIcons = [...MyIcons, data];
          // const newIcons = [...MyIcons, data.data_mine];
          setMyIcons(newIcons);
          console.log(MyIcons);
        });
    alert('已发送post请求');
  }
  
  const onSearch = () => {};
  const icon_rols = () => {
    return (
      MyIcons.map((icon) => {
      if(icon.info == null)
        icon.info = [
          '名称：pim',
          '型号： ...',
          '创建时间： ...',
          '版本号： ...',
          '文档附件： ...',
          '功耗： ...',
          '硬件功能： ...',
          '硬件性能： ...',
          '操作环境： ...',
        ];
      const { key, title, data, info } = icon;
      return (
          // <Col span={title.length * 3}  className='single_item'
          <Popover content={title} title='名称' trigger='hover' arrow={false}
          mouseEnterDelay={0.01}
          mouseLeaveDelay={0.01}
          >
            <Col span={8}  
              // className='single_item'
              key={key}
              draggable
              onDragStart = { (e) => onDragStart(e, data) }
              onMouseOver = {() => props.update_current_object(key, title, data, info)}
              // onDragOver = {(e) => onDragOver(e, data)}
              onDragEnd = {(e) => onDragEnd(e, data)}
            >
              <MyDrawer
                // draggable
                title = { (
                  (title.length > 4) ? 
                  <>
                  {title[0] + title[1]}
                  <br />   
                  {title[2] + title[3]}
                  </>
                  :
                  <>
                  {title[0] + title[1]}
                  <br />   
                  {title.length == 3 ? title[2] : '..' + ''}
                  </>
                ) }
                // onDragStart = { (e) => onDragStart(e, data) }
              >{title}
              </MyDrawer>
            </Col>
          </Popover>
      );
    }) 
    )
  };    

  const onFinish = (v) => {
    console.log(v);
    props.setAddress(v);
    handle_input_adderss_Ok();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <ConfigProvider
      theme={{
        // algorithm: theme.darkAlgorithm,
        token: {
          // colorPrimary: '#00b96b', // green
          // colorPrimary: '#1890ff', // blue
        },
      }}
    >
    <Sider theme={props.global_theme} 
    className="left_aside"
    style={{ 
        overflow: 'auto',
          // height: '89.6vh',
          height: 'calc(100vh - 64px)',
        // position: 'fixed',
        left: 0,
    }}
      // style={{
      //   height: '100%',
      //   overflow: 'auto',
      // }}
    >
      <ConfigProvider
        theme={{
          algorithm: props.global_theme == 'light' ? theme.defaultAlgorithm : theme.darkAlgorithm,
          token: {
            // colorPrimary: '#00b96b', // green
            // colorPrimary: '#1890ff', // blue
          },
        }}
      >
      <p 
       style={ {
        'padding-left': '20px',
        'padding-top': '5px'
      }}
      >
        <Button 
          // onClick={() => props.onClick('切换')}
          onClick={addIcon}
          // onFocus={() => props.onClick('focus')}
          // onMouseOver={() => props.onClick('添加')}
        >
          {props.value}
        </Button>
      </p>

      <p 
       style={ {
        'padding-left': '20px',
        'padding-top': '5px'
      }}
      >
        <Button onClick={() => { alert('remain'); }} >
          {'模块组件一览'}
        </Button>
      </p>

      <form onSubmit={handleSubmit}>
        <div className='search-bar_right'>
          {/* <label htmlFor="text">搜索</label> */}
          <Search placeholder="搜索组件..." onSearch={onSearch} enterButton />
          {/* <Input id='search_items' placeholder="搜索组件..." />
          <button type="submit" className='button-68' role='button'>search</button> */}
        </div>
      </form>

      <Collapse defaultActiveKey={['1']} onChange={onChange} className='collapse-mine'
      mouseEnterDelay={0.01}
      mouseLeaveDelay={0.01}
      >
        <Panel header="硬件模型库" key="1">
          <Row align="center"
          justify={'space-evenly'}
            gutter={[3, 3]}
          >
            {icon_rols()}
          </Row>
          <div className={'try_middle'}>
            
            <Row
              gutter={[30, 30]}
              justify="center" align="middle"
            >
            <Col span={24} >
              
              <div
                style={{
                  'text-align': 'center',
                }}
              >
                <Button type="primary" onClick={showModal}
                  style={{
                    'margin': '1px 10px'
                  }}
                >
                  新建模块
                </Button>

                <Button type="primary" onClick={show_address_input_modal}
                  style={{
                    'margin': '4px 10px'
                  }}
                >
                  输入服务器IP地址
                </Button>
              </div>
            </Col></Row>

            <Modal title="输入地址" open={isAddressInputModalOpen} onOk={handle_input_adderss_Ok} onCancel={handleCancel}
            footer={[
                    <Button form="myForm" key="submit" htmlType="submit">
                        Submit
                    </Button>
                    ]}
            >
              <div className='input-margin'>

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
                label="ip_address"
                name="ip_address"
                rules={[{ required: true, message: 'Please input your ip address!' }]}
              >
                <Input id='test' placeholder="示例:http://162.105.85.214:8000/test_interface" />
              </Form.Item>
          </Form>
              </div>
            </Modal>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
              <div className='input-margin'>
              <Input addonBefore="名称" id='test' placeholder="搜索组件..." />
              </div>
              <div className='input-margin'>
              <Input addonBefore="型号" placeholder="..." />
              </div>
              <div className='input-margin'>
              <Input addonBefore='硬件功能' placeholder="..." />
              </div>
              <div className='input-margin'>
              <Input addonBefore='硬件性能' placeholder="..." />
              </div>
              <div className='input-margin'>
              <p>Some contents...</p>
              </div>
              <div className='input-margin'>
              <p>Some contents...</p>
              </div>
            </Modal>
          </div>
        </Panel>
        <Panel header="接口模型库" key="2">
          {
            hardwares.map((hardware) => {
              return (
                <>
                  <div className='grid-item item'>{hardware}</div>
                </>
              );

            })
          }
          <p>{text}</p>
          <img className='img_left' src={logo} alt="" /> 

          <div>
            <button type="submit" className='button-3 create' role='button'>+</button>
          </div>
        </Panel>
        <Panel header="组件模型库" key="3">
          <p>{text}</p>

          <div>
            <button type="submit" className='button-3 create' role='button'>+</button>
          </div>
        </Panel>
      </Collapse>

      </ConfigProvider>
      {/* <div className="link" >
        <a href = "http://2ds.le5le.com/">一个链接</a>
      </div> */}
    </Sider>   
    </ConfigProvider>
  );
};

export default Left_aside;

