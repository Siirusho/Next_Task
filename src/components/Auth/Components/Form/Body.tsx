import { Box, Typography } from "@mui/material";
import React from "react";
import { TextField } from "./FormComponents/TextField";
import { StyledSubmitButton } from "../auth.styled";
import { ConsentCheckbox } from "./FormComponents/Consent";

export const AuthFormBody = () => {
  return (
    <Box display={"flex"} gap={2} flexDirection={"column"}>
      <Box display={"flex"} gap={3} flexDirection={"column"}>
        <Box display={"flex"} gap={3} justifyContent={"space-between"}>
          <TextField
            fieldName="firstName"
            label="First Name"
            placeholder="Jane"
          />
          <TextField fieldName="lastName" label="Last Name" placeholder="Doe" />
        </Box>
        <TextField
          fieldName="email"
          label="Email"
          placeholder="Jane@gmail.com"
        />
        <TextField
          fieldName="password"
          label="Password"
          placeholder="********"
        />
      </Box>

      <ConsentCheckbox
        fieldName="consent"
        label="Subscribe to our monthly newsletter"
      />

      <Typography fontSize={"12px"} color="#4C4D4F80">
        By clicking below you agree to our Terms of Service and Privacy Policy
      </Typography>
      <StyledSubmitButton type="submit" variant="contained">
        Sign up
      </StyledSubmitButton>

      <Typography align="center" fontSize={"14px"} color={"#4C4D4F80"}>
        Already have an account?{" "}
        <Typography
          component={"span"}
          display={"inline"}
          fontSize={"14px"}
          color="black"
          sx={{ textDecoration: "underline" }}
        >
          Log in
        </Typography>
      </Typography>
    </Box>
  );
};
