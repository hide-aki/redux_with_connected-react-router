import {
  ConnectedRouter,
  connectRouter,
  routerMiddleware,
} from 'connected-react-router'
import { createBrowserHistory } from 'history'
import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { ContactContainer } from './containers/ContactContainer'
import { PreviewContainer } from './containers/PreviewContainer'
import { reducer } from './reducers'
import { rootSaga } from './sagas'

const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  connectRouter(history)(reducer),
  applyMiddleware(routerMiddleware(history), sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path={'/'} component={ContactContainer} />
        <Route path={'/preview'} component={PreviewContainer} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
