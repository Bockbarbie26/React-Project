import React from "react";
import ProductCategory from "./ProductCategory";
import Promotions from "./Promotion";
import CustomerReview from "./CustomerReview";
import './css/MainPage.css';

const MainPage = () => {
    return (
      <div className="container">
        <ProductCategory/>
        <Promotions/>
        <CustomerReview/>
      </div>
    );
}

export default MainPage;