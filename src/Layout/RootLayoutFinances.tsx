import Head from 'next/head'
import { LayoutProps } from '../@types/pageWithLayoutsTypes'

const RootLayoutFinances: LayoutProps = ({ children }) => {
  return (
    <>
      <Head>
        <title>Tabuleiro</title>
        <meta name="description" content="Tchossy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>{children}</div>
    </>
  )
}

export default RootLayoutFinances
