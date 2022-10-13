import { LayoutProps } from '../@types/pageWithLayoutsTypes'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { RootBaseContainer } from '../styles/layouts/rootBaseLayoutStyle'

const RootLayout: LayoutProps = ({ children }) => {
  return (
    <RootBaseContainer>
      <Header />
      {children}
      <Footer />
    </RootBaseContainer>
  )
}

export default RootLayout
