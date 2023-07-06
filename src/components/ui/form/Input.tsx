'use client'

import cn from 'classnames'
import style from './Input.module.scss'
import {useState} from "react";

interface  IInput {
  defaultValue: string;
  onChange: (e: string) => void;

  placeholder?: string,
  type?: string

}

const Input = ({defaultValue, onChange, placeholder = '', type = 'text'}: IInput) => {
  const [value, setValue] = useState(defaultValue)
   return <input className={cn('my-3', style.input)}
                 type={type}
                 value={value}
                 onChange={(e) => {
                   setValue(e.target.value)
                   onChange(e.target.value)
                 }}
                 placeholder={placeholder} />
}

export default Input