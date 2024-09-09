import { HeaderBefore } from "../components/HeaderBefore";
import Footer from "../components/Footer";
import StickyNavbar from "../components/StickyNavbar";
import { Service } from "../components/Service";

export const Servicepage = () => {
  return (
    <>
      <HeaderBefore />
      <StickyNavbar />
      <div style={{ marginTop: "50px" }}>
        <Service />
      </div>
      <Footer />
    </>
  );
};
