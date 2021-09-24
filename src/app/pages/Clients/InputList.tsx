import React, { ChangeEvent, FocusEvent } from 'react'
import { FC } from 'react';
import InputProcedure from './InputProcedure';
interface IInputListProps {
  handleChange:{
    (e: React.ChangeEvent<any>): void; 
    <T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any> ? void : (e: string | ChangeEvent<any>) => void;
  };
  handleBlur: {
    (e: FocusEvent<any>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  inputItems: InputProps[]
}

interface InputProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
}

const InputList:FC<IInputListProps> = (props) => {
  const { handleBlur,handleChange, inputItems, children } = props; 

  return (
    <div className='flex pb-4'>
      {inputItems.map((_props,index)=>(
        <InputProcedure key={`input-props-${index}`} handleBlur={ handleBlur } handleChange={ handleChange } {..._props}/>
      ))}
      { children }
    </div>
  )
}

export default InputList
