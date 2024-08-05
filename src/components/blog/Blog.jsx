import React from "react";
import blogImg from '../../assets/images/blog_img.webp';
import { Link } from "react-router-dom";

const Blog = () => {
    return (
        <div className="container">
            <div className="blog-header">
                <h1>Tin tức</h1>
                <hr />
            </div>
            <div className="blog-container">
                <div className="blog-group">
                    <div className="blog-item">
                        <div className="blog-img">
                            <img src={blogImg} alt="Blog news" />
                        </div>
                        <div className="blog-info">
                            <h3><Link to="/blog/khong-gian-xanh-y-tuong-cho-mua-he-tuoi-mat">Không gian xanh - Ý tưởng cho mùa hè tươi mát</Link></h3>
                            <p>Tháng tư rực rỡ đang sắp đến mang theo thời tiết nóng đặc trưng của mùa hè. Chuẩn bị một không gian xanh mát cho căn...</p>
                            <Link to="/blog/khong-gian-xanh-y-tuong-cho-mua-he-tuoi-mat">Không gian xanh - Ý tưởng cho mùa hè tươi mát</Link>
                        </div>
                    </div>
                </div>
                <div className="blog-aside">
                    <h3>TIN NỔI BẬT</h3>
                    <ul>
                        <li>
                            <a href="#">
                                <img src={blogImg} alt="Blog image" />
                                <p>Không gian xanh - Ý tưởng cho mùa hè tươi mát</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={blogImg} alt="Blog image" />
                                <p>Không gian xanh - Ý tưởng cho mùa hè tươi mát</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={blogImg} alt="Blog image" />
                                <p>Không gian xanh - Ý tưởng cho mùa hè tươi mát</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={blogImg} alt="Blog image" />
                                <p>Không gian xanh - Ý tưởng cho mùa hè tươi mát</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Blog;