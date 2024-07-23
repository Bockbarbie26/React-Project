import React from "react";
import ProductCategory from "./ProductCategory";
import Promotions from "./Promotion";
import CustomerReview from "./CustomerReview";
import './css/MainPage.css';
import DiscountProduct from "./DiscountProducts";
import Brand from "./Brand";
import Videos from "./Videos";

const MainPage = () => {
    return (
      <div className="container">
        <ProductCategory />
        <Promotions />
        <DiscountProduct /> 
        <Brand />
        <Videos />
        <CustomerReview />
      </div>
    );
}

export default MainPage;