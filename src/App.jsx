import React from "react";
// import MainPage from "./components/Page/MainPage";
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import ShopSystem from "./components/Page/ShopSystem";
import MainPage from './components/Page/MainPage';
import NotFound from "./components/Page/NotFound";
import Collection from "./components/Collections";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={MainPage}/>
        <Route path="/shopSystem" Component={ShopSystem}/>
        <Route path="/collections" Component={Collection}/>
        <Route Component={NotFound}/>
      </Routes>
    </Router>
  );
}

export default App;