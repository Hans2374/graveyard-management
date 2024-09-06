import { HeaderBefore } from "../components/Header";
import HomePage from "../components/HomePageContent";
import Footer from "../components/Footer";
import StickyNavbar from "../components/StickyNavbar";

export const HomepageBefore = () => {
  return (
    <>
      <HeaderBefore />
      <StickyNavbar/>
      <HomePage />
      <Footer />
    </>
  );
};