import React from "react";
// import MainPage from "./components/Page/MainPage";
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import ShopSystem from "./components/Page/ShopSystem";
import MainPage from './components/Page/MainPage';
import NotFound from "./components/Page/NotFound";
import Collection from "./components/Collections";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={MainPage}/>
        <Route path="/shopSystem" Component={ShopSystem}/>
        <Route path="/collections" Component={Collection}/>
        <Route Component={NotFound}/>
        <Route path="/account/login" Component={Login}/>
        <Route path="/account/register" Component={Register}/>
      </Routes>
    </Router>
  );
}

export default App;