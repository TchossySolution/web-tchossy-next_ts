import Head from 'next/head'
import FooterMain from '../components/_main/Footer'
import HeaderMain from '../components/_main/Header'
import { LayoutProps } from '../models/types/pageWithLayoutsTypes'

const RootLayoutMain: LayoutProps = ({ children }) => {
  return (
    <>
      <Head>
        <title>Tchossy</title>
        <meta name="description" content="Tchossy" />
        <link rel="icon" href="/it_logo.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Catamaran:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <HeaderMain />
      <div>{children}</div>
      <FooterMain />
    </>
  )
}

export default RootLayoutMain
