/*
 * @Description:
 * 左侧区域，矩形、圆形...
 */
import React, { useCallback } from 'react';
import { icons, interfaces } from '../utils/data';
import { hardware_properties } from '../utils/data';
import { component_properties } from '../utils/data';
// use imgs
// import logo from "../assets/images/hya.png"
// <img src={logo} alt="" />



// antd
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, theme, Input } from 'antd';

const { Panel } = Collapse;

const text = `待定 `;




const Right_aside = (props) => {
  // panel
  const { token } = theme.useToken();

  const panelStyle = {
    marginBottom: 4,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: 'none',
  };
  // panen end
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
    <div className="right_aside" >

      <form onSubmit={handleSubmit}>
        <div className='search-bar_right'>
          <Input id='search_items' placeholder="搜索..." />
          <button type="submit" class='button-68' role='button'>search</button>

        </div>
      </form>

      <Collapse
        bordered={false}
        defaultActiveKey={['1']}
        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
        style={{ background: token.colorBgContainer }}
      >
        <Panel header="硬件模型属性展示" key="1" style={panelStyle}>
          <p>
            测试属性: {props.value} 
            <hr />
            key: {props.current_object}
          </p>
          <hr />
            {props.current_object_properties.map((item) => {
              return (
                <>
                  <p>名称： {item}</p>
                </>
              )
            })}
          <hr />

          {
            hardware_properties.map((property) => {
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



      <div className="link" >
        <a href = "http://2ds.le5le.com/">帮助</a>
      </div>
    </div>
  );
};

export default Right_aside;
