import React, { SVGProps } from 'react'
import { FC } from 'react'

interface IDeleteIcon {
  width?: string;
  height?: string;
  svgProps?:  SVGProps<SVGSVGElement>;
  pathProps?: SVGProps<SVGPathElement>;
}

const DeleteIcon: FC<IDeleteIcon> = (props) => {
  const { height, width } = props;
  
  return (
    <svg 
      { ...props.svgProps }  
      className="fill-current text-osloGray-default cursor-pointer"   
      width={height} 
      height={width} 
      viewBox="0 0 17 20"
      xmlns="http://www.w3.org/2000/svg">
  
      <path 
        { ...props.pathProps } 
        d="M4.62489 19.8574H12.2714C13.5897 19.8574 14.4335 19.0752 14.495 17.748L15.0575 5.83008H15.9276C16.3847 5.83008 16.7274 5.4873 16.7274 5.03906C16.7274 4.59082 16.3847 4.24805 15.9276 4.24805H12.2802V3.01758C12.2802 1.70801 11.454 0.943359 10.0214 0.943359H6.85732C5.4247 0.943359 4.58974 1.70801 4.58974 3.01758V4.24805H0.959854C0.511612 4.24805 0.160049 4.59082 0.160049 5.03906C0.160049 5.4873 0.511612 5.83008 0.959854 5.83008H1.83876L2.39247 17.7568C2.45399 19.084 3.28896 19.8574 4.62489 19.8574ZM6.25087 3.08789C6.25087 2.68359 6.53212 2.41992 6.97157 2.41992H9.89833C10.3466 2.41992 10.6278 2.68359 10.6278 3.08789V4.24805H6.25087V3.08789ZM4.81825 18.2578C4.36122 18.2578 4.04482 17.9326 4.01845 17.4404L3.47353 5.83008H13.3964L12.869 17.4404C12.8427 17.9326 12.535 18.2578 12.0692 18.2578H4.81825ZM5.99599 16.957C6.37392 16.957 6.61122 16.7197 6.60243 16.377L6.34755 7.76367C6.33876 7.41211 6.09267 7.19238 5.7411 7.19238C5.37196 7.19238 5.13466 7.4209 5.15224 7.77246L5.39833 16.3857C5.40712 16.7285 5.65321 16.957 5.99599 16.957ZM8.44814 16.957C8.80849 16.957 9.05458 16.7285 9.05458 16.3857V7.76367C9.05458 7.4209 8.80849 7.19238 8.44814 7.19238C8.08778 7.19238 7.8329 7.4209 7.8329 7.76367V16.3857C7.8329 16.7285 8.08778 16.957 8.44814 16.957ZM10.8915 16.957C11.2343 16.957 11.4804 16.7285 11.4892 16.3857L11.7352 7.77246C11.7528 7.4209 11.5155 7.19238 11.1464 7.19238C10.7948 7.19238 10.5487 7.4209 10.5399 7.76367L10.2938 16.377C10.2763 16.7197 10.5136 16.957 10.8915 16.957Z"/>    
    </svg>
  )
}

DeleteIcon.defaultProps = {
  width: "8",
  height: "8"
}

export default DeleteIcon