import { ReactElement } from "react"

interface IVerticalDivider {
  verticalGap: number
}

export const VerticalDivider = ({ verticalGap }: IVerticalDivider): ReactElement<HTMLDivElement> => {
  return (
    <div style={{
      height: `${verticalGap}rem`
    }}></div>
  )
};