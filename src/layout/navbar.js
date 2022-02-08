import React from "react";
import { Link } from "gatsby";
import { Menu, Dropdown, Icon, Image, Sidebar } from "semantic-ui-react";
import DWIcon from "../images/dwLogo.jpg";
import State from "../state";

const Navbar = ({ closeSidebar }) => {
  const state = React.useContext(State);
  var auth = state.auth;

  return (
    <React.Fragment>
      {/* // ! App Navigation */}
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        color="black"
        inverted
        vertical
        visible
        width="thin"
        direction="right"
      >
        <Menu.Item onClick={closeSidebar}>
          <Icon corner="top right" name="close" />
        </Menu.Item>

        {/* //* Checks to see if user is logged in to display their username and profile pic */}
        {auth.user.id ? (
          <Menu.Item>
            <Image src={DWIcon} size="tiny" spaced="left" circular centered />
            <p>{auth.user.userName}</p>
          </Menu.Item>
        ) : null}

        <Menu.Item as={Link} to="/">
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item as={Link} to="/sessions">
          <Icon name="users" />
          Sessions List
        </Menu.Item>
        <Menu.Item as={Link} to="/classes">
          <Icon name="file" />
          Classes List
        </Menu.Item>
        <Dropdown text="Other" icon="ellipsis horizontal" item>
          <Dropdown.Menu direction="left">
            <Dropdown.Item text="Other 1" />
            <Dropdown.Item text="Other 2" />
            <Dropdown.Item text="Other 3" />
          </Dropdown.Menu>
        </Dropdown>
          <Menu.Item as={Link} to="/settings">
          <Icon name="setting"/>
          Settings
          </Menu.Item>

        {/* //* If user is not logged in show menu item leading to login page or else show logout with onclick auth.logoutUser */}
        {auth.user.id ? (
          <Menu.Item onClick={auth.logoutUser}>
            <Icon name="user circle" /> Logout
          </Menu.Item>
        ) : (
          <Menu.Item as={Link} to="/login">
            <Icon name="user circle" /> Login
          </Menu.Item>
        )}
      </Sidebar>
    </React.Fragment>
  );
};

export default Navbar;
