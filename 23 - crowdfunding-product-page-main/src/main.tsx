import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { MyContextProvider } from './context/MyContext'
import { GlobalStyles } from './globals'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <MyContextProvider>
      <App />
    </MyContextProvider>
  </React.StrictMode>
)
