import React from "react";
import review from '../../assets/images/review.jpg';

const CustomerReview = () => {
    return (
        <div className="customer-review">
            <h2>Customers reviews</h2>
            <div>
                <div className="customer-review-text-image">
                    <img src={review} alt="Đánh giá của khách hàng" />
                    <div>
                        <h3>Một chút câu chuyện</h3>
                        <p>Với ước mơ tạo ra thứ gì đó đặc biệt, EGA Furniture đã thành lập vào năm 2010. 
                            Tầm nhìn không chỉ là tạo ra những sản phẩm mang lại niềm vui cho thế giới 
                            những người yêu thích thiết kế nội thất mà họ còn muốn tạo ra một nền văn hóa công ty 
                            nơi nhân viên cảm thấy thoải mái. Vì vậy, từ khóa hạnh phúc đã ăn sâu vào DNA thương hiệu của chúng tôi.</p>
                        <h4>Hạnh phúc là ở xung quanh bạn những người tốt và những sản phẩm mang lại niềm vui.</h4>
                        <a href="#">Xem chi tiết</a>
                    </div>    
                </div>
            </div>
        </div>
    );
}

export default CustomerReview;