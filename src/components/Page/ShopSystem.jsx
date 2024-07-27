import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import { Link } from "react-router-dom";

const ShopSystem = () => {
    return (
        <div className="shop-system">
            <Header/>
            <div className="breadcrumb">
                <ul>
                    <li itemScope>    
                        <Link to="/" target='_self' itemProp='item'>Trang chủ</Link>
                        <span>&nbsp;/&nbsp;</span>
                    </li>
                    <li itemScope>
                        <Link to="/collections" target='_self' itemProp='item'>Tất cả sản phẩm</Link>
                    </li>
                </ul>
            </div>
            <div className="container">
                <h2 className="title-page">Trang chủ</h2>
                <div>
                    <p>Viết vài dòng giới thiệu với khách hàng về cửa hàng của bạn 
                        (các loại sản phẩm bạn bán, thương hiệu cửa hàng, các chương trình chăm sóc khách hàng, v.v...). 
                        Bạn cũng có thể thêm hình ảnh và video minh họa để tăng sự chú ý của khách với cửa hàng.</p>
                        <p>Bạn có thể chỉnh sửa hoặc xoá bài viết này tại <a href="#">đây</a> hoặc thêm những bài viết mới trong phần quản lý <a href="#">Trang nội dung</a>.</p>
                </div>  
            </div>
            <Footer/>
        </div>
    );
}

export default ShopSystem;