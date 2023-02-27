/*
 * @Description:
 * 左侧区域，矩形、圆形...
 */
import React, { useCallback } from 'react';
import { icons } from '../utils/data';


// 
import { Input } from 'antd';


// antd
import { Collapse } from 'antd';

const { Panel } = Collapse;

const text = ` 待定 `;

const Left_aside = () => {
  const onChange = (key) => { console.log(key); };
  const onDragStart = useCallback((e, data) => {
    e.dataTransfer.setData('Meta2d', JSON.stringify(data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const search_items = event.target.elements.search_items.value;

    alert(search_items);
  }

  return (
    <div className="left_aside" >
      <form onSubmit={handleSubmit}>
        <div className='search-bar_right'>
          {/* <label htmlFor="text">搜索</label> */}
          <Input id='search_items' placeholder="搜索组件..." />
          <button type="submit" class='button-68' role='button'>search</button>
        </div>
      </form>

      <Collapse defaultActiveKey={['1', '2', '3']} onChange={onChange} className='collapse-mine'>
        <Panel header="硬件模型库" key="1">
          <div class="grid-container">
            { icons.map((icon) => {
              const { key, title, data } = icon;
              return (
                <div key = { key } >
                  <i
                    draggable
                    className = { `grid-item item iconfont icon-${ key }` }
                    title = { title }
                    onDragStart = { (e) => onDragStart(e, data) }
                  ></i>
                </div>
              );
            }) }
            <div class="grid-item item3">3</div>  
            <div class="grid-item item4">4</div>
            <div class="grid-item item5">5</div>
            <div class="grid-item item5">5</div>
            <div class="grid-item item">5</div>
            <div class="grid-item item">6</div>
            <div class="grid-item item">6</div>
            <div class="grid-item item">6</div>
            <div class="grid-item item">6</div>
            <div class="grid-item item">7</div>
            <div class="grid-item item">7</div>
          </div>
        </Panel>
        <Panel header="接口模型库" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="组件模型库" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>

      <div className='source-name'>
        硬件模型库
        <div class="grid-container">

          { icons.map((icon) => {
            const { key, title, data } = icon;
            return (
              <div
                key = { key }
              >
                <i
                  draggable
                  className = { `grid-item item iconfont icon-${ key }` }
                  title = { title }
                  onDragStart = { (e) => onDragStart(e, data) }
                ></i>
              </div>
            );
          }) }
          <div class="grid-item item3">3</div>  
          <div class="grid-item item4">4</div>
          <div class="grid-item item5">5</div>
          <div class="grid-item item5">5</div>
          <div class="grid-item item">5</div>
          <div class="grid-item item">6</div>
          <div class="grid-item item">6</div>
          <div class="grid-item item">6</div>
          <div class="grid-item item">6</div>
          <div class="grid-item item">7</div>
          <div class="grid-item item">7</div>
        </div>
      </div>
      <div className='source-name'>
        接口模型库
        <div class="grid-container">
          <div class="grid-item item1">1</div>
          <div class="grid-item item2">2</div>
          <div class="grid-item item3">3</div>  
          <div class="grid-item item4">4</div>
          <div class="grid-item item5">5</div>
          <div class="grid-item item5">5</div>
          <div class="grid-item item">5</div>
          <div class="grid-item item">6</div>
          <div class="grid-item item">6</div>
          <div class="grid-item item">6</div>
          <div class="grid-item item">6</div>
          <div class="grid-item item">7</div>
          <div class="grid-item item">7</div>
        </div>
      </div>
      <div className='source-name'>
        组件模型库
        <div class="grid-container">
          

          { icons.map((icon) => {
            const { key, title, data } = icon;
            return (
              <div
                key = { key }
              >
                <i
                  draggable
                  className = { `grid-item item iconfont icon-${ key }` }
                  title = { title }
                  onDragStart = { (e) => onDragStart(e, data) }
                ></i>
              </div>
            );
          }) }

          <div class="grid-item item3">7</div>
        </div>
      </div>
      <div className="icon-list" >
        { icons.map((icon) => {
          const { key, title, data } = icon;
          return (
            <div
              key = { key }
            >
              <i
                draggable
                className = { `iconfont icon-${ key }` }
                title = { title }
                onDragStart = { (e) => onDragStart(e, data) }
              ></i>
            </div>
          );
        }) }
      </div>

      <div className="icon-list" >
        { icons.map((icon) => {
          const { key, title, data } = icon;
          return (
            <div
              key = { key }
            >
              <i
                draggable
                className = { `iconfont icon-${ key }` }
                title = { title }
                onDragStart = { (e) => onDragStart(e, data) }
              ></i>
            </div>
          );
        }) }
      </div>



      <div className="link" >
        <a href = "http://2ds.le5le.com/">去官网</a>
      </div>
    </div>

  );
};

export default Left_aside;
