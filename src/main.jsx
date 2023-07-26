import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import GlobalSytles from './styles/global'
import theme from './styles/theme'

import { Header } from './components/Header'
import { Client } from './components/Client'
import { Sizing } from './components/Sizing'
import { Summary } from './components/Summary'
import { Pricing } from './components/Pricing'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalSytles />
      <Header />
      <Client />
      <Sizing />
      <Summary />
      <Pricing />
    </ThemeProvider>
  </React.StrictMode>
)
