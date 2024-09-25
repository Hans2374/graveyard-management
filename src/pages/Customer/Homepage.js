import { Header } from "../../components/Header";
import HomePage from "../../components/HomePageContent";
import Footer from "../../components/Footer";
import StickyNavbar from "../../components/StickyNavbar";
import { useRef } from "react"; // Import useRef

export const Homepage = () => {
  const footerRef = useRef(null); // Create a ref for the Footer
  return (
    <>
      <Header />
      <StickyNavbar />
      {/* Pass footerRef as a prop to HomePage */}
      <HomePage footerRef={footerRef} />
      {/* Use footerRef here */}
      <div ref={footerRef}>
        <Footer />
      </div>
    </>
  );
};
