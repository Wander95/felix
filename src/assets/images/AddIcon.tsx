import React, { SVGProps } from 'react'
import { FC } from 'react'

interface IAddIcon {
  width?: string;
  height?: string;
  svgProps?:  SVGProps<SVGSVGElement>;
  pathProps?: SVGProps<SVGPathElement>;
}

const AddIcon: FC<IAddIcon> = (props) => {
  const { height, width } = props;
  return (
    <svg className="relative top-1 fill-current text-mountainMeadow-default" { ...props.svgProps } width={height} height={width} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="" { ...props.pathProps } d="M1.37109 9.67285H6.54688V14.8486C6.54688 15.6006 7.16211 16.2158 7.91406 16.2158C8.66602 16.2158 9.28125 15.6006 9.28125 14.8486V9.67285H14.457C15.209 9.67285 15.8242 9.06738 15.8242 8.30566C15.8242 7.55371 15.209 6.94824 14.457 6.94824H9.28125V1.77246C9.28125 1.02051 8.66602 0.405273 7.91406 0.405273C7.16211 0.405273 6.54688 1.02051 6.54688 1.77246V6.94824H1.37109C0.619141 6.94824 0.00390625 7.55371 0.00390625 8.30566C0.00390625 9.06738 0.619141 9.67285 1.37109 9.67285Z"/>    
    </svg>
  )
}

AddIcon.defaultProps = {
  width: "18",
  height: "18"
}

export default AddIcon
