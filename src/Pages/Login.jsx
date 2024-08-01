import BreadCrumb from "../components/componentLayout/Breadcrumb";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <>
            <div className="container">
                <div className="login-container">
                    <h3>ĐĂNG NHẬP TÀI KHOẢN</h3>
                    <p>Bạn chưa có tài khoản? <Link to="/account/register">Đăng ký tại đây</Link></p>
                    <div className="login-information">
                        <form action="#">
                            <div className="login-form">
                                <fieldset className="form-group">
                                    <label>Email:</label>
                                    <input type="email" placeholder="abc@gmail.com" required/>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label >Mật khẩu:</label>
                                    <input type="text" placeholder="Mật khẩu" required/>
                                </fieldset>
                            </div>
                            <p>Quên mật khẩu? Nhấn vào <Link to="/account/login" target="_self">đây</Link></p>
                            <input className="submit-btn" type="submit" value="Đăng nhập" />
                        </form> 
                        <p style={{color:"grey"}}>Hoặc đăng nhập bằng</p>
                        <div className="social-login">
                            <button className="login-google" type="button">
                                Đăng nhập Google
                            </button>
                            <button className="login-facebook" type="button">
                                Đăng nhập Facebook
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;