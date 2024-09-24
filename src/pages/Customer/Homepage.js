import { Header } from "../../components/Header";
import HomePage from "../../components/HomePageContent";
import Footer from "../../components/Footer";
import StickyNavbar from "../../components/StickyNavbar";

export const Homepage = () => {
  return (
    <>
      <Header />
      <StickyNavbar />
      <HomePage />
      <Footer />
    </>
  );
};
