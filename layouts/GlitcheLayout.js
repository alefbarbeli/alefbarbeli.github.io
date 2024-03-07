import Popup from "@/components/popup/Popup";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import { Fragment } from "react";
import OnePageHeader from "./OnePageHeader";
const GlitcheLayout = ({ children, onepage = false, dark }) => {
  return (
    <Fragment>
      <Popup />
      {/* Container */}
      <div className="container" style={{ margin: 0 }}>
        {/* Header */}
        {onepage ? <OnePageHeader /> : <Header dark={dark} />}
        {/* Wrapper */}
        <div className="wrapper">
          {/* Started */}
          {children}
        </div>
        {/* Footer */}
        <Footer />
        {/* Lines */}
        <div className="line top" />
        <div className="line bottom" />
        <div className="line left" />
        <div className="line right" />
      </div>
    </Fragment>
  );
};
export default GlitcheLayout;
