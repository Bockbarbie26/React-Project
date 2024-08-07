import React from "react"; 
import coupon from '../../assets/images/coupon.webp';

const Promotions = () => {
    return (
        <div className="promotion">
            <h2>Khuyến mãi</h2>
            <div class="coupon-container">
                <ul class="coupon-container-list">
                    <li class="coupon-list-item">
                        <div class="coupon-list-img">
                            <a href="#"><img src={coupon} alt="Hình mã giảm giá"/></a>
                        </div>
                        <div class="coupon-container-info">
                            <div class="coupon_info_row-1">
                                <div class="coupon_info-col-11">
                                    <p>FREESHIP</p>
                                    <p>Free ship cho đơn hàng từ 500k</p>
                                    <i class="fa-solid fa-circle-info"></i>
                                </div>
                                <div class="coupon_info_col-12">
                                    
                                </div>
                            </div>
                            <div class="coupon_info_row-2">
                                <p>Mã : EGAFREESHIP</p>
                                <p>HSD: 30/12/2024</p>
                            </div>
                        </div>
                    </li>   
                    <li class="coupon-list-item">
                        <div class="coupon-list-img">
                            <a href="#"><img src={coupon} alt="Hình mã giảm giá"/></a>
                        </div>
                        <div class="coupon-container-info">
                            <div class="coupon_info_row-1">
                                <p>FREESHIP</p>
                                <p>Free ship cho đơn hàng từ 500k</p>
                                <i class="fa-solid fa-circle-info"></i>
                            </div>
                            <div class="coupon_info_row-2">
                                <p>Mã : EGAFREESHIP</p>
                                <p>HSD: 30/12/2024</p>
                            </div>
                        </div>
                    </li>
                    <li class="coupon-list-item">
                        <div class="coupon-list-img">
                            <a href="#"><img src={coupon} alt="Hình mã giảm giá"/></a>
                        </div>
                        <div class="coupon-container-info">
                            <div class="coupon_info_row-1">
                                    <p>FREESHIP</p>
                                    <p>Free ship cho đơn hàng từ 500k</p>
                                    <i class="fa-solid fa-circle-info"></i>
                            </div>
                            <div class="coupon_info_row-2">
                                <p>Mã : EGAFREESHIP</p>
                                <p>HSD: 30/12/2024</p>
                            </div>
                        </div>
                    </li>
                    <li class="coupon-list-item">
                        <div class="coupon-list-img">
                            <a href="#"><img src={coupon} alt="Hình mã giảm giá"/></a>
                        </div>
                        <div class="coupon-container-info">
                            <div class="coupon_info_row-1">                    
                                <p>FREESHIP</p>
                                <p>Free ship cho đơn hàng từ 500k</p>
                                <i class="fa-solid fa-circle-info"></i>
                            </div>
                            <div class="coupon_info_row-2">
                                <p>Mã : EGAFREESHIP</p>
                                <p>HSD: 30/12/2024</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Promotions;