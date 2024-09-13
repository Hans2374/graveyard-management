import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import StickyNavbar from "../../components/StickyNavbar";
import { Service } from "../../components/Service";

export const Servicepage = () => {
  return (
    <>
      <Header />
      <StickyNavbar />
      <div style={{ marginTop: "50px" }}>
        <Service />
      </div>
      <Footer />
    </>
  );
};
