import React from "react";
import './css/Header.css';
import IconCartShopping from '../assets/icons/Cart-icon';
import IconMagnifyingGlass from '../assets/icons/Find-icon';
import IconPerson from "../assets/icons/Avatar-icon";
import logo from '../assets/images/logo_header.webp';
import slide1 from '../assets/images/slide_product_1.webp';

const Header = () => {
    return (
        <header>
            <div className="top-bar">
                <div className="logo">
                    <img src={logo} alt="EGA furniture" />
                </div>
                <nav className="main-nav">
                    <ul>
                        <li><a href="/products">Sản phẩm</a></li>
                        <li><a href="/rooms">Phòng</a></li>
                        <li><a href="/sales">Khuyến mãi</a></li>
                        <li><a href="/inspires">Góc cảm hứng</a></li>
                        <li><a href="/shopSystem">Hệ thống cửa hàng</a></li>
                    </ul>
                </nav>
                <div className="navbar-icon">
                    <input type="text" placeholder="ex: Sofa..." />
                    <IconMagnifyingGlass width='30px' height='30px'/>
                    <IconPerson width='30px' height='30px'/>
                    <IconCartShopping width='30px' height='30px'/>
                </div>
            </div>
            <div className="banner">
                <img src={slide1} alt="Furniture sales" />
            </div>
        </header>
    );
}

export default Header;