import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import { reducer as contactReducer } from './contact'

export const reducer = combineReducers({
  contact: contactReducer,
  form: formReducer,
})
