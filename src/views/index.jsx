/*
 * @Description: 
 */
import React from 'react';
import { useCallback, useState } from 'react';
import Aside from './aside';
import My_Header from './header';
import Meta2dContainer from './meta2d';
import Product_display from './product_display';

import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Link, Outlet} from "react-router-dom";
import { Layout, } from "antd";
import { Button, ConfigProvider } from 'antd';
const { Header , Footer, Sider, Content } = Layout;


let shouldHide = true;

const Home = () => {
  const [theme, setTheme] = useState('light');

  const [address, setAddress] = useState({ ip_address: 'http://10.129.194.177:5000'});
  // const [address, setAddress] = useState({ ip_address: 'http://162.105.85.214:8000/test_interface'});
  return (
    <>
    <ConfigProvider
      theme={{
        // algorithm: theme.darkAlgorithm,
        token: {
          // colorPrimary: '#00b96b', // green
          // colorPrimary: '#1890ff', // blue
        },
      }}
    >
      <Layout>
        <My_Header 
          global_theme={theme}
          address={address}
          setAddress={setAddress}
          setTheme={setTheme}
        />
        <Aside 
          global_theme={theme}
          address={address}
          setAddress={setAddress}
        />
        {/* <Meta2dContainer /> */}

      </Layout>
    </ConfigProvider>
    </>
  );
};

// const Home = () => <h1>Home</h1>;
const About = () => (
  <>
  <h1>About</h1>
  </>
)
const Contact = () => <h1>Contact</h1>;

const App = () => (
  <Home />
);

export default App;
// ReactDOM.render(<App />, document.getElementById('root'));
