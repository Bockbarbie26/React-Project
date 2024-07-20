import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCategory from "./components/ProductCategory";
import Promotions from "./components/Promotion";
import CustomerReview from "./components/CustomerReview";

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