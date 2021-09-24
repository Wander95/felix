import { ErrorMessage } from 'formik';
import React, { ChangeEvent, FocusEvent } from 'react'
import { FC } from 'react'

interface IInputProcedure {
  handleChange:{
    (e: React.ChangeEvent<any>): void; 
    <T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any> ? void : (e: string | ChangeEvent<any>) => void;
  };
  handleBlur: {
    (e: FocusEvent<any>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  value: string | number;
  id: string;
  placeholder: string;
  label: string;
}

const InputProcedure:FC<IInputProcedure> = (props) => {
  const { handleBlur,handleChange,id,label,placeholder,value } = props;
  return (
    <div>
      <label htmlFor={ id } className="mb-1 block"> {label} </label>
      <input name={id} id={id} onChange={ handleChange } onBlur={ handleBlur } value={value} 
        placeholder={ placeholder } type="text" 
        className="border-2 mr-4	border-summerGreen-default rounded-md w-32 h-9 pl-4 pr-7 text-base OpenSansRegular text-osloGray-default bg-white-lilac" />
      <p className="text-red-default text-sm OpenSansRegular">
        <ErrorMessage name={id}/>
      </p>
    </div>
  )
}

export default InputProcedure
