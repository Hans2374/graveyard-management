import { Header } from "../../components/Header";
import StickyNavbar from "../../components/StickyNavbar";
import NewsContent from "../../components/NewsContent";
import Footer from "../../components/Footer";
import { useRef } from "react"; // Import useRef

export const News = () => {
  const footerRef = useRef(null); // Create a ref for the Footer
  return (
    <>
      <Header />
      <StickyNavbar />
      <NewsContent footerRef={footerRef} />
      <div ref={footerRef}>
        <Footer />
      </div>
    </>
  );
};


