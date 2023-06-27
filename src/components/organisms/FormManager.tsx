import { ChangeEventHandler, FC, useState } from 'react'

import { Input } from './Input'

export interface IFormInput {
  [input: string]: string | number
}

export interface IFormError {
  [input: string]: string
}

export interface IFormErrorHandlers {
  [input: string]: (value: string | number) => boolean
}

interface Props {
  formInput: IFormInput
  errors?: IFormErrorHandlers
  children: (
    state: IFormInput,
    handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
    handleSubmit: React.FormEventHandler<HTMLFormElement>,
    errors?: IFormError
  ) => JSX.Element | JSX.Element[]
  onSubmit: (inputs: IFormInput) => void
}

const Root: FC<Props> = ({ formInput, children, onSubmit, errors: errorObject }) => {
  const [form, setForm] = useState(formInput)
  const [errors, setErrors] = useState({})

  const handleForm: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (eve) => {
    const { value, name } = eve.target

    setErrors(errorObject || {})
    setForm((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (eve) => {
    eve.preventDefault()
    await onSubmit(form)
  }

  return children(form, handleForm, handleSubmit, errors)
}

export const FormManager = Object.assign(Root, { Input })
