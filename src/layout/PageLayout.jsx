import { Outlet } from "react-router-dom";
import Header from "../components/ComponentLayout/Header";
import Footer from "../components/ComponentLayout/Footer";
import BreadCrumb from "../components/ComponentLayout/Breadcrumb";

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