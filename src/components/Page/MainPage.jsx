import React from "react";
import ProductCategory from "../ProductCategory";
import Promotions from "../Promotion";
import CustomerReview from "../CustomerReview";
import DiscountProduct from "../DiscountProducts";
import Brand from "../Brand";
import Videos from "../Videos";
import Header from "../Header";
import Footer from "../Footer";
import Slider from "../Slider";
import '../css/Page.css';

const MainPage = () => {
    return (
     <>
        <Header/>
      <div className="container">
        <Slider/>
        <ProductCategory />
        <Promotions />
        <DiscountProduct /> 
        <Brand />
        <Videos />
        <CustomerReview />
      </div>
        <Footer/>
     </> 
    );
}

export default MainPage;