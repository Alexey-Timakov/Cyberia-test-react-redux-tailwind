import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./Loader.module.scss";
import cn from "classnames";

interface ILoader extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  size?: number;
  thick?: number;
}

export const Loader = ({ size = 50, thick = 5, className, ...props }: ILoader) => {
  return (
    <p
      style={{
        "width": `${size / 10}rem`,
        "height": `${size / 10}rem`,
        "lineHeight": `${size / 10}rem`,
        "borderWidth": `${thick / 10}rem`,
      }}
      className={cn(className, styles.rotating)}
      {...props}
    ></p>
  )
}