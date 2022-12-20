import React, { createContext, useEffect, useState } from 'react'

// Layout
import RootLayoutMain from '../../Layout/RootLayoutMain'

// Styles
import {
  ContainerFAQ,
  ContainerListFAQ
} from '../../styles/pages/_main/FAQStyles'

// Components
import RenderPost from '../../components/_main/renders/RenderPost'
import HeroSection from '../../components/_main/HeroSection'
import RenderProject from '../../components/_main/renders/RenderProject'
import FAQ from '../../components/_main/renders/renderFAQ'

function FAQPage() {
  const [faqs, setFaqs] = useState([
    {
      question: 'Como lançar suavemente o seu negócio?',
      answer:
        'Existem muitas variações de passagens, a maioria sofreu alteração em algum humor fo injetado ou palavras aleatórias críveis lorem Ipsum generators na internet tendem a repetir trechos predefinidos conforme necessário.',
      open: true
    },
    {
      question: 'Minha tecnologia é permitida em tecnologia?',
      answer:
        'Existem muitas variações de passagens, a maioria sofreu alteração em algum humor fo injetado ou palavras aleatórias críveis lorem Ipsum generators na internet tendem a repetir trechos predefinidos conforme necessário.',
      open: false
    },
    {
      question: 'Como transformar visitantes em colaboradores',
      answer:
        'Existem muitas variações de passagens, a maioria sofreu alteração em algum humor fo injetado ou palavras aleatórias críveis lorem Ipsum generators na internet tendem a repetir trechos predefinidos conforme necessário.',
      open: false
    },
    {
      question: 'Como posso encontrar minhas soluções?',
      answer:
        'Existem muitas variações de passagens, a maioria sofreu alteração em algum humor fo injetado ou palavras aleatórias críveis lorem Ipsum generators na internet tendem a repetir trechos predefinidos conforme necessário.',
      open: false
    }
  ])
  const toggleFAQ = (index: any) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open
        } else {
          faq.open = false
        }

        return faq
      })
    )
  }
  const listFAQs = faqs.map((faq, index) => (
    <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
  ))

  return (
    <ContainerFAQ>
      <HeroSection
        backgroundImage="https://kodesolution.com/html/2022/oitech-html/images/background/page-title.jpg"
        title="FAQ"
        base1="FAQ"
      />

      <div className="container">
        <div className="containerHeader">
          <div className="containerLeft">
            <div className="containerTitleSection">
              <div>
                <h4>FAQ</h4>
                <h1>Tudo o que você precisa saber sobre Tchossy</h1>
              </div>
            </div>
          </div>

          <div className="containerRight" data-aos="fade-left">
            <p>
              Essas são algumas da perguntas que recebemos frequentemente pelos
              nossos cliente.
            </p>
          </div>
        </div>

        <div className="faqs">{listFAQs}</div>
      </div>
    </ContainerFAQ>
  )
}

FAQPage.layout = RootLayoutMain

export default FAQPage
