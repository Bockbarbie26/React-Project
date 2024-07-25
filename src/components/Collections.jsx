import banner from '../assets/images/collection_banner.webp'
import Footer from './Footer';
import Header from './Header';
import Promotions from './Promotion';
import { Link } from 'react-router-dom';

const Collection = () => {
    return (
        <div className='collection'>
            <Header/>
            <div className="container">
                <div>   
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
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Collection;