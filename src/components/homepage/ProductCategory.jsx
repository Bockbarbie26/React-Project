import React from "react";
import bedRoom from '../../assets/images/bedroom.png';
import lamp from '../../assets/images/decor_lamp.png';
import kitchen from '../../assets/images/kitchen.webp';
import livingRoom from '../../assets/images/living_room.webp';
import workRoom from '../../assets/images/work_room.png';
// import data from '../data.json'

const ProductCategory = () => {
    // console.log(data);
    
    return (
        <div className="product-category">
            <h2>Danh mục sản phẩm</h2>
            <div className="product-container">
                <ul className="product-container-list">
                    <li className="container-list-item">
                        <img src={livingRoom} alt="Phòng khách"/>
                        <h3>Phòng khách</h3>
                        <p>13 sản phẩm</p>
                    </li>
                    <li className="container-list-item">
                        <img src={bedRoom} alt="Phòng ngủ"/>
                        <h3>Phòng ngủ</h3>
                        <p>13 sản phẩm</p>
                    </li>
                    <li className="container-list-item">
                        <img src={kitchen} alt="Phòng bếp"/>
                        <h3>Phòng bếp</h3>
                        <p>13 sản phẩm</p>
                    </li>
                    <li className="container-list-item">
                        <img src={workRoom} alt="Phòng làm việc"/>
                        <h3>Phòng làm việc</h3>
                        <p>13 sản phẩm</p>
                    </li>
                    <li className="container-list-item">
                        <img src={lamp} alt="Đèn trang trí"/>
                        <h3>Đèn trang trí</h3>
                        <p>13 sản phẩm</p>
                    </li>
                    <li className="container-list-item">
                        <img src={bedRoom} alt="Kệ lưu trữ"/>
                        <h3>Kệ lưu trữ</h3>
                        <p>13 sản phẩm</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProductCategory;