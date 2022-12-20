import { NextPageContext } from 'next'
import { AppProps } from 'next/app'

import { ReactElement } from 'react'
import RootLayout from '../../Layout/RootLayout'
import RootLayoutFinances from '../../Layout/RootLayoutFinances'
import RootLayoutMain from '../../Layout/RootLayoutMain'

export type PageWithTabuleiroLayoutType = NextPageContext & {
  layout: typeof RootLayout
}
export type PageWithFinancesLayoutType = NextPageContext & {
  layout: typeof RootLayoutFinances
}
export type PageWithMainLayoutType = NextPageContext & {
  layout: typeof RootLayoutMain
}

export type PageWithLayoutType =
  | PageWithTabuleiroLayoutType
  | PageWithFinancesLayoutType
  | PageWithMainLayoutType

export type AppLayoutProps = AppProps & {
  Component: PageWithLayoutType
  pageProps: any
}

export type LayoutProps = ({
  children
}: {
  children: ReactElement
}) => ReactElement
