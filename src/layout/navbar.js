import React, { useState } from "react";
import { Link } from "gatsby";
import { Menu, Dropdown, Icon, Image, Sidebar } from "semantic-ui-react";
import Logo from "../images/dungeon-world.png";
import DWIcon from "../images/dwLogo.jpg";

const Navbar = () => {
  // const loginCom = () => {
  //   return (
  //     <Menu.Item onClick={login}>
  //       <Link to="/login">Login</Link>
  //     </Menu.Item>
  //   );
  // };

  // const logoutCom = () => {
  //   return (
  // <Menu.Item vertical onClick={logout}>
  //   <Icon size="big" name="user circle" />
  //   Username
  // </Menu.Item>

  //     <Dropdown text="Username" icon="user circle">
  //       <Dropdown.Menu>
  //         <Dropdown.Item text="Profile Settings" />
  //         <Dropdown.Item text="Logout" onClick={logout} />
  //       </Dropdown.Menu>
  //     </Dropdown>
  //   );
  // };

  // const [setLoginCheck] = React.useState(false);

  // function login() {
  //   setLoginCheck(true);
  // }

  // function logout() {
  //   setLoginCheck(false);
  // }

  return (
    <React.Fragment>
      {/* // ! Web Navigation */}
      <Menu color="grey" inverted fluid>
        <Menu.Item>
          <Image src={Logo} size="small" />
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item>
            <Icon color="black" name="bars" size="big" />
          </Menu.Item>
        </Menu.Menu>
      </Menu>

      {/* // ! App Navigation */}
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        color="grey"
        inverted
        vertical
        visible
        width="thin"
        direction="right"
      >
        <Menu.Item>
          <Image src={DWIcon} size="tiny" spaced="left" circular centered />
          <p>User Name</p>
        </Menu.Item>
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
        <Menu.Item as={Link} to="/login">
          <Icon name="user circle" />
          Login
          {/* {loginCom} */}
          {/* {logoutCom} */}
          {/* {setLoginCheck ? { loginCom } : { logoutCom }}; */}
          {/* {check} */}
        </Menu.Item>
      </Sidebar>
    </React.Fragment>
  );
};

export default Navbar;
