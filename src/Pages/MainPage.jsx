import React from "react";
import ProductCategory from "../components/homepage/ProductCategory";
import Promotions from "../components/homepage/Promotion";
import CustomerReview from "../components/homepage/CustomerReview";
import DiscountProduct from "../components/homepage/DiscountProducts";
import Brand from "../components/homepage/Brand";
import Videos from "../components/homepage/Videos";
import Slider from "../components/homepage/Slider";

const MainPage = () => {
    return (
     <>
      <div className="container">
        <Slider/>
        <ProductCategory />
        <Promotions />
        <DiscountProduct /> 
        <Brand />
        <Videos />
        <CustomerReview />
      </div>
     </> 
    );
}

export default MainPage;