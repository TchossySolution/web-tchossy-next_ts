import Head from 'next/head'
import { LayoutProps } from '../@types/pageWithLayoutsTypes'
import FooterMain from '../components/_main/Footer'
import HeaderMain from '../components/_main/Header'

const RootLayoutMain: LayoutProps = ({ children }) => {
  return (
    <>
      <Head>
        <title>Tchossy</title>
        <meta name="description" content="Tchossy" />
        <link rel="icon" href="/it_logo.png" />
      </Head>
      <HeaderMain />
      <div>{children}</div>
      <FooterMain />
    </>
  )
}

export default RootLayoutMain
