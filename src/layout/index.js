import React, { useState } from "react";
import Navbar from "./navbar";
import { Segment, Menu, Icon, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.css";
import Logo from "../images/dungeon-world.png";

const Layout = ({ children }) => {
  // * Opens and closes sidebar Menu
  const [sidebar, setSidebar] = useState(false);

  function openSidebar() {
    setSidebar(true);
  }

  function closeSidebar() {
    setSidebar(false);
  }

  return (
    <React.Fragment>
      {/* // ! Web Navigation */}
      <Menu color="red" inverted fluid>
        <Menu.Item>
          <Image src={Logo} size="small" />
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item onClick={openSidebar}>
            <Icon color="black" name="bars" size="big" />
          </Menu.Item>
        </Menu.Menu>
      </Menu>

      {/* // ! App Navigation */}
      {sidebar ? <Navbar closeSidebar={closeSidebar} /> : null}

      {/* // ! App Content */}
      <Segment color="black" padded>
        {children}
      </Segment>
    </React.Fragment>
  );
};

export default Layout;
