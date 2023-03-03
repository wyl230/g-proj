/*
 * @Description: 
 */
import React from 'react';
import Aside from './aside';
import My_Header from './header';
import Meta2dContainer from './meta2d';
import Product_display from './product_display';

import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Link, Outlet} from "react-router-dom";
import { Layout, } from "antd";
const { Header , Footer, Sider, Content } = Layout;


const Home = () => {
  return (
    <>
      <My_Header />

      <Aside />
      <Meta2dContainer />
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
