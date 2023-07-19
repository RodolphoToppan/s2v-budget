import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import GlobalSytles from './styles/global'
import theme from './styles/theme'

import { Header } from './components/Header'
import { Client } from './components/Client'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalSytles />
      <Header />
      <Client />
    </ThemeProvider>
  </React.StrictMode>
)
