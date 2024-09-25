import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import StickyNavbar from "../../components/StickyNavbar";
import ServiceDetail from "../../components/ServiceDetail";

export const ServiceDetailPage = () => {
  return (
    <>
      <Header />
      <StickyNavbar />
      <div style={{ marginTop: "50px" }}>
        <ServiceDetail />
      </div>
      <Footer />
    </>
  );
};