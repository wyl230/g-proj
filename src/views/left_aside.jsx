/*
 * @Description:
 * 左侧区域，矩形、圆形...
 */
import React, { useCallback, useState } from 'react';
import { icons } from '../utils/data';
import { hardwares } from '../utils/data';

import logo from "../assets/images/hya.png"
import { Button, Modal } from 'antd';
import { Input } from 'antd';
import { Collapse } from 'antd';
const { Panel } = Collapse;

const text = ` 待定 `;

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
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="left_aside" >
      <p>
        <Button 
          onClick={() => props.onClick('切换')}
          onFocus={() => props.onClick('focus')}
          onMouseOver={() => props.onClick('mouse over')}

        >
          {props.value}
        </Button>
      </p>
      <form onSubmit={handleSubmit}>
        <div className='search-bar_right'>
          {/* <label htmlFor="text">搜索</label> */}
          <Input id='search_items' placeholder="搜索组件..." />
          <button type="submit" class='button-68' role='button'>search</button>
        </div>
      </form>

      <Collapse defaultActiveKey={['1']} onChange={onChange} className='collapse-mine'>
        <Panel header="硬件模型库" key="1">
          <div class="grid-container">
            { icons.map((icon) => {
              const { key, title, data } = icon;
              return (
                <div class='single_item' key = { key } 
                  draggable
                  onDragStart = { (e) => onDragStart(e, data) }
                  // onClick = {() => alert(`key: ${key} title: ${title} data: ${data}`)} // 测试用，点击组件名字即可
                  onClick = {() => props.update_current_object(key, title, data)}
                  onMouseOver = {() => props.update_current_object(key, title, data)}
                >
                  <i
                    draggable
                    className = { `grid-item item iconfont icon-${ key }` }
                    title = { title }
                    onDragStart = { (e) => onDragStart(e, data) }
                  >{title}</i>
                </div>
              );
            }) }

            <div class="grid-item item3">CPU</div>  
            <div class="grid-item item4">DSP</div>
            <div class="grid-item item5">FPGA</div>
            <div class="grid-item item5">微处理器</div>
            <div class="grid-item item">SOC</div>
            <div class="grid-item item">主控模块</div>
            <div class="grid-item item">交换模块</div>
            <div class="grid-item item"> 信息处理模块 </div>
            <div class="grid-item item">信号处理模块</div>
            <div class="grid-item item">中频处理模块</div>
            <div class="grid-item item">时钟频率模块</div>
          </div>
          <div>
            {/* <button type="submit" class='button-3 create' role='button'>新建模块</button> */}
            
            <Button type="primary" onClick={showModal}>
              新建模块
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
              <div>
              <p>名称：</p>
              <Input id='test' placeholder="搜索组件..." />
              </div>
              <p>型号:
                <Input placeholder="..." />
              </p>

              <p>硬件功能：
                <Input placeholder="..." />
              </p>
              <p>硬件性能:
                <Input placeholder="..." />
              </p>

              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
          </div>
        </Panel>
        <Panel header="接口模型库" key="2">
          {
            hardwares.map((hardware) => {
              return (
                <>
                  <div class='grid-item item'>{hardware}</div>
                </>
              );

            })
          }
          <p>{text}</p>
          <img class='img_left' src={logo} alt="" /> 

          <div>
            <button type="submit" class='button-3 create' role='button'>+</button>
          </div>
        </Panel>
        <Panel header="组件模型库" key="3">
          <p>{text}</p>

          <div>
            <button type="submit" class='button-3 create' role='button'>+</button>
          </div>
        </Panel>
      </Collapse>

      <div className="link" >
        <a href = "http://2ds.le5le.com/">一个链接</a>
      </div>
    </div>

  );
};

export default Left_aside;
