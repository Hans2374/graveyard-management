import React from "react";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import StickyNavbar from "../../components/StickyNavbar";
import PeriodicOffering from "../../components/PeriodicOffering";

const PeriodicOfferingPage = () => {
  return (
    <>
      <Header />
      <StickyNavbar />
      <div style={{ marginTop: "50px" }}>
        <PeriodicOffering />
      </div>
      <Footer />
    </>
  );
};

export default PeriodicOfferingPage;
