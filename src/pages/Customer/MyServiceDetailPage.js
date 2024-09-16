import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import StickyNavbar from "../../components/StickyNavbar";
import MyServiceDetail from "../../components/MyServiceDetail";

export const Myservicedetailpage = () => {
  return (
    <>
      <Header />
      <StickyNavbar />
      <div style={{ marginTop: "50px" }}>
        <MyServiceDetail />
      </div>
      <Footer />
    </>
  );
};

export default Myservicedetailpage;
