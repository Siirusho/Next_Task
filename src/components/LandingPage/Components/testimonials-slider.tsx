"use client";

import { useState, useEffect, useCallback } from "react";
import Facebook from "../../../../public/logos_facebook.png";
import Google from "../../../../public/google.png";
import Twitter from "../../../../public/twitter.png";
import Image from "next/image";
import { Box, IconButton, Typography } from "@mui/material";
import { StyledContainer } from "../../Auth/Components/auth.styled";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const testimonials = [
  {
    image: Facebook,
    text: "I have tested out your app and I really liked how simple, detailed and easy to use it is.",
    author: "James",
  },
  {
    image: Google,
    text: "I appreciate the feedback regarding my investments. It's concise and straight to the point. This is a great tool!",
    author: "Emilie",
  },
  {
    image: Twitter,
    text: "Your app really helped me better understand the dynamics of the stock market.",
    author: "Anderson",
  },
];

export const TestimonialsSlider = () => {
  const [index, setIndex] = useState(0);

  const addIndex = useCallback(
    (increase: boolean) => {
      if (increase) {
        setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        return;
      }

      if (index === 0) {
        setIndex(testimonials.length - 1);
      } else {
        setIndex((prevIndex) => (prevIndex - 1) % testimonials.length);
      }
    },
    [index]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      addIndex(true);
    }, 5000);

    return () => clearInterval(interval);
  }, [index, addIndex]);

  return (
    <StyledContainer>
      <Image
        src={testimonials[index].image}
        alt="Testimonial"
        height={40}
        width={40}
      />
      <Typography align="center" my="20px" px="30px">
        {`"${testimonials[index].text}"`}
      </Typography>
      <Typography align="center">- {testimonials[index].author}</Typography>

      <Box display={"flex"} mt={"16px"} gap={1}>
        <IconButton onClick={() => addIndex(true)} sx={{ border: "1px solid" }}>
          <ArrowBack />
        </IconButton>
        <IconButton
          onClick={() => addIndex(false)}
          sx={{ border: "1px solid" }}
        >
          <ArrowForward />
        </IconButton>
      </Box>
    </StyledContainer>
  );
};
