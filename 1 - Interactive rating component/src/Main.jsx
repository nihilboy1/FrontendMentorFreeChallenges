import React from 'react'
import ReactDOM from 'react-dom'
import FirstPage from './Components/FirstPage'
import GlobalStyle from './Components/Styles/GlobalStyles'

ReactDOM.render(
  <React.StrictMode>
    <FirstPage />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
)
