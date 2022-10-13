import { NextPageContext } from 'next'
import { AppProps } from 'next/app'

import { ReactElement } from 'react'
import RootLayout from '../Layout/RootLayout'

export type PageWithBaseLayoutType = NextPageContext & {
  layout: typeof RootLayout
}
export type PageWithRestaurantLayoutType = NextPageContext & {
  layout: typeof RootLayout
}

export type PageWithLayoutType =
  | PageWithBaseLayoutType
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
