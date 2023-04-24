import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import Cards from './cards';

const { Header, Content, Sider } = Layout;

const items1 = ['模块', '组件', '接口'].map((key) => ({
  key,
  label: `${key}`,
}));



const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  },
);

const ModelTable = () => {
  const [overview_info, set_overview_info] = useState(
[{"type": "interface", "name": "model_name", "description": "\u63cf\u8ff0\u8be5\u7ec4\u4ef6", "info": [{"\u7248\u672c": "1.0"}, {"...": "..."}]}]
  );
  const [init_ok, set_init_ok] = useState(false);
  const get_info = () => {
    const data = {}
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
    fetch('http://162.105.85.214:5001/overview', requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log('get', data);
            // set_overview_info(data);
            set_overview_info(JSON.parse(data));
            set_init_ok(true);
            console.log(overview_info);
        });
  
  }

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  if(!init_ok){
    get_info();
    set_init_ok(true);
  }

  return (
    <Layout>
      <Header className="header">
        <div 
          className='logo'
          style={{
            'background-color': `${true ? '#fff' : 'rgba(0,21, 41)'}`
          }}
        >
        <img src='/favicon.ico' alt="集成开发环境" />
      </div>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} items={[...items1, {key:'getinfo',   label: <Button onClick={get_info}>更新</Button>}]} />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={[...items2]}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            {/* <Breadcrumb.Item>Home</Breadcrumb.Item> */}
            {/* <Breadcrumb.Item>List</Breadcrumb.Item> */}
            <Breadcrumb.Item>ModelTable</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: '#f0f0f0',
            }}
          >

            <Cards overview_info={overview_info} init={init_ok}/>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default ModelTable;