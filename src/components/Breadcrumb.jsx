import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = () => {
    return (
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
    );
}

export default BreadCrumb;