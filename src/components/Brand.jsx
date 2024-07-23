import React from "react";
import brand1 from '../assets/images/brand_1.webp'
import brand2 from '../assets/images/brand_2.webp'
import brand3 from '../assets/images/brand_3.webp'
import brand4 from '../assets/images/brand_4.webp'

const Brand = () => {
    return (
        <div className="brand">
            <h2>CHỨNG NHẬN CỦA CHÚNG TÔI</h2>
            <ul className="brand-list">
                <li>
                    <a href="#"><img src={brand1} alt="FSC" /></a>
                </li>
                <li>
                    <a href="#"><img src={brand2} alt="OEKO-TEX" /></a>
                </li>
                <li>
                    <a href="#"><img src={brand3} alt="C2C" /></a>
                </li>
                <li>
                    <a href="#"><img src={brand4} alt="MAS" /></a>
                </li>
            </ul>
        </div>
    );
}

export default Brand;