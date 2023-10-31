import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import InputBase from "@mui/material/InputBase";
import { Box } from "@mui/system";
import { gmailLogo } from "../constants/constant";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const StyledAppBar = styled(AppBar)({
  background: "#F5F5F5",
  boxShadow: "none",
});

const SearchWraper = styled(Box)({
  background: "#EAF1FB",
  marginLeft: 80,
  borderRadius: 8,
  minWidth: 690,
  maxWidth: 720,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0px 10px",
  "& > div": {
    width: "100%",
    padding: "0px 10px",
  },
});

const OptionsWraper = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  "& > svg": {
    marginLeft: 20,
  },
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

          <OptionsWraper>
            <HelpOutlineOutlinedIcon color="action" />
            <SettingsOutlinedIcon color="action" />
            <AppsOutlinedIcon color="action" />
            <AccountCircleOutlinedIcon color="action" />
          </OptionsWraper>
        </Toolbar>
      </StyledAppBar>
    </>
  );
};

export default Header;
