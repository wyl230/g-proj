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
import { Input } from 'antd';
import MyDrawer from './drawer';
const { Search } = Input;
import { Collapse } from 'antd';
const { Panel } = Collapse;
import { Col, Row } from 'antd';

const text = ` 待定 `;

import { Layout, } from "antd";
const { Sider} = Layout;
// class Left_aside extends React.Component {
const Left_aside = (props) => {
  const onChange = (key) => { console.log(key); };
  const onDragStart = useCallback((e, data) => {
    e.dataTransfer.setData('Meta2d', JSON.stringify(data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const search_items = event.target.elements.search_items.value;

    alert(search_items);
  }


  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    alert('功能待完善');
  };

  const handleCancel = () => {
    setIsModalOpen(false);
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
    fetch('http://162.105.85.214:8000/test_interface', requestOptions)
        .then(response => response.json())
        .then(data => {
          // console.log('get: ', data.data_mine);
          const max = 10000;
          const min = 0;
          const icon = data.data_mine;
          icon.key = Math.floor(Math.random() * (max - min + 1)) + min;
          // icon.info = [
          //   '型号 : kk',
          //   '功耗 : 10w' 
          // ]
          // console.log('icon', icon);
          const newIcons = [...MyIcons, data.data_mine];
          setMyIcons(newIcons);
          console.log(MyIcons);
        });
    alert('已发送post请求');
  }
  
  const onSearch = () => {};
  return (
    // <Sider theme='light' className="left_aside">
    <Sider theme={props.global_theme} className="left_aside">
    {/* <div className="left_aside" > */}
      <p>
        <Button 
          // onClick={() => props.onClick('切换')}
          onClick={addIcon}
          // onFocus={() => props.onClick('focus')}
          onMouseOver={() => props.onClick('添加')}
        >
          {props.value}
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

      <Collapse defaultActiveKey={['1']} onChange={onChange} className='collapse-mine'>
        <Panel header="硬件模型库" key="1">
          <Row align="center"
          justify={'space-evenly'}
            gutter={[8, 8]}
          >
            { MyIcons.map((icon) => {
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
              const [drawer_open, setDrawerOpen] = useState(false);
              const strlengths = () => {
                    () => {
                      str = title;
                      title.length * 3
                      let strlength = 0;
                        for (let i=0; i < str.length; ++i)
                        {
                          if (isChinese(str.charAt(i)) == true)
                            strlength = strlength + 2; //中文计算为2个字符
                          else
                            strlength = strlength + 1;
                        }
                      console.log(strlength);
                      return 6;
                    }
              }
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
                    >
                      {/* <Button>click</Button> */}
                      <MyDrawer
                        draggable
                        title = { (
                          // title[0]
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
                        onDragStart = { (e) => onDragStart(e, data) }
                      >{title}
                      </MyDrawer>
                    </Col>
                  </Popover>
              );
            }) }
                </Row>
          <div className="grid-container">
            { MyIcons.map((icon) => {
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
              // console.log('title',title);
              // console.log('info', info);
              // const handleClick = () => {
              //   setDrawerOpen(true);
              // }
              // const handle_drawer_onClose = () => {
              //   setDrawerOpen(false);
              // }
              const [drawer_open, setDrawerOpen] = useState(false);
              return (
                // <div key = { key } 


                <div className='single_item' key = { key } 
                  draggable
                  onDragStart = { (e) => onDragStart(e, data) }
                  // onClick = {() => handleClick()}
                  onMouseOver = {() => props.update_current_object(key, title, data, info)}
                >
                  {/* <i
                    draggable
                    className = { `grid-item item iconfont icon-${ key }` }
                    title = { title }
                    onDragStart = { (e) => onDragStart(e, data) }
                  >{title}</i> */}

                  <MyDrawer
                    // title={title}
                    draggable
                    // className = { `grid-item item iconfont icon-${ key }` }
                    // drawer_onClose = {() => handle_drawer_onClose()}
                    // open={drawer_open}
                    title = { title }
                    onDragStart = { (e) => onDragStart(e, data) }
                  >{title}
                  </MyDrawer>
                </div>
              );
            }) }

            <div className="grid-item item3">CPU</div>  
            <div className="grid-item item4">DSP</div>
            <div className="grid-item item5">FPGA</div>
            <div className="grid-item item5">微处理器</div>
            {/* <div className="grid-item item">SOC</div>
            <div className="grid-item item">主控模块</div>
            <div className="grid-item item">交换模块</div>
            <div className="grid-item item"> 信息处理模块 </div>
            <div className="grid-item item">信号处理模块</div>
            <div className="grid-item item">中频处理模块</div>
            <div className="grid-item item">时钟频率模块</div> */}
{/* 
  <List
    grid={{ gutter: 1, column: 2 }}
    dataSource={MyIcons}
    renderItem={
        (icon) => {
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
      <List.Item>
              <Button
              size={'small'}
              // type={'text'}
                wrap={true}
                align="center"
                draggable
                title = { title }
                onDragStart = { (e) => onDragStart(e, data) }
              >
               {title}
              </Button>
      </List.Item>
          );
        }}
  /> */}


          </div>
          <div>
            {/* <button type="submit" class='button-3 create' role='button'>新建模块</button> */}
            
            <Button type="primary" onClick={showModal}>
              新建模块
            </Button>
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

      {/* <div className="link" >
        <a href = "http://2ds.le5le.com/">一个链接</a>
      </div> */}
    </Sider>   

  );
};

export default Left_aside;
