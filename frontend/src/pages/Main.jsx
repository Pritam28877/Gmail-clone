import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const Main = () => {
  const [open, setOpen] = useState(true);
  const taggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };
  console.log(open);
  return (
    <>
      <Header taggleDrawer={taggleDrawer} />
      <SideBar open={open} />
    </>
  );
};

export default Main;
