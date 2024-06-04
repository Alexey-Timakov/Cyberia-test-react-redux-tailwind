import { LogoIcon } from "@/icons";
import { DetailedHTMLProps, HTMLAttributes, ReactElement } from "react";

interface IHeader extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

export const Header = ({ className, ...props }: IHeader): ReactElement => {
  return (
    <header className={className} {...props}>
      <LogoIcon />
      <p>Header</p>
    </header>
  )
};