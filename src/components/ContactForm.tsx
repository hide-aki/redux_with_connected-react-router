import * as React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'

export interface ContactFormFields {
  firstName?: string
  lastName?: string
  email?: string
}

const PureContactForm: React.SFC<
  InjectedFormProps<ContactFormFields>
> = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export const ContactForm = reduxForm({
  form: 'contact',
})(PureContactForm)
