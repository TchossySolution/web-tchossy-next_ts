import Head from 'next/head'
import { ReactElement, useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global'
import { defaultTheme } from '../themes/default'
import { darkTheme } from '../themes/darkTheme'

import '../i18n/index'
import { AppContext, AppProvider } from '../context/AppProvider'
import { AppLayoutProps } from '../models/types/pageWithLayoutsTypes'

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout =
    Component.layout || ((children: ReactElement) => <>{children}</>)

  const { theme } = useContext(AppContext)

  const themeMode = theme == 'light' ? defaultTheme : darkTheme

  return (
    <AppProvider>
      <ThemeProvider theme={themeMode}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <GlobalStyle />
      </ThemeProvider>
    </AppProvider>
  )
}
export default MyApp
