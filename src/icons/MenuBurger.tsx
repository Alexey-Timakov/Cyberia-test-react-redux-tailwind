import { SVGProps } from "react";

export const MenuByrgerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    stroke="#EEF3FF"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M4 16L28 16" stroke-width="2" stroke-linecap="round" />
    <path d="M4 9L28 9" stroke-width="2" stroke-linecap="round" />
    <path d="M4 23H28" stroke-width="2" stroke-linecap="round" />
  </svg>

);