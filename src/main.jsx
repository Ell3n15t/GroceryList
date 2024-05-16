import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ItemView from './components/Item/ItemView.jsx'
import Standard from './layouts/Standard.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Standard>
      <ItemView />
    </Standard>
  </React.StrictMode>,
)
