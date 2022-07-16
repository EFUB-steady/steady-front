import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { RecoilRoot } from 'recoil'
import ModalWrapper from './ui/modal/recoil/ModalWrapper'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <RecoilRoot>
    <React.StrictMode>
      <ModalWrapper />
      <App />
    </React.StrictMode>
  </RecoilRoot>,
)
