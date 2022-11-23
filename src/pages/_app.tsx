import Head from 'next/head'
import { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import { AppLayoutProps } from '../@types/pageWithLayoutsTypes'
import { GlobalStyle } from '../styles/global'
import { defaultTheme } from '../themes/default'

import '../i18n/index'
import { AppProvider } from '../context/AppProvider'

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout =
    Component.layout || ((children: ReactElement) => <>{children}</>)

  return (
    <AppProvider>
      <ThemeProvider theme={defaultTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <GlobalStyle />
      </ThemeProvider>
    </AppProvider>
  )
}
export default MyApp
