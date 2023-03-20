/*
 * @Description: 
 * 最上面一行
 */

// add dropdown
import React, { useState } from 'react';
import { Divider, Menu, Switch, Breadcrumb, Layout, theme, } from 'antd';
import { Button, Dropdown } from 'antd';
import { useCallback, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
// import { MenuProps, MenuTheme } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
const { Header, Content, Sider } = Layout;

import { ConfigProvider } from 'antd';
import { icons } from '../utils/data';


const My_Header = (props) => {
  const penBtn = useRef(null);
  const pencilBtn = useRef(null);
  const magnifierBtn = useRef(null);
  const minimapBtn = useRef(null);

  const onCreate = useCallback(() => {
    window.meta2d.open();
  }, []);

  const onOpen = useCallback((e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target.result);
        window.meta2d.open(json);
      } catch(e) {
        console.log('读取文件失败，请检查数据格式');
      }
    };
    reader.readAsText(file);
  }, []);

  const onSave = useCallback(() => {
    const filename = 'test_data.json';
    const data = window.meta2d.data();
    console.log(data);
    const json = JSON.stringify(data, undefined, 4);
    console.log(json);
    const blob = new Blob([ json ], { type: 'text/json' });
    const a = document.createElement('a');
    a.download = filename;
    a.href = window.URL.createObjectURL(blob);
    a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
    a.click();
  }, []);

  const onTest_send_json = useCallback(() => {

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
        // headers: { 'Content-Type': 'application/json' },
        body: json
    };
    fetch('http://162.105.85.214:8000/test_interface', requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log('get: ', data.data_mine);
          icons.append(data.data_mine);
          console.log(icons);
        });
        // .then(data => this.setState({ postId: data.id }));

  // curl -d '{"MyKey":"My Value"}' -H "Content-Type: application/json" http://127.0.0.1:8000/test_interface {"MyKey":"My Value"}
    // window.open('http://162.105.85.214:8000/test_interface');
    alert('已发送post请求');
  });

  const onTogglePen = useCallback(() => {
    pencilBtn.current.className = '';
    window.meta2d.finishPencil();
    penBtn.current.className = 'active';
    // window.meta2d.drawLine('curve'); // wyl 钢笔划线使用curve还是line or polyline
    window.meta2d.drawLine('polyline');
  }, []);

  const onTogglePencil = useCallback(() => {
    if (penBtn.current.className === 'active') {
      return;
    }
    if (pencilBtn.current.className === 'active') {
      pencilBtn.current.className = '';
      window.meta2d.finishPencil();
    } else {
      pencilBtn.current.className = 'active';
      window.meta2d.drawingPencil();
    }
  }, []);

  const onToggleMagnifier = useCallback(() => {
    if (magnifierBtn.current.className === 'active') {
      magnifierBtn.current.className = '';
      window.meta2d.hideMagnifier();
    } else {
      magnifierBtn.current.className = 'active';
      window.meta2d.showMagnifier();
    }
  }, []);

  const onToggleMinimap = useCallback(() => {
    if (minimapBtn.current.className === 'active') {
      minimapBtn.current.className = '';
      window.meta2d.hideMap();
    } else {
      minimapBtn.current.className = 'active';
      window.meta2d.showMap();
    }
  }, []);

  const onTest_interface = useCallback(() => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React POST Request Example' })
    };
    fetch('http://162.105.85.214:8000/test_interface', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));

    // window.open('http://162.105.85.214:8000/test_interface');
    alert('已发送post请求');
  }, []);

  const on_3d_show = useCallback(() => {
    window.open('http://162.105.85.214:8000/about');
  })

  const onHelp = useCallback(() => {
    // window.open('https://www.yuque.com/alsmile/topology/cucep0');
    window.open('/usage.html');
  }, []);

  const onKeyDown = useCallback((e) => {
    switch (e.key) {
      case 'b':
      case 'B':
        if (window.meta2d.canvas.pencil) {
          pencilBtn.current.className = 'active';
        } else {
          pencilBtn.current.className = '';
        }
        break;
      case 'v':
      case 'V':
        if (e.ctrlKey || e.metaKey) {
          return;
        } else {
          if (window.meta2d.canvas.drawingLineName) {
            penBtn.current.className = 'active';
          } else {
            penBtn.current.className = '';
          }
        }
        break;
      case 'm':
      case 'M':
        if (window.meta2d.canvas.magnifier) {
          minimapBtn.current.className = 'active';
        } else {
          minimapBtn.current.className = '';
        }
        break;
      case 'Escape':
        penBtn.current.className = '';
        pencilBtn.current.className = '';
        magnifierBtn.current.className = '';
        break;
      default:
        break;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    }
  }, []);


  const items = [
  {
    key: '1',
    label: (
        <button className='button-3' id="pencil" onClick = { onTogglePencil } ref = { pencilBtn } >曲线</button>
    ),
  },
  {
    key: '2',
    label: (
        <button className='button-3' id="pen" onClick = { onTogglePen } ref = { penBtn } >折线</button>
    ),
  },
  {
    key: '3',
    label: (
        <button className='button-3' id="magnifier" onClick = { onToggleMagnifier } ref = { magnifierBtn } >放大镜</button>
    ),
  },
  {
    key: '4',
    label: (
        <button className='button-3' id="minimap" onClick = { onToggleMinimap } ref = { minimapBtn } >缩略图</button>
      ),
    },
  {
    key: '5',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        放上需要的链接
      </a>
      ),
    },
  ];

  const file_op_items = [
  {
    key: '1',
    label: (
        <button className='button-3' id="create" onClick = { onCreate } >新建文件</button>
    ),
  },
  {
    key: '2',
    label: (
        <button className='button-3' id="open" >
          打开文件
          <input id="open-input" type="file" onChange = { onOpen } />
        </button>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        放上需要的链接
      </a>
    ),
  },
  {
    key: '4',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        放上需要的链接
      </a>
      ),
    },
  ];

  const changeTheme = (dark) => {
    props.setTheme(dark ? 'dark' : 'light');
      let my_option = meta2d.getOptions();
      my_option.color = dark ? '#fff' : '#000'
      my_option.hoverColor = dark ? 'rgb(255,122,122)' : 'rgba(39,141,248,0.7)'
      // my_option.hoverColor = dark ? '#fff' : '#000'
      // my_option.fontSize = 1000;
      my_option.gridColor = dark ? '#2e2e2e' : '#e2e2e2';
      meta2d.setOptions(my_option);
      meta2d.resize();
      console.log(dark, meta2d.getOptions().gridColor)
  };

  const item_navs = [
    {
      label: <Link to='/'>主界面</Link>,
      key: '主界面',
    },
    {

        label: <a href="http://162.105.85.214:3000" target="_blank">建模设计功能</a>,
//       label: <Link to='/contact'
// target="_blank" rel="noopener noreferrer"
//       >建模设计功能</Link>,

      key: '建模设计功能',
    },
    {

      label: <Link to='/contact'>产品展示界面</Link>,
      key: '产品展示界面',
      // onClick: () => {
      //   alert(234);
      // }
    },
    {
      label: '功能',
      key: 'SubMenu',
      icon: <SettingOutlined />,
      children: [
        {
          label: 'item1',
          key: 'item1'
        }, {
          label: 'item2',
          key: 'item2',
        }, {
          label: (
        <p id="save" onClick = { onSave } >保存</p>
          ),
          key: 'item3',
        }, {
          label: (
            <p id="help" onClick = { onHelp } >帮助</p>
          ), key: '4'
        }, {
          label: (
            <p id="test_interface" onClick = { onTest_interface } >接口测试</p>
          ), key: '5'
        }, {
          label: (
            <p id="test_send_json" onClick = { onTest_send_json } >发送连接关系对应的JSON</p>
          ), key: '6'
        }, {
          label: (
            <p id="test_interface" onClick = { onTest_interface } >生成IDL文件</p>
          ), key: '7'
        }, {
          label: (
            <p id="test_interface" onClick = { onTest_interface } >IDL2C</p>
          ), key: '8'
        }, {
          label: (
            <p id="test_interface" onClick = { onTest_interface } >to_FPGA</p>
          ), key: '9'
        },       
      ]
    }, 
    {
      label: (
        <Dropdown menu={{ items: file_op_items }} key='34' placement="bottomRight" >
          <Button>文件...</Button>
        </Dropdown>
      ), key: '12'
    }, {
      label: (
        <Dropdown menu={{ items }} key='23' placement="bottomRight" arrow>
          <Button>更多...(绘图相关)</Button>
        </Dropdown>
      ), key: '13'
    }, {
        label: <a href="/usage.html" target="_blank">使用说明</a>,
        key: 'usage'
    }, 

    {
      label: (
        <>
        主题切换
        </>
      ), key: 'textchange',
      children: [{
        label: (
          <>
          <Switch onChange={changeTheme} 
            onClick={() => setCount(Count + 1)}
          />
          </>
        ), key: '11'
      }]
    }, {
      label: (
        <>
        <Switch onChange={changeTheme} 
          onClick={() => setCount(Count + 1)}
        />
        </>
      ), key: '11'
    }, 
  ]

  const [Count, setCount] = useState(0);
  useEffect(() => {
    // document.title = `You clicked ${Count} times`;
    console.log('run');
    return () => console.log('exit');
  });

  return (
    // <Header className='header'>
    <Header 
    // className='header'
      // style={{'background-color': `rgb(0,21,41)`}}

      style={{ 
          // overflow: 'auto',
          // height: '64px',
          // position: 'fixed',
          'border-bottom': '1px solid #ccc',
          'background-color': `${props.global_theme == 'light' ? '#fff' : 'rgba(0,21, 41)'}`
      }}
    >
    {/* <div className="header" > */}
      <div className="logo" 
        style={{
          'background-color': `${props.global_theme == 'light' ? '#fff' : 'rgba(0,21, 41)'}`
        }}
      >
        <img src='/favicon.ico' alt="集成开发环境" />
      </div>
      {/* <Menu theme={theme} mode="horizontal" defaultSelectedKeys={['主界面']} items={item_navs}/> */}

            <ConfigProvider
        theme={{
          algorithm: props.global_theme == 'light' ? theme.defaultAlgorithm : theme.darkAlgorithm,
          token: {
            // colorPrimary: '#00b96b', // green
            // colorPrimary: '#1890ff', // blue
          },
        }}
      >

      <Menu theme={props.global_theme} mode="horizontal" defaultSelectedKeys={['主界面']} items={item_navs}/>
      {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['主界面']} items={item_navs} /> */}

      {/* <Switch onChange={changeTheme} /> Change Style */}

      </ConfigProvider>
      <div className="button-group" >
        {/* <Link to="/">
          <button className='button-3'>
              Home
          </button>
        </Link>
        <Link to="/contact">
          <button className='button-3'>
            产品展示界面
          </button>
        </Link>
        <Outlet /> */}
      </div>
    </Header>
  );
};

export default My_Header;
