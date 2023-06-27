import React, { FC } from 'react'
import './input.css'

interface Props
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  error?: string
}

export const Input: FC<Props> = ({ className, error, ...rest }) => {
  const classNames = ['input__item', className || ''].join(' ')

  return (
    <div className="input">
      <input className={classNames} {...rest} />
      {error ? (
        <div className="input__error" id="error-message">
          {error}
        </div>
      ) : null}
    </div>
  )
}
