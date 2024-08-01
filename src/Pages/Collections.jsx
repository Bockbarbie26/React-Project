import banner from '../assets/images/banner.webp';
import Promotions from '../components/homepage/Promotion';
import collectionProduct from '../assets/images/collection_product_1.jpg';
import recentProduct from '../assets/images/recent_product_1.webp';
import { Link } from 'react-router-dom';

const Collection = () => {
    return (
        <div className='collection'>
            <div className="container">
                <div className='container-banner'>   
                    <Link to="/"><img src={banner} alt="Banner" /></Link>
                </div>
                <Promotions/>
                <div className="all-product">
                    <div className="product-sort">
                        <h2>Tất cả sản phẩm</h2>
                        <div className="sort-box">
                            <label id='sort-label' >Sắp xếp: </label>
                            <select id="sort-box">
                                <option value="Tên xếp theo A-Z">Tên A &rarr; Z</option>
                                <option value="Tên xếp theo Z-A">Tên Z &rarr; A</option>
                                <option value="Giá tăng dần">Giá tăng dần</option>
                                <option value="Giá giảm dần">Giá giảm dần</option>
                                <option value="Hàng mới">Hàng mới</option>
                            </select>
                        </div>
                    </div>
                    <div className="all-product-container">
                        <div className="all-product-filter">
                            <aside>
                                <div className="filter-item color-filter">
                                    <p>MÀU SẮC</p>
                                    <ul className="color-filter-list">
                                        <li>Đen</li>
                                        <li>Xanh đen</li>
                                        <li>Nâu đậm</li>
                                        <li>Nâu nhạt</li>
                                        <li>Hồng</li>
                                        <li>Đỏ</li>
                                        <li>Vàng</li>
                                        <li>Tím</li>
                                        <li>Cam</li>
                                        <li>Hồng</li>
                                        <li>Đa sắc</li>
                                    </ul>
                                    <a href="#">Xem thêm</a>
                                </div>
                                <div className="filter-item price-filter">
                                    <p>MỨC GIÁ</p>
                                    <form action="get">
                                        <input type="checkbox" name='price' />
                                        <label for='price 1'>Dưới 1.000.000 &#8363;</label><br />
                                        <input type="checkbox" name='price' />
                                        <label for='price 1'>1.000.000 &#8363;-5.000.000 &#8363;</label><br />
                                        <input type="checkbox" name='price' />
                                        <label for='price 1'>5.000.000 &#8363;-7.000.000 &#8363;</label><br />
                                        <input type="checkbox" name='price' />
                                        <label for='price 1'>7.000.000 &#8363;-10.000.000 &#8363;</label><br />
                                        <input type="checkbox" name='price' />
                                        <label for='price 1'>10.000.000 &#8363;-15.000.000 &#8363;</label><br />
                                        <input type="checkbox" name='price' />
                                        <label for='price 1'>Trên 15.000.000 &#8363;</label>
                                    </form>
                                </div>
                                <div className="filter-item type-filter">
                                    <p>LOẠI</p>
                                    <form action="get">
                                        <input type="checkbox" name='type' />
                                        <label for='type'>Sofa</label><br />
                                        <input type="checkbox" name='type' />
                                        <label for='type'>Bàn</label><br />
                                        <input type="checkbox" name='type' />
                                        <label for='type'>Đèn</label><br />
                                        <input type="checkbox" name='type' />
                                        <label for='type'>Ghế</label><br />
                                    </form>
                                </div>
                                <div className="filter-item delivery-filter">
                                    <p>DỊCH VỤ GIAO HÀNG</p>
                                    <form action="get">
                                        <input type="checkbox" name='delivery'/>
                                        <label for='delivery'>Miễn phí giao hàng</label><br />
                                        <input type="checkbox" name='delivery'/>
                                        <label for='delivery'>Giao hàng nhanh</label><br />
                                        <input type="checkbox" name='delivery'/>
                                        <label for='delivery'>Giao hàng tiết kiệm</label><br />
                                    </form>
                                </div>
                            </aside>
                        </div>
                        <div className="all-product-list">
                            <div className="all-product-item">
                                <img src={collectionProduct} alt="all-product-item" />
                            </div>
                            <div className="all-product-item">
                                <img src={collectionProduct} alt="all-product-item" />
                            </div>
                            <div className="all-product-item">
                                <img src={collectionProduct} alt="all-product-item" />
                            </div>
                            <div className="all-product-item">
                                <img src={collectionProduct} alt="all-product-item" />
                            </div>
                            <div className="all-product-item">
                                <img src={collectionProduct} alt="all-product-item" />
                            </div>
                            <div className="all-product-item">
                                <img src={collectionProduct} alt="all-product-item" />
                            </div>
                            <div className="all-product-item">
                                <img src={collectionProduct} alt="all-product-item" />
                            </div>
                            <div className="all-product-item">
                                <img src={collectionProduct} alt="all-product-item" />
                            </div>
                            <div className="all-product-item">
                                <img src={collectionProduct} alt="all-product-item" />
                            </div>
                            <div className="all-product-item">
                                <img src={collectionProduct} alt="all-product-item" />
                            </div>
                            <div className="all-product-item">
                                <img src={collectionProduct} alt="all-product-item" />
                            </div>
                            <div className="all-product-item">
                                <img src={collectionProduct} alt="all-product-item" />
                            </div>
                            <div className="all-product-item">
                                <img src={collectionProduct} alt="all-product-item" />
                            </div>
                            <div className="all-product-item">
                                <img src={collectionProduct} alt="all-product-item" />
                            </div>
                            <div className="all-product-item">
                                <img src={collectionProduct} alt="all-product-item" />
                            </div>
                        </div>
                    </div>
                    <div className="recent-products">
                        <h2>Sản phẩm đã xem</h2>
                            <div className="recent-product-container">
                                <div className="recent-product-item"><img src={recentProduct} alt="Sản phẩm đã xem" /></div>
                                <div className="recent-product-item"><img src={recentProduct} alt="Sản phẩm đã xem" /></div>
                                <div className="recent-product-item"><img src={recentProduct} alt="Sản phẩm đã xem" /></div>
                                <div className="recent-product-item"><img src={recentProduct} alt="Sản phẩm đã xem" /></div>
                                <div className="recent-product-item"><img src={recentProduct} alt="Sản phẩm đã xem" /></div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collection;


