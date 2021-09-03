import React from "react";
import "../styles/header.css";
import HeaderNavBar from "./Header/HeaderNavBar";
import ListItems from "./Header/ListItems";

const Header = () => {
  return <HeaderNavBar children={<ListItems />} />;
};

export default Header;
