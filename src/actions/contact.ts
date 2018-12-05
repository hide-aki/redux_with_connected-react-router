export enum ActionKeys {
  SET_CONTACT_FORM = "contact/set_contact_form",
  SUBMIT_CONTACT_FORM = "contact/submit_contact_form"
}

export interface Contact {
  firstName?: string;
  lastName?: string;
  email?: string;
}

interface SetContactFormAction {
  readonly type: ActionKeys.SET_CONTACT_FORM;
  payload: Contact;
}

interface SubmitContactFormAction {
  readonly type: ActionKeys.SUBMIT_CONTACT_FORM;
  payload: Contact;
}

export type Action = SetContactFormAction | SubmitContactFormAction;

export const setContactForm = (params: Contact): SetContactFormAction => ({
  type: ActionKeys.SET_CONTACT_FORM,
  payload: { ...params }
});

export const submitContactForm = (
  params: Contact
): SubmitContactFormAction => ({
  type: ActionKeys.SUBMIT_CONTACT_FORM,
  payload: { ...params }
});
