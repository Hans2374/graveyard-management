import React from "react";
import { HeaderBefore } from "../components/HeaderBefore";
import Footer from "../components/Footer";
import StickyNavbar from "../components/StickyNavbar";
import PeriodicOffering from "../components/PeriodicOffering";

const PeriodicOfferingPage = () => {
  return (
    <>
      <HeaderBefore />
      <StickyNavbar />
      <div style={{ marginTop: "50px" }}>
        <PeriodicOffering />
      </div>
      <Footer />
    </>
  );
};

export default PeriodicOfferingPage;
