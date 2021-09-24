import React, { FC } from 'react'

interface IConfirmationButtons {
  onButtonCancelClick: ()=>void
}


const ConfirmationButtons:FC<IConfirmationButtons> = (props) => {
  const { onButtonCancelClick } = props;
  return (
    <div className="flex justify-end pt-16">
      <div className="flex">
        <button onClick={ onButtonCancelClick } type="button" className="cancel border-2 border-greySnuff-default rounded-lg w-32 h-11 text-grayStorm-default raleway-font font-medium text-base">
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
  )
}

export default ConfirmationButtons
