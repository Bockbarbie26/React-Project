import React from "react";
import logoFooter from '../assets/images/logo_footer.webp';
import IconFacebook from "../assets/icons/Facebook-icon";
import IconZalo from "../assets/icons/Zalo-icon";
import IconInstagram from "../assets/icons/Instagram-icon";
import IconYoutube from "../assets/icons/Youtube-icon";
import IconTiktok from "../assets/icons/Tiktok-icon";
import './css/MainPage.css';

const Footer = () => {
    return (
        <footer  className="container">
            <div className="contact">
                <div className="contact-1">
                    <img src={logoFooter} alt="EGA Furniture" />
                    <ul>
                        <li>Địa chỉ: 150/8 Nguyễn Duy Cung, Phường 12, TPHCM</li>
                        <li>Số điện thoại: <a href="#">0363142603</a></li>
                        <li>Email: <a href="mailto:example@gmail.com">support@egany.com</a></li>
                        <li>&copy; Bản quyền thuộc về <a className="company" href="https://egany.com">EGANY</a> | Cung cấp bởi <a className="company" href="#">Haravan</a></li>
                    </ul>
                </div>
                <div className="contact-2">
                    <div className="contact-2-col">
                        <h4>HỖ TRỢ KHÁCH HÀNG</h4>
                        <ul>
                            <li><a href="#">Giới thiệu</a></li>
                            <li><a href="#">Liên hệ</a></li>
                            <li><a href="#">Hệ thống cửa hàng</a></li>
                            <li><a href="#">Tư vấn nội thất theo phong thủy</a></li>
                        </ul>
                    </div>
                    <div className="contact-2-col">
                        <h4>CHÍNH SÁCH</h4>
                        <ul>
                            <li><a href="#">Chính sách giao hàng</a></li>
                            <li><a href="#">Chính sách đổi trả</a></li>
                            <li><a href="#">Chính sách bảo mật</a></li>
                            <li><a href="#">Điều khoản dịch vụ</a></li>
                        </ul>
                    </div>
                    <div className="contact-2-col">
                        <h4>ĐĂNG KÝ NHẬN TIN</h4>
                        <form>
                            <input type="email" placeholder="Email của bạn" />
                            <button type="submit">Đăng ký</button>
                        </form>
                        <ul className="multiMedia">
                            <li><a href="https://www.facebook.com"><IconFacebook /></a></li>
                            <li><a href="https://www.instagram.com"><IconInstagram /></a></li>
                            <li><a href="https://www.zalo.com"><IconZalo /></a></li>
                            <li><a href="https://www.youtube.com"><IconYoutube /></a></li>
                            <li><a href="https://www.tiktok.com"><IconTiktok /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;