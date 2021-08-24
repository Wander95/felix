import React, { useState } from 'react'
import Modal from 'react-responsive-modal'
import AddIcon from '../../../assets/images/AddIcon'
import DeleteIcon from '../../../assets/images/DeleteIcon'
import EditIcon from '../../../assets/images/EditIcon'
// import './custom-modal.css'

const Procedures = () => {
  const [ isModalOpen, setIsModalOpen ] = useState(true)

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
          overlay: ''
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

        <div className='flex pb-4'>
          <div>
            <label htmlFor="" className="mb-1 block">Procedimiento 01</label>
            <input placeholder="Ej: 456353" type="text" className="border-2 mr-12	border-summerGreen-default rounded-md w-40 h-9 pl-4 pr-7 text-base OpenSansRegular text-osloGray-default bg-white-lilac" />
          </div>
          <div>
            <label htmlFor="" className="mb-1 block">Codigo</label>
            <input placeholder="Ej: 456353" type="text" className="border-2 mr-4	border-summerGreen-default rounded-md w-32 h-9 pl-4 pr-7 text-base OpenSansRegular text-osloGray-default bg-white-lilac" />
          </div>
          <div>
            <label htmlFor="" className="mb-1 block">Reclamo RD$</label>
            <input placeholder="Ej: 456353" type="text" className="border-2 mr-4	border-summerGreen-default rounded-md w-32 h-9 pl-4 pr-7 text-base OpenSansRegular text-osloGray-default bg-white-lilac" />
          </div>
          <div>
            <label htmlFor="" className="mb-1 block">Diferencia RD$</label>
            <input placeholder="Ej: 456353" type="text" className="border-2 mr-4	border-summerGreen-default rounded-md w-32 h-9 pl-4 pr-7 text-base OpenSansRegular text-osloGray-default bg-white-lilac" />
          </div>
          <div>
            <label htmlFor="" className="mb-1 block">Autorizado RD$</label>
            <input placeholder="Ej: 456353" type="text" className="border-2	border-summerGreen-default rounded-md w-32 h-9 pl-4 pr-7 text-base OpenSansRegular text-osloGray-default bg-white-lilac" />
          </div>

        </div>

          <div className="flex justify-end pt-16">
						
						<div className="flex">
							<button className="cancel border-2 border-greySnuff-default rounded-lg w-32 h-11 text-grayStorm-default raleway-font font-medium text-base">
								CANCELAR
							</button>
							<button
								type="submit"
								className="ml-5 text-white-section cancel w-32 h-11 raleway-font font-medium text-base rounded-lg  bg-azulMarino-default flex items-center justify-center"
							>
								<svg
									width="15"
									height="14"
									viewBox="0 0 15 14"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="mr-2.5"
								>
									<path
										d="M5.60938 13.9453C6.19531 13.9453 6.64844 13.7266 6.96094 13.2656L13.8047 2.9375C14.0234 2.60938 14.1172 2.28125 14.1172 1.98438C14.1172 1.16406 13.4844 0.554688 12.6406 0.554688C12.0703 0.554688 11.7031 0.765625 11.3516 1.3125L5.57812 10.375L2.67969 6.91406C2.375 6.54688 2.02344 6.38281 1.53906 6.38281C0.695312 6.38281 0.0703125 6.99219 0.0703125 7.82031C0.0703125 8.19531 0.179688 8.5 0.5 8.86719L4.30469 13.3438C4.65625 13.7578 5.07031 13.9453 5.60938 13.9453Z"
										fill="white"
									/>
								</svg>
								GUARDAR CAMBIOS
							</button>
						</div>
					</div>
      </Modal>
    </div>
  )
}

export default Procedures
