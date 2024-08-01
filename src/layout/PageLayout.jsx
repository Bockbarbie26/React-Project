import { Outlet } from "react-router-dom";
import Header from "../components/componentLayout/Header";
import Footer from "../components/componentLayout/Footer";
import BreadCrumb from "../components/componentLayout/Breadcrumb";

const PageLayout = () => {
    return (
        <>
            <Header/>
            <BreadCrumb/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default PageLayout;