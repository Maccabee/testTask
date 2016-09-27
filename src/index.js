import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import SEARCH from './reducers/node'

let state = {nodes:[{id:0,parent:'',child:'SEARCH'}]}

let store = createStore(SEARCH, state)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
