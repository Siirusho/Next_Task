import { StaticImageData } from "next/image";

export interface ButtonMapperProps {
  onClick: () => void;
  icon: StaticImageData;
  label: string;
}

export interface UserCredentialsProps {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  consent?: boolean;
}