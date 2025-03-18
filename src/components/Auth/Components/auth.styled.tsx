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

export const StyledContainer = styled(Box)(({ theme: { breakpoints } }) => ({
  [breakpoints.up("md")]: {
    width: "614px",
    height: "367px",
  },
  [breakpoints.between("sm", "md")]: {
    width: "414px",
    height: "267px",
  },
  [breakpoints.down("sm")]: {
    width: "314px",
    height: "267px",
  },
  background: "linear-gradient(108.58deg, #DBB898 25.3%, #9DC1CE 82.65%)",
  borderRadius: "14px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}));
