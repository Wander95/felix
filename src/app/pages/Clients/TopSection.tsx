import React from 'react'

const TopSection = () => {
  return (
    <div>
      <div className="px-10 bg-white-section">
      <div className=" p-6 flex justify-between items-center">
        <div className="flex">
          <div className="mr-4">
            <img className="shadow sm:w-12 sm:h-12 w-14 h-14 rounded-full" src="http://tailwindtemplates.io/wp-content/uploads/2019/03/link.jpg" alt="Avatar" />
          </div>
          <div>
            <h1 className="pb-4 text-xl font-medium text-gray-700">Josefa de la Rosa Jimeana</h1>
            <span className="pr-4 text-neutralBlack-default">Status</span> 
            <span className="border-2 border-osloGray-default py-1 px-3 rounded-md"> Escribe un status</span>
          </div>
        </div>
        <div className="flex">
            <span className=" hover:opacity-75 text-white rounded-full px-8 py-2">
              Records:
            </span>
              <select className="block w-40 text-blueLucki-default py-1 px-3 border border-gray-300 bg-white rounded-md  border-blueLucki-default" name="animals">
            <option value="dog">
              Mi Record
            </option>
            <option value="dog">
              Dog
            </option>
            <option value="cat">
              Cat
            </option>
            <option value="hamster">
              Hamster
            </option>
            <option value="parrot">
              Parrot
            </option>
            <option value="spider">
              Spider
            </option>
            <option value="goldfish">
              Goldfish
            </option>
          </select>
        </div>
        </div>
      </div>
      <div className="pl-7 flex -mx-4 space-x-2 overflow-x-auto overflow-y-hidden flex-nowrap  bg-white-section">
        
        <a href="#" className="flex items-center flex-shrink-0 px-1 py-2">
          <span>Resumen</span>
        </a>
        <a href="#" className="flex items-center flex-shrink-0 px-1 py-2">
          <span>Historial</span>
        </a>
        <a href="#" className="flex items-center flex-shrink-0 px-1 py-2 ">
          <span>Prescripciones</span>
        </a>
        <a href="#" className="flex items-center flex-shrink-0 px-1 py-2 ">
          <span>Notas</span>
        </a>
        <a href="#" className="flex items-center flex-shrink-0 px-1 py-2 ">
          <span>Proced/Cirugia</span>
        </a>
        
        <a href="#" className="flex items-center flex-shrink-0 px-1 py-2 border-b-2 text-mountainMeadow-default border-mountainMeadow-default">
          <span>Reclamaciones</span>
        </a>
        <a href="#" className="flex items-center flex-shrink-0 px-1 py-2 ">
          <span>Proced/Cirugia</span>
        </a>
        <div className="absolute right-16 shadow-2xl rounded-full h-10 w-10 bg-azulMarino-default text-3xl grid place-items-center font-bold text-white-section"> + </div>
      </div>
    </div>
    
  )
}

export default TopSection
