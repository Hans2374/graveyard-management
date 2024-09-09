import React from "react";
import { HeaderBefore } from "../components/HeaderBefore";
import Footer from "../components/Footer";
import StickyNavbar from "../components/StickyNavbar";
import FuneralService from "../components/FuneralService";

const FuneralServicePage = () => {
  return (
    <>
      <HeaderBefore />
      <StickyNavbar />
      <div style={{ marginTop: "50px" }}>
        <FuneralService />
      </div>
      <Footer />
    </>
  );
};

export default FuneralServicePage;
