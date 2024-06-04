import { DetailedHTMLProps, HTMLAttributes, ReactElement } from "react";

interface IFooter extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

export const Footer = ({ className, ...props }: IFooter): ReactElement => {
  return (
    <div className={className} {...props}><h1>Footer</h1></div>
  )
};