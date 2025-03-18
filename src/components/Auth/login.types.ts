import { StaticImageData } from "next/image";

export interface ButtonMapperProps {
  onClick: () => void;
  icon: StaticImageData;
  label: string;
}
