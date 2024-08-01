import React from "react";
import { BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import MainPage from './Pages/MainPage';
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import MainLayout from "./layout/MainLayout";
import PageLayout from "./layout/PageLayout";
import ShopSystem from "./Pages/ShopSystem";
import NotFound from "./Pages/NotFound";
import Collection from "./Pages/Collections";
import Sales from "./components/sales/Sales";

const App = () => {
  return (
    <>
    <Router> 
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPage />}/>
          <Route path="/rooms" element={<MainPage/>}/>
          <Route element={<NotFound/>}/>
        </Route>
        <Route path="/" element={<PageLayout/>}>
          <Route path="/collections" element={<Collection />}>
            <Route path="/collections/phong-khach" element={<Collection/>}/>
            <Route path="/collections/phong-ngu" element={<Collection/>}/>
            <Route path="/collections/phong-bep" element={<Collection/>}/>
          </Route>    
          <Route path="account/login" element={<Login />}/>
          <Route path="account/register" element={<Register />}/>
          <Route path="shopSystem" element={<ShopSystem/>}/>
          <Route path="sales" element={<Sales/>}/>
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;