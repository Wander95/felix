import React, { SVGProps } from 'react'
import { FC } from 'react'

interface IEditIcon {
  width?: string;
  height?: string;
  svgProps?:  SVGProps<SVGSVGElement>;
  pathProps?: SVGProps<SVGPathElement>;
}

const EditIcon: FC<IEditIcon> = (props) => {
  const { height, width } = props;
  return (
    <svg { ...props.svgProps } className="fill-current text-osloGray-default cursor-pointer"    width={height} height={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <path { ...props.pathProps } d="M16.6873 2.79389L17.3289 2.12592C17.6629 1.77436 17.6892 1.29096 17.3553 0.956973L17.1267 0.719669C16.8367 0.420841 16.3357 0.482364 16.0105 0.79877L15.3513 1.44916L16.6873 2.79389ZM6.92264 11.5478L8.65408 10.8271L16.0896 3.39154L14.7449 2.05561L7.31815 9.49115L6.56229 11.1787C6.4744 11.3984 6.7117 11.6269 6.92264 11.5478ZM3.70584 17.1992H13.3474C14.991 17.1992 15.9578 16.2412 15.9578 14.4306V5.70307L14.156 7.50483V14.246C14.156 15.0283 13.7517 15.4062 13.198 15.4062H3.84647C3.10818 15.4062 2.70389 15.0283 2.70389 14.246V5.10541C2.70389 4.33197 3.10818 3.95404 3.84647 3.95404H10.6756L12.4685 2.15229H3.70584C1.87772 2.15229 0.910919 3.11029 0.910919 4.92084V14.4306C0.910919 16.2412 1.87772 17.1992 3.70584 17.1992Z" />    
    </svg>
  )
}

EditIcon.defaultProps = {
  width: "8",
  height: "8"
}

export default EditIcon
