"use client";

import { Box, styled, Typography } from "@mui/material";

export const StyledLayout = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  background: "#f5eee6",
  paddingTop: "47px",
});

export const Header = () => {
  return (
    <Box p="14px" bgcolor={"white"}>
      <Typography fontSize={"34px"} align="center">
        Alpheya
      </Typography>
    </Box>
  );
};
