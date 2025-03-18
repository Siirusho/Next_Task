"use client";

import { StyledContainer } from "../../Auth/Components/auth.styled";

export const VideoIframe = () => {
  return (
    <StyledContainer sx={{ background: "white" }}>
      <iframe
        height="100%"
        width="100%"
        style={{ borderRadius: "24px" }}
        key={"https://www.youtube.com/embed/uMttLe_xGq4"}
        src={"https://www.youtube.com/embed/uMttLe_xGq4"}
        allowFullScreen
        allow="autoplay; encrypted-media"
      />
    </StyledContainer>
  );
};
