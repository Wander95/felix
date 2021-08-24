import React, { FC } from 'react'

interface IInput {
  label?: string;
  placeholder?: string;
}

const Input:FC<IInput> = (props) => {
  const {  label,placeholder } = props;

  return (
    <div className="border-b border-teal-500 py-2">
      <span>{ label }</span>

      <input 
        className="appearance-none bg-green-content border-none w-full text-black-default mr-3 py-1 leading-tight focus:outline-none" 
        type="text" placeholder={ placeholder } aria-label="Full name"/>
    </div>
  )
}


Input.defaultProps = {
  label: 'No label provided'
}

export default Input
