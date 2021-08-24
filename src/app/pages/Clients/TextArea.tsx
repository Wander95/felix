import React, { FC } from 'react'

interface ITextArea {
  label: string;
  placeholder: string;
}
const TextArea: FC<ITextArea> = (props) => {
  const { label, placeholder } = props;

  return (
  <div className="border-b border-teal-500 py-2">
    <span className="text-lg ">{ label }</span>

    <textarea 
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
