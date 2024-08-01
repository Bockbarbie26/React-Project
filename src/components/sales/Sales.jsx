import banner from '../../assets/images/banner.webp';
import Promotions from '../homepage/Promotion';
import saleProduct from '../../assets/images/flashsale_product1.webp';
import { Link } from 'react-router-dom';


const Sales = () => {
    return (
        <div className="container">
            <div className="sales-img">
                <Link to="/"><img src={banner} alt="banner" /></Link>
                <div className="sales-remaining-time">
                    <p>Remaining time</p>
                </div>
            </div> 
            <Promotions/>
            <div className="sales-container">
                <div className="sales-container-item">
                    <a href="#"><img src={saleProduct} alt="sale product" /></a>
                    <p>Hàng</p>
                </div>
                <div className="sales-container-item">
                    <a href="#"><img src={saleProduct} alt="sale product" /></a>
                    <p>Hàng</p>
                </div>
                <div className="sales-container-item">
                    <a href="#"><img src={saleProduct} alt="sale product" /></a>
                    <p>Hàng</p>
                </div>
                <div className="sales-container-item">
                    <a href="#"><img src={saleProduct} alt="sale product" /></a>
                    <p>Hàng</p>
                </div>
                <div className="sales-container-item">
                    <a href="#"><img src={saleProduct} alt="sale product" /></a>
                    <p>Hàng</p>
                </div>
                <div className="sales-container-item">
                    <a href="#"><img src={saleProduct} alt="sale product" /></a>
                    <p>Hàng</p>
                </div>
                <div className="sales-container-item">
                    <a href="#"><img src={saleProduct} alt="sale product" /></a>
                    <p>Hàng</p>
                </div>
                <div className="sales-container-item">
                    <a href="#"><img src={saleProduct} alt="sale product" /></a>
                    <p>Hàng</p>
                </div>
                <div className="sales-container-item">
                    <a href="#"><img src={saleProduct} alt="sale product" /></a>
                    <p>Hàng</p>
                </div>
                <div className="sales-container-item">
                    <a href="#"><img src={saleProduct} alt="sale product" /></a>
                    <p>Hàng</p>
                </div>
            </div>
        </div>
    );
}

export default Sales;