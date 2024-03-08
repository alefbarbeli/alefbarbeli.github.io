import Popup from "@/components/popup/Popup";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import { Fragment } from "react";
const GlitcheLayout = ({ children }) => {
  return (
    <Fragment>
      <Popup />
      {/* Container */}
      <div className="container" style={{ margin: 0 }}>
        <Header />
        <div className="wrapper">
          {children}
        </div>
        <Footer />
        <div className="line top" />
        <div className="line bottom" />
        <div className="line left" />
        <div className="line right" />
      </div>
    </Fragment>
  );
};
export default GlitcheLayout;
