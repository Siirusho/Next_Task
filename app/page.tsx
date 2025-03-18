import { Box } from "@mui/material";
import dynamic from "next/dynamic";

const Auth = dynamic(() =>
  import("@/src/components").then((module) => ({
    default: module.Auth,
  }))
);

const AuthPage = async () => {
  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
      <Auth />
    </Box>
  );
};

export default AuthPage;
