import { NextPageContext } from 'next'
import { AppProps } from 'next/app'

import { ReactElement } from 'react'

import RootLayout from '../Layout/RootLayout'
import RootLayoutFinances from '../Layout/RootLayoutFinances'

export type PageWithTabuleiroLayoutType = NextPageContext & {
  layout: typeof RootLayoutFinances
}
export type PageWithRestaurantLayoutType = NextPageContext & {
  layout: typeof RootLayout
}

export type PageWithLayoutType =
  | PageWithTabuleiroLayoutType
  | PageWithRestaurantLayoutType

export type AppLayoutProps = AppProps & {
  Component: PageWithLayoutType
  pageProps: any
}

export type LayoutProps = ({
  children
}: {
  children: ReactElement
}) => ReactElement
