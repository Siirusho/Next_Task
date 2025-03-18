"use client";

import { Box, Typography } from "@mui/material";
import { TestimonialsSlider } from "./testimonials-slider";
import { VideoIframe } from "./video-iframe";
import { UploadCV } from "./upload-cv";
import { StyledContainer } from "../../Auth/Components/auth.styled";

export const Landing = () => {
  return (
    <Box display={"flex"} gap={2} flexWrap={"wrap"} justifyContent={"center"}>
      <VideoIframe />
      <UploadCV />
      <TestimonialsSlider />
      <StyledContainer>
        <Typography fontSize={"40px"}>Enhance with AI</Typography>
      </StyledContainer>
    </Box>
  );
};
