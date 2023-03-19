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

  const [address, setAddress] = useState({ ip_address: 'http://162.105.85.214:8000/test_interface'});
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

// const Layout = () => (
//   <>
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/about">about</Link>
//         </li>
//         <li>
//           <Link to="/contact">Contact</Link>
//         </li>
//       </ul>
//     </nav>
//     <Outlet />
//   </>
// )
const App = () => (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="contact" element={<Contact />} /> */}
        <Route path="contact" element={<Product_display />} />
        <Route path="about" element={<About />} />
      {/* <Route path="/" element={<Home />}>
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} /> */}
      {/* </Route> */}
    </Routes>
  </BrowserRouter>
);

export default App;
// ReactDOM.render(<App />, document.getElementById('root'));
