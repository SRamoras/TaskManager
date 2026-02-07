import React from 'react'
import  "./Input.css";
const Input = ({ type, id, placeholder, value, onChange, Icon }: 
    { type?: string; id?: string; placeholder?: string; value: string; onChange: (e: any) => void; Icon?: string }) => {
  return (
    <div className="group">
        <span className="material-symbols-outlined icon">
            {Icon}
        </span>
        <input className="input" type={type} id={id} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  )
}

export default Input