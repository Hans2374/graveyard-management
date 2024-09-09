import React from "react";
import { Header } from "../components/Header";
import Footer from "../components/Footer";
import StickyNavbar from "../components/StickyNavbar";
import FuneralService from "../components/FuneralService";

const FuneralServicePage = () => {
  return (
    <>
      <Header />
      <StickyNavbar />
      <div style={{ marginTop: "50px" }}>
        <FuneralService />
      </div>
      <Footer />
    </>
  );
};

export default FuneralServicePage;
