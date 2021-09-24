import React, { FC, MouseEvent } from 'react';
import BottomSection from './BottomSection';
import TopSection from './TopSection';
// A cada cliente se le debe agregar u
import './custom-modal.css'
import { useState } from 'react';
import ClaimDetail from './ClaimDetail';


interface IClientsProps {
  handlePath: (principal: string | null, path1: string | null) => void
}
const Clients: FC<IClientsProps> = ({ handlePath }) => {
  const onClickHandler: React.MouseEventHandler<HTMLButtonElement> | undefined = ()=>{
    handlePath(null, 'Juanita Lora')
  }

  const [ isVisible, setIsVisible ] = useState(true);
  const inpuntProps = {
    
  }
  
  const handler = (evt:MouseEvent<HTMLButtonElement>)=>{
    evt.stopPropagation()
    setIsVisible(false)
  }

	return (
    <>
    {/* <button onClick={on ClickHandler}>add client path</button> */}
      <TopSection />
      {
        isVisible 
        ? <BottomSection onClickHandler={handler} claims={undefined}/>
        : <ClaimDetail />
      }
    </>
	);
};

export default Clients;