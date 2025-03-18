import { FC } from "react";
import {
  StyledSocialButton,
  StyledSocialButtonsContainer,
} from "./auth.styled";
import { ButtonMapperProps } from "../login.types";
import Facebook from "../../../../public/logos_facebook.png";
import Google from "../../../../public/google.png";
import Twitter from "../../../../public/twitter.png";
import Image from "next/image";
import { signIn } from "next-auth/react";

const buttonContent = [
  {
    onClick: () => console.log,
    icon: Facebook,
    label: "Continue with Facebook",
  },
  {
    onClick: () => signIn("google"),
    icon: Google,
    label: "Continue with Google",
  },
  {
    onClick: () => console.log,
    icon: Twitter,
    label: "Continue with Twitter",
  },
];

export const SocialButtons: FC = () => (
  <StyledSocialButtonsContainer>
    {buttonContent.map(buttonMapper)}
  </StyledSocialButtonsContainer>
);

export const buttonMapper = ({ onClick, icon, label }: ButtonMapperProps) => (
  <StyledSocialButton
    onClick={onClick}
    startIcon={<Image src={icon} width={24} height={24} alt="" />}
    key={label}
  >
    {label}
  </StyledSocialButton>
);
