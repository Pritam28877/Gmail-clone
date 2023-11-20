import React from "react";
import { Box, Button, styled } from "@mui/material";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";

const ComposedButton = styled(Button)({
  background: "#c2e7ff",
  color: "#001d35",
  padding: 15,
  borderRadius: 16,
  minWidth: 145,
  textTransform:"none",
});

const SideBarContent = () => {
  return (
    <>
      <Box>
        <Box>
          <ComposedButton>
            <CreateOutlinedIcon />
            Compose
          </ComposedButton>
        </Box>
        <Box></Box>
      </Box>
    </>
  );
};

export default SideBarContent;
