import Head from 'next/head'
import { LayoutProps } from '../models/types/pageWithLayoutsTypes'

const RootLayout: LayoutProps = ({ children }) => {
  return (
    <>
      <Head>
        <title>Tchossy</title>
        <meta name="description" content="Tchossy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>{children}</div>
    </>
  )
}

export default RootLayout
