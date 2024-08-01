import React from "react";
import { BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import MainPage from './Pages/MainPage';
import Collection from "./components/products/Collections";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import MainLayout from "./layout/MainLayout";
import PageLayout from "./layout/PageLayout";
import ShopSystem from "./Pages/ShopSystem";
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <>
    <Router> 
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPage />}/>
          <Route element={<NotFound/>}/>
        </Route>
        <Route path="/" element={<PageLayout/>}>
          <Route path="/collections" element={<Collection />}/>     
          <Route path="/account/login" element={<Login />}/>
          <Route path="/account/register" element={<Register />}/>
          <Route path="/shopSystem" element={<ShopSystem/>}/>
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;