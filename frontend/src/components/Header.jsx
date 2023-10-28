import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { gmailLogo } from "../constants/constant";

const StyledAppBar = styled(AppBar)({
  background: "#F5F5F5",
  boxShadow: "none",
});
const Header = () => {
  return (
    <>
      <StyledAppBar position="static">
        <Toolbar>
          <MenuIcon color="action" />
          <img
            src={gmailLogo}
            alt="gmail logo"
            style={{ width: 110, marginLeft: 20 }}
          />
        </Toolbar>
      </StyledAppBar>
    </>
  );
};

export default Header;
