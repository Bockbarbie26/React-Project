import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const ShopSystem = () => {
    return (
        <>
            <Header/>
            <div className="container">
                <hr />
                <h1 className="Title-page">Trang chủ</h1>
                <hr />
                <div>
                    <br />
                    <p>Viết vài dòng giới thiệu với khách hàng về cửa hàng của bạn 
                        (các loại sản phẩm bạn bán, thương hiệu cửa hàng, các chương trình chăm sóc khách hàng, v.v...). 
                        Bạn cũng có thể thêm hình ảnh và video minh họa để tăng sự chú ý của khách với cửa hàng.</p>
                        <p>Bạn có thể chỉnh sửa hoặc xoá bài viết này tại <a href="#">đây</a> hoặc thêm những bài viết mới trong phần quản lý <a href="#">Trang nội dung</a>.</p>
                </div>  
            </div>
            <Footer/>
        </>
    );
}

export default ShopSystem;