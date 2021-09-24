import React, { ChangeEvent, FC } from 'react'

interface ITextArea {
  label: string;
  placeholder: string;
  onChange: { (e: ChangeEvent<any>): void; <T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any> ? void : (e: string | ChangeEvent<any>) => void; };
  value: string;
  name: string;
  onBlur: {(e: React.FocusEvent<any>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;}
}

const TextArea: FC<ITextArea> = (props) => {
  const { label, placeholder, onChange, value, onBlur, name } = props;

  return (
  <div className="border-b border-teal-500 py-2">
    <span className="text-lg ">{ label }</span>

    <textarea 
      onBlur={ onBlur }
      id={ name }
      name={ name }
      value={ value }
      onChange={ onChange }
      className="appearance-none bg-green-content border-none w-full text-black-default mr-3 py-1 leading-tight focus:outline-none" 
      placeholder={ placeholder } aria-label="Full name"/>
  </div>
  )
}

TextArea.defaultProps = {
  label: 'no label',
  placeholder: 'no placeholder'
}


export default TextArea
