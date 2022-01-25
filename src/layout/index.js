import React from "react";
import Navbar from "./navbar";
import { Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.css";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <Segment color="red" padded>
      {children}
      </Segment>
    </React.Fragment>
  );
};

export default Layout;
