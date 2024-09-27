import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import StickyNavbar from "../../components/StickyNavbar";
import { Service } from "../../components/Service";
import { useRef } from "react"; // Import useRef

export const Servicepage = () => {
  const footerRef = useRef(null); // Create a ref for the Footer
  return (
    <>
      <Header />
      <StickyNavbar />
      <div style={{ marginTop: "50px" }}>
        <Service footerRef={footerRef} />
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
    </>
  );
};
