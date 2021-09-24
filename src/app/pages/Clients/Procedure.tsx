import React, { useState } from 'react'
import Modal from 'react-responsive-modal'
import AddIcon from '../../../assets/images/AddIcon'
import DeleteIcon from '../../../assets/images/DeleteIcon'
import EditIcon from '../../../assets/images/EditIcon'
import { Formik, Form, FormikHelpers, useFormikContext, withFormik } from 'formik';
import * as Yup from 'yup';

import './custom-modal.css'
import InputProcedure from './InputProcedure'
import { FC } from 'react'
import ConfirmationButtons from './ConfirmationButtons'
import ProcedureForm from './ProcedureForm'

export interface IProcedimiento {
  procedimiento: string;
  codigo: string;
  reclamo: string;
  diferencia: string;
  autorizado: string;
}

interface IProcedures {

}

const Procedures:FC<IProcedures> = (props) => {
  const [ isModalOpen, setIsModalOpen ] = useState(false)
  
  const onOpenModal = ()=>{
    setIsModalOpen(true)
  }

  const onCloseModal = ()=>{
    setIsModalOpen(false)
  }

  const onClickHandler = ()=>{
    onOpenModal()
  }
  return (
    <div className='bg-white-section flex justify-between py-4 px-5'>
      <span>Otroscopia</span> 
      <div className='flex'> 
        <DeleteIcon width='20' height='20' svgProps={{style:{marginRight:'1rem'}}}/> 
        <EditIcon  width='20' height='20' svgProps={{ onClick: onClickHandler }}/>
      </div>

      <Modal 				
        classNames={{
          modal: 'react-procedure-modal',
        }}
        open={ isModalOpen } 
        onClose={ onCloseModal }>

        <div className='flex pb-10'>
          <h2>Procedimientos</h2> 
            <div className="flex px-3">
              <AddIcon svgProps={{style:{marginRight:'0.4rem'}}}/>
              <button className="text-mountainMeadow-default font-bold">Añadir Procedimiento</button>
            </div>
        </div>
        <ProcedureForm onButtonCancelClick={ onCloseModal }/>
        
      </Modal>
    </div>
  )
}

export default Procedures
