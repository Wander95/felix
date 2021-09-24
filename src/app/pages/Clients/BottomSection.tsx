import React, { FC, MouseEvent } from 'react'
import Claims from './Claims'

interface IClaim {
  fechaSeguro?: string;
  seguro?: string;
}
interface IBottomSection {
  onClickHandler: (evt: MouseEvent<HTMLButtonElement>)=>void
  claims?: IClaim[],
}

const BottomSection: FC<IBottomSection> = (props) => {
  let { claims,onClickHandler } = props;
  
  // * validating that data is coming with information
  // * if not default the array to an empty one
  if( claims === undefined ) { claims = [] }
  
  return (
  <div className="px-12 py-8">
      <h2 className="text-xl">Reclamaciones medicas</h2>
      <div className="flex pt-6">
        {claims.map((claim,index)=>(
          <Claims key={`${index}-claims`} {...claim} onClickHandler={onClickHandler}/>
        ))}
      </div>
    </div>
  )
}

BottomSection.defaultProps = {
  claims: [
    {
      fechaSeguro: '21/05/2015',
      seguro: 'SENASA'
    },
    {
      fechaSeguro: '21/05/2014',
      seguro: 'PALIC'
    }
  ],
  onClickHandler: ()=>{}
}

export default BottomSection
