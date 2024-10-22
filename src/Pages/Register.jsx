import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <>
            <div className="container">
                <div className="register-container">
                    <h3>ĐĂNG KÝ TÀI KHOẢN</h3>
                    <p>Bạn đã có tài khoản? Đăng nhập tại <Link to="/account/login">đây</Link></p>
                    <br />
                    <h3>THÔNG TIN CÁ NHÂN</h3>
                    <div className="register-information">
                        <form action="#">
                            <div className="register-form">
                                <fieldset className="form-group">
                                    <label>Họ và tên(<span className="required-asterisk">*</span>):</label>
                                    <input type="text" placeholder="Trần Trọng Bách" required />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Số điện thoại(<span className="required-asterisk">*</span>):</label>
                                    <input type="text" pattern="[0-9]+" placeholder="0123456789" required />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Email(<span className="required-asterisk">*</span>):</label>
                                    <input type="text" pattern="/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/$" placeholder="abc@gmail.com" required />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Mật khẩu(<span className="required-asterisk">*</span>):</label>
                                    <input type="text" required />
                                </fieldset>
                            </div>
                            {/* <div className="submit-btn-container"> */}
                                <input className="submit-btn" type="submit" value="Đăng ký" />
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

export default Register;