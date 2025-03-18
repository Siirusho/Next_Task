import { ReactNode } from "react";

export interface ButtonMapperProps {
  onClick: () => void;
  icon: ReactNode;
  label: string;
}
