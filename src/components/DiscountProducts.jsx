import React from "react";
import saleProduct1 from '../assets/images/sale_product_1.webp';

const DiscountProduct = () => {
    return (
        <div className="discount-products">
            <div className="discount-time-container">
                <h2>HAPPY SUMMER - GIẢM ĐẾN 50%</h2>
                <div className="countdown">
                    <p>Time remaining</p>
                </div>
            </div>
            <div className="discount-products-container">
                <div className="discount-products-item">
                    <img src={saleProduct1} alt="Bộ sofa 2 băng góc phải"/>
                    <p>KHÁC</p>
                    <a href={saleProduct1}>Bộ sofa 2 băng góc phải</a>
                </div>
                <div className="discount-products-item">
                    <img src={saleProduct1} alt="Bộ sofa 2 băng góc phải"/>
                    <p>KHÁC</p>
                    <a href={saleProduct1}>Bộ sofa 2 băng góc phải</a>
                </div>
                <div className="discount-products-item">
                    <img src={saleProduct1} alt="Bộ sofa 2 băng góc phải"/>
                    <p>KHÁC</p>
                    <a href={saleProduct1}>Bộ sofa 2 băng góc phải</a>
                </div>
                <div className="discount-products-item">
                    <img src={saleProduct1} alt="Bộ sofa 2 băng góc phải"/>
                    <p>KHÁC</p>
                    <a href={saleProduct1}>Bộ sofa 2 băng góc phải</a>
                </div>
                <div className="discount-products-item">
                    <img src={saleProduct1} alt="Bộ sofa 2 băng góc phải"/>
                    <p>KHÁC</p>
                    <a href={saleProduct1}>Bộ sofa 2 băng góc phải</a>
                </div>
                <div className="discount-products-item">
                    <img src={saleProduct1} alt="Bộ sofa 2 băng góc phải"/>
                    <p>KHÁC</p>
                    <a href={saleProduct1}>Bộ sofa 2 băng góc phải</a>
                </div>
                <div className="discount-products-item">
                    <img src={saleProduct1} alt="Bộ sofa 2 băng góc phải"/>
                    <p>KHÁC</p>
                    <a href={saleProduct1}>Bộ sofa 2 băng góc phải</a>
                </div>
                <div className="discount-products-item">
                    <img src={saleProduct1} alt="Bộ sofa 2 băng góc phải"/>
                    <p>KHÁC</p>
                    <a href={saleProduct1}>Bộ sofa 2 băng góc phải</a>
                </div>
            </div>
            <div className="all-btn">
                    <button type="button" >Xem tất cả</button>
            </div>
        </div>
    );

}

export default DiscountProduct;