import * as React from "react";
import { Dispatch } from "redux";
import { InjectedFormProps } from "redux-form";

import { submitContactForm } from "../actions/contact";
import { ContactForm, ContactFormFields } from "../components/ContactForm";

export class ContactContainer extends React.Component {
  submit = (
    values: ContactFormFields,
    dispatch: Dispatch<any>,
    props: InjectedFormProps<ContactFormFields>
  ) => {
    dispatch(submitContactForm(values));
  };
  render() {
    return <ContactForm onSubmit={this.submit} />;
  }
}
