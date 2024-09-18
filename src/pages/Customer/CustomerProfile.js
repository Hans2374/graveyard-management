import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import StickyNavbar from "../../components/StickyNavbar";
import CustomerProfileContent  from "../../components/CustomerProfileContent";

export const CustomerProfile = () => {
    return (
        <>
            <Header />
            <StickyNavbar />
            <CustomerProfileContent />
            <Footer />
        </>
    )
}


