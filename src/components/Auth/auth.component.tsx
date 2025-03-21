"use client";

import { Box, Divider, Grid2, Typography, useTheme } from "@mui/material";
import { SocialButtons } from "./Components/social-buttons";
import Image from "next/image";
import { AuthForm } from "./Components/Form";
import { useSession } from "next-auth/react";
import { Landing } from "../LandingPage";

const textColor = "#4C4D4F80";
const imgSrc =
  "https://s3-alpha-sig.figma.com/img/82ff/e72e/841fbdff050df0f091487898f7602b69?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dy04mxUE-OjsMy-Ppj9VEGSEABt8QLQiTPQVU4eWNr1h~QKVj4y0lqIuS7E1bOzAGJjlhtMCTe2nJPxSX8414c2lzRJhNxK8eCv~0Axu4rNMZuJSIaY4DE~Kh7k3HkZp5XpSmkY66B18-doForpamQB2jzRqp3tVBYdb-aZPSIbDHv4d7z3gVMCC-jsThK3jMAc1PGS1i8KfsHcbgbLsHknUYP-M5KnaiMEvow4jGpT8fp~RTOUFFgz9b~ydhKe5zmD-QWLWvgTDqpBHswEpT6iBkycL~RWpb4EwAszOPyWf3SUKUmqAg-iybECX7Qy1b889nkZE~4QjkRboKaFWwA__";

export const Auth = () => {
  const { data: session } = useSession();

  const { breakpoints } = useTheme();

  if (session) {
    return <Landing />;
  }

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ paddingTop: "47px" }}
    >
      <Grid2 container bgcolor={"white"} maxHeight={"943px"}>
        <Grid2 size={{ xs: 12, md: 7 }} p="40px">
          <Typography variant="h1" fontSize={"34px"} pl="16px">
            Create an account
          </Typography>
          <Typography mt="14px" fontSize={"14px"} pl="16px" color={textColor}>
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

          <SocialButtons />

          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            my="30px"
          >
            <Divider variant="fullWidth" sx={{ width: "45%" }} />
            <Typography p="10px" color={textColor}>
              Or
            </Typography>
            <Divider variant="fullWidth" sx={{ width: "45%" }} />
          </Box>

          <AuthForm />
        </Grid2>

        <Grid2
          size={{ md: 5 }}
          sx={{
            [breakpoints.down("md")]: {
              display: "none",
            },
          }}
        >
          <Image
            src={imgSrc}
            width={370}
            height={943}
            style={{ objectFit: "cover", maxHeight: "943px" }}
            alt={"img"}
          />
        </Grid2>
      </Grid2>
    </Box>
  );
};
