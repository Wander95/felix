import React, { FC } from 'react';
import AddIcon from '../../../assets/images/AddIcon';
import BottomSection from './BottomSection';
import Input from './Input';
import Procedure from './Procedure';
import TextArea from './TextArea';
import TopSection from './TopSection';
// A cada cliente se le debe agregar u
// import './custom-modal.css'
interface IClientsProps {
  handlePath: (principal: string | null, path1: string | null) => void
}
const Clients: FC<IClientsProps> = ({ handlePath }) => {
  const onClickHandler: React.MouseEventHandler<HTMLButtonElement> | undefined = ()=>{
    handlePath(null, 'Juanita Lora')
  }

  const inpuntProps = {
    
  }
  
	return (
    <>
    {/* <button onClick={on ClickHandler}>add client path</button> */}
      <TopSection />
      {/* <BottomSection /> */}
      <div className="px-12 py-8 w-3/12">
      <h2 className="text-xl">Nueva Reclamacion</h2>

      <div className="flex flex-col">
        <div className="py-3">
          <TextArea label='Diagnostico' placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing et.'/>
        </div>

        <div className="py-3">
          <Input label='No. Autorizacion' placeholder='84737-383'/>
        </div>

        <div className="py-3">
          <Input label='Fecha' placeholder='02/03/2021'/>
        </div>

        <div className="flex py-3">
          <span>Procedimientos o Servicios</span>
          <div className="flex px-3">
            <AddIcon />
            <button className="text-mountainMeadow-default font-bold">Añadir</button>
          </div>
        </div>
        <Procedure />
      </div> 
      </div>
    </>
	);
};

export default Clients;