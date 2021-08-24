import React, { SVGProps } from 'react'
import { FC } from 'react'

interface IRemoveIcon {
  width?: string;
  height?: string;
  svgProps?:  SVGProps<SVGSVGElement>;
  pathProps?: SVGProps<SVGPathElement>;
}

const RemoveIcon: FC<IRemoveIcon> = (props) => {
  const { height, width } = props;
  return (
    <svg { ...props.svgProps } className="fill-current text-white-section"     width={height} height={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <path { ...props.pathProps } d="M10.744 1.02734C10.2857 0.56901 9.55234 0.56901 9.09401 1.02734L5.88568 4.23568L2.67734 1.02734C2.21901 0.56901 1.48568 0.56901 1.02734 1.02734C0.56901 1.48568 0.56901 2.21901 1.02734 2.67734L4.23568 5.88568L1.02734 9.09401C0.56901 9.55234 0.56901 10.2857 1.02734 10.744C1.25651 10.9732 1.55443 11.0878 1.85234 11.0878C2.15026 11.0878 2.44818 10.9732 2.67734 10.744L5.88568 7.53568L9.09401 10.744C9.32318 10.9732 9.62109 11.0878 9.91901 11.0878C10.2169 11.0878 10.5148 10.9732 10.744 10.744C11.2023 10.2857 11.2023 9.55234 10.744 9.09401L7.53568 5.88568L10.744 2.67734C11.2023 2.21901 11.2023 1.48568 10.744 1.02734Z"/>    
    </svg>
  )
}

RemoveIcon.defaultProps = {
  width: "8",
  height: "8"
}

export default RemoveIcon
