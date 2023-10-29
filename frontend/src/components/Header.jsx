import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import InputBase from "@mui/material/InputBase";
import { Box } from "@mui/system";
import { gmailLogo } from "../constants/constant";

const StyledAppBar = styled(AppBar)({
  background: "#F5F5F5",
  boxShadow: "none",
  borderRadius: 8,
});
const SearchWraper = styled(Box)({
  background: "#EAF1FB",
  marginLeft: 80,
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
          <SearchWraper>
            <SearchIcon color="action" style={{ margintop: 20 }} />
            <InputBase
              placeholder="Search mail"
              inputProps={{ "aria-label": "search" }}
              style={{ marginLeft: 10 }}
            />
            <TuneIcon color="action" />
          </SearchWraper>
        </Toolbar>
      </StyledAppBar>
    </>
  );
};

export default Header;
