/*
 * @Description:
 * 左侧区域，矩形、圆形...
 */
import React, { useCallback } from 'react';
import { icons } from '../utils/data';

const Icons = () => {
  const onDragStart = useCallback((e, data) => {
    e.dataTransfer.setData('Meta2d', JSON.stringify(data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const search_items = event.target.elements.search_items.value;

    alert(search_items);
  }

  return (
    <div>

      <div className="left_aside" >
        <form onSubmit={handleSubmit}>
          <div className='search-bar_right'>
            {/* <label htmlFor="text">搜索</label> */}
            <input id="search_items" type="text" />
            <button type="submit" class='button-68' role='button'>search</button>
          </div>
        </form>

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

      <div className="right_aside" >

        <form onSubmit={handleSubmit}>
          <div className='search-bar_right'>
            <input id="search_items" type="text" />
            <button type="submit" class='button-68' role='button'>search</button>

          </div>
        </form>


        <div className='source-name'>
          模型属性展示
          <ul className='property'> 属性1：...  </ul>
          <ul className='property'> 属性2：...  </ul>
          <ul className='property'> 属性3：...  </ul>
          <ul className='property'> 属性4：...  </ul>
          <ul className='property'> 属性5：...  </ul>
          <ul className='property'> 属性6：...  </ul>
        </div>
        <hr class="hr-twill-colorful"/>


        <div className='source-name'>
          模型属性展示2
          <ul className='property'> 属性1：...  </ul>
          <ul className='property'> 属性2：...  </ul>
          <ul className='property'> 属性3：...  </ul>
          <ul className='property'> 属性4：...  </ul>
          <ul className='property'> 属性5：...  </ul>
          <ul className='property'> 属性6：...  </ul>
        </div>
        <hr class="hr-twill-colorful"/>


        <div className='source-name'>
          模型属性展示3
          <ul className='property'> 属性1：...  </ul>
          <ul className='property'> 属性2：...  </ul>
          <ul className='property'> 属性3：...  </ul>
          <ul className='property'> 属性4：...  </ul>
          <ul className='property'> 属性5：...  </ul>
          <ul className='property'> 属性6：...  </ul>
        </div>
        <hr class="hr-twill-colorful"/>

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
    </div>
  );
};

export default Icons;
