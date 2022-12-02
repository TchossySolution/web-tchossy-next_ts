import { useEffect } from 'react'

import { useRouter } from 'next/router'

// Modulos de aos animação de scroll
import Aos from 'aos'
import 'aos/dist/aos.css'

// Layout
import RootLayoutMain from '../../Layout/RootLayoutMain'
import { ContainerContacts } from '../../styles/pages/_main/ContactsStyles'
import HeroSection from '../../components/_main/HeroSection'

// Theme

// Styles

// Routs

// Components

function Contact() {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <ContainerContacts>
      <HeroSection
        backgroundImage="https://demo.ovatheme.com/infetech/wp-content/uploads/2022/03/bg-header-banner.jpg"
        title="Contactos"
        base1="Contactos"
      />
    </ContainerContacts>
  )
}

Contact.layout = RootLayoutMain

export default Contact
