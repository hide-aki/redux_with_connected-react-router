import { push } from 'connected-react-router'
import { startSubmit, stopSubmit } from 'redux-form'
import { all, fork, put, take } from 'redux-saga/effects'

import { ActionKeys, setContactForm } from '../actions/contact'

function* handleContactForm() {
  while (true) {
    const action = yield take(ActionKeys.SUBMIT_CONTACT_FORM)
    
    yield put(startSubmit('contact'))
    // Do something async processes
    yield put(stopSubmit('contact'))

    yield put(setContactForm(action.payload))

    yield put(push('/preview'))
  }
}

export function* rootSaga() {
  yield all([fork(handleContactForm)])
}
