import IconCartShopping from '../assets/icons/Cart-icon';
import IconMagnifyingGlass from '../assets/icons/Find-icon';
import IconPerson from "../assets/icons/Avatar-icon";
import logo from '../assets/images/logo_header.webp';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="top-bar">
                <div className="logo">
                    <Link to="/"><img src={logo} alt="EGA furniture" /></Link>
                </div>
                <nav className="main-nav">
                    <ul>
                        {/* Dùng thẻ <Link></Link> của reactRouter */}
                        <li><Link to="/collections">Sản phẩm</Link></li>
                        <li><Link to="/rooms">Phòng</Link></li>
                        <li><Link to="/sales">Khuyến mãi</Link></li>
                        <li><Link to="/inspires">Góc cảm hứng</Link></li>
                        <li><Link to="/shopSystem">Hệ thống cửa hàng</Link></li>
                    </ul>
                </nav>
                <div className="navbar-icon">
                    <input type="text" placeholder="ex: Sofa..." />
                    <IconMagnifyingGlass width='30px' height='30px'/>
                    <div className="icon-account">
                        <IconPerson width='30px' height='30px' className="avatar-icon"/>
                        <div className="account-action">
                            <Link className='action-item' to="/account/login">Đăng nhập</Link><br />
                            <Link className='action-item' to="/account/register">Đăng ký</Link>
                        </div>
                    </div>
                    <IconCartShopping width='30px' height='30px'/>
                </div>
            </div>
        </header>
    );
}

export default Header;