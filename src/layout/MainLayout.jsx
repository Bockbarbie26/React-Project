import { Outlet } from "react-router-dom";
import Header from "../components/ComponentLayout/Header";
import Footer from "../components/ComponentLayout/Footer";

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