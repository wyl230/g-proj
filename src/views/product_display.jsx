import React from 'react';
import Show_properties from './show_properties';
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

const Product_display = () => (
    <>
    <Link to="/">
        <button class-3>
            Home
        </button>
    </Link>
    <Link to="/about">
        <button class-3>
            about
        </button>
    </Link>
    <Link to="/contact">
        <button class-3>
        产品展示界面
        </button>
    </Link>
    <Outlet />

    <h1>
        产品展示界面
    </h1>

    <div>
        操作及设计细节说明
        <p>
        1. 360°旋转，支持拖动；
        </p>
        <p>
        2.支持关键属性点击查看。
        机箱功率；机箱槽位个数及排布；机箱 VPX/LAM 布局方式；
        </p>
        <p>
        3.支持关键属性修改，如机箱布局，横插/竖插方式。
        </p>

        <Show_properties />
    </div>
    </>
)


export default Product_display;