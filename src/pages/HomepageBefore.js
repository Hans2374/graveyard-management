import { HeaderBefore } from "../components/HeaderBefore";
import HomePage from "../components/HomePage";
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