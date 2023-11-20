import React from "react";
import { Box, Button, List, ListItem, styled } from "@mui/material";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { SIDEBAR_DATA } from "../config/sidebar.config";

const ComposedButton = styled(Button)({
  background: "#c2e7ff",
  color: "#001d35",
  padding: 15,
  borderRadius: 16,
  minWidth: 145,
  textTransform: "none",
});

const SideBarContent = () => {
  return (
    <>
      <Box>
        <ComposedButton>
          <CreateOutlinedIcon />
          Compose
        </ComposedButton>
        <List>
          {SIDEBAR_DATA.map((data) => (
            <ListItem>
              <data.icon />
              {data.title}
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default SideBarContent;
