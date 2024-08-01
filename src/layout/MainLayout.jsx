import { Outlet } from "react-router-dom";
import Header from "../components/componentLayout/Header";
import Footer from "../components/componentLayout/Footer";

const MainLayout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default MainLayout;