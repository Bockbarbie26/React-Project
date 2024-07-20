import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCategory from "./components/ProductCategory/ProductCategory";
import Promotions from "./components/Promotion/Promotion";
import CustomerReview from "./components/CustomerReview/CustomerReview";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <ProductCategory/>
      <Promotions/>
      <CustomerReview/>
      <Footer/>
    </div>
  );
}

export default App;