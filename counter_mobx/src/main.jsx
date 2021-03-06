import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { StoreProvider } from "./store/context"
import {RootStore}  from "./store/rootStore"

const rootStore = new RootStore();

ReactDOM.render(
  <React.StrictMode>
      <StoreProvider value={rootStore}>
          <App/>
      </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
