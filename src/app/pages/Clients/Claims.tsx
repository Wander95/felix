import React, { MouseEvent } from 'react'
import { useState } from 'react';
import { FC } from 'react'
import Modal from 'react-responsive-modal';
import RemoveIcon from '../../../assets/images/Remove.icon'

export interface IClaim {
  fechaSeguro?: string;
  seguro?: string;
  onClickHandler: (evt: MouseEvent<HTMLButtonElement>)=>void
}
const Claims:FC<IClaim> = (props) => {
  const { fechaSeguro,seguro, onClickHandler } = props;

  const [ isModelOpen,setIsModelOpen ] = useState(false);

  const onModelOpen = (evt:React.MouseEvent<HTMLDivElement>)=>{
    evt.stopPropagation()
    setIsModelOpen(true)
  }

  const onModelClose = ()=>{
    setIsModelOpen(false)
  }



  return (
    <div>
      <Modal open={ isModelOpen } onClose={ onModelClose } />
      <button onClick={ onClickHandler } className="claim-remove-icon-container  relative mr-8 mb-2 py-4 px-7 text-2xl rounded-md border-5 border-2 border-blueLucki-default">
        R
        <div onClick={ onModelOpen }  className="claim-remove-icon absolute right-0 top-0 rounded-sm p-1 bg-azulMarino-default place-items-center text-xs text-white-section">
          <RemoveIcon />
        </div>
      </button>
      <span className="block text-sm">{ fechaSeguro }</span>
      <span className="block text-sm">{ seguro }</span>
    </div>
  )
}

Claims.defaultProps = {
  fechaSeguro: '21/05/2015',
  seguro: 'CENASA'
} 

export default Claims
