import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import "../../styles/GlobalStyle.css";

const Layout = ({ children }) => {
  return (
    <div id="root">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
