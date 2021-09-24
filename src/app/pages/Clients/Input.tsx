import React, { ChangeEvent, FC } from 'react'

interface IInput {
  label?: string;
  placeholder?: string;
  onChange: { (e: ChangeEvent<any>): void; <T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any> ? void : (e: string | ChangeEvent<any>) => void; };
  value: string;
  name: string;
    onBlur: {(e: React.FocusEvent<any>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;}
}

const Input:FC<IInput> = (props) => {
  const {  label,placeholder,value,onChange,name } = props;

  return (
    <div className="border-b border-teal-500 py-2">
      <span>{ label }</span>

      <input 
        {...props}
        id={ name }
        onChange ={ onChange }
        value={ value }
        className="appearance-none bg-green-content border-none w-full text-black-default mr-3 py-1 leading-tight focus:outline-none" 
        type="text" placeholder={ placeholder } aria-label="Full name"/>
    </div>
  )
}


Input.defaultProps = {
  label: 'No label provided'
}

export default Input
