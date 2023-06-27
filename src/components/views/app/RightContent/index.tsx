import { FormManager, IFormInput } from '@components/organisms'
import './rightcontent.css'

const initialState = { email: '' }
const errorStates = { email: '' }

export const RightContent = () => {
  const onHandleSubmit = (values: IFormInput) => {
    console.log(values)
  }

  return (
    <div className="right-panel">
      <div className="right-panel__content">
        <h1 className="right-panel__content__heading">
          Sign up for <br />
          exclusive access.
        </h1>
        {/* Function as children pattern ==> For reusibility*/}
        <FormManager formInput={initialState} onSubmit={onHandleSubmit}>
          {(formState, handleChange, handleSubmit, errors) => (
            <form className="right-panel__content__form" onSubmit={handleSubmit}>
              <FormManager.Input
                className="right-panel__content__form__input"
                error={errors?.email}
                name="email"
                placeholder="Your email address"
                value={formState.email}
                onChange={handleChange}
              />
              <button className="right-panel__content__form__button">Get started</button>
            </form>
          )}
        </FormManager>
        <p className="right-panel__content__reminder">
          You’ll receive an email with an invite link to join.
        </p>
      </div>
    </div>
  )
}
