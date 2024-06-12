import { SVGProps } from "react"

export const StrangeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="#2D76F9"
    {...props}
  >
    <rect
      width={25}
      height={5.469}
      rx={1}
      transform="matrix(1 0 0 -1 0 25)"
    />
    <rect
      width={14.063}
      height={5.469}
      rx={1}
      transform="matrix(1 0 0 -1 10.938 14.063)"
    />
    <rect
      width={25}
      height={5.469}
      rx={1}
      transform="matrix(0 1 1 0 0 0)"
    />
    <rect
      width={14.063}
      height={5.469}
      rx={1}
      transform="matrix(0 1 1 0 10.938 0)"
    />
  </svg>
)