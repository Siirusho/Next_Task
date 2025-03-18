import { Box, Button, styled } from "@mui/material";

export const StyledSocialButton = styled(Button)(() => ({
  width: "100%",
  borderRadius: "24px",
  fontSize: "14px",
  padding: "12px",
  textTransform: "capitalize",

  border: "1px solid #4C4D4F",
  color: "#4C4D4F",
}));

export const StyledSocialButtonsContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  marginTop: "39px",
  flexDirection: "column",
}));

export const StyledSubmitButton = styled(Button)(() => ({
  borderRadius: "24px",
  background: "#000000",
  padding: 15,
}));
