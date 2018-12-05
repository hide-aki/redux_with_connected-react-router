import { Action, ActionKeys } from "../actions/contact";

export interface State {
  firstName?: string;
  lastName?: string;
  email?: string;
}

const initialState: State = {
  firstName: undefined,
  lastName: undefined,
  email: undefined
};

export const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionKeys.SET_CONTACT_FORM:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
