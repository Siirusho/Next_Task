import { Header } from "@/src/components/Header/Header.component";
import dynamic from "next/dynamic";

const Auth = dynamic(() =>
  import("@/src/components").then((module) => ({
    default: module.Auth,
  }))
);

const AuthPage = async () => {
  return (
    <>
      <Header />
      <Auth />
    </>
  );
};

export default AuthPage;
