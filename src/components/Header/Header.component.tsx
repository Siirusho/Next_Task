"use client";

import { Box, IconButton, styled, Typography } from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import LogoutIcon from "@mui/icons-material/Logout";

export const StyledLayout = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  background: "#f5eee6",
  paddingTop: "47px",
  paddingBottom: "47px",
});

export const Header = () => {
  const { data: session } = useSession();

  return (
    <Box p="14px" bgcolor={"white"} sx={{ position: "relative" }}>
      <Typography fontSize={"34px"} align="center">
        Alpheya
      </Typography>

      {session && (
        <IconButton
          sx={{ position: "absolute", top: 20, right: 20 }}
          onClick={() => signOut()}
        >
          <LogoutIcon />
        </IconButton>
      )}
    </Box>
  );
};
