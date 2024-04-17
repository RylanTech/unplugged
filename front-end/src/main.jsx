import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { UserProvider } from './Contexts/UserContext.jsx'
import { HeaderProvider } from './Contexts/HeadingContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeaderProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </HeaderProvider>
  </React.StrictMode>,
)
