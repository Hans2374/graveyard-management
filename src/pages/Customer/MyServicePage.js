import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import StickyNavbar from "../../components/StickyNavbar";
import MyService from "../../components/MyService";

export const Myservicepage = () => {
  return (
    <>
      <Header />
      <StickyNavbar />
      <div style={{ marginTop: "50px" }}>
        <MyService />
      </div>
      <Footer />
    </>
  );
};

export default Myservicepage;
