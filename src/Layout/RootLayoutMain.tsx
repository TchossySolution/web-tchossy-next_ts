import Head from 'next/head'
import { LayoutProps } from '../@types/pageWithLayoutsTypes'
import HeaderMain from '../components/_main/Header'

const RootLayoutMain: LayoutProps = ({ children }) => {
  return (
    <>
      <Head>
        <title>Tchossy</title>
        <meta name="description" content="Tchossy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderMain />
      <div>{children}</div>
    </>
  )
}

export default RootLayoutMain
