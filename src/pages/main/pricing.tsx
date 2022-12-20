import React, { createContext, useEffect, useState } from 'react'

// Layout
import RootLayoutMain from '../../Layout/RootLayoutMain'

// Styles
import {
  ContainerProjects,
  ContainerListProjects
} from '../../styles/pages/_main/ProjectsStyles'

// Components
import RenderPost from '../../components/_main/renders/RenderPost'
import HeroSection from '../../components/_main/HeroSection'
import RenderProject from '../../components/_main/renders/RenderProject'
import { GiSpikesFull } from 'react-icons/gi'
import { SiOpenai } from 'react-icons/si'
import { TfiWorld } from 'react-icons/tfi'
import RenderPrice from '../../components/_main/renders/RenderPrices'

function Projects() {
  const docPrices = [
    {
      titlePlane: 'Plano Básico',
      descriptionPlane: 'Projetado para empresas com requisitos básicos de TI',
      icon: <SiOpenai />,
      price: '70.250',
      textPlaneInclude: 'Este plano básicos inclui:',
      serviceIncluded: [
        'Monitoramento do sistema 24/7',
        'Gerenciamento de segurança',
        'Gerenciamento de patches',
        'Suporte remoto'
      ],
      onClick: solicitation()
    },
    {
      titlePlane: 'Plano Sliver',
      descriptionPlane: 'Projetado para empresas com requisitos médios de TI',
      icon: <TfiWorld />,
      price: '70.250',
      textPlaneInclude: 'Este plano sliver inclui:',
      serviceIncluded: [
        'Monitoramento do sistema 24/7',
        'Gerenciamento de segurança',
        'Gerenciamento de patches',
        'Suporte remoto'
      ],
      onClick: solicitation()
    },
    {
      titlePlane: 'Plano Profissional',
      descriptionPlane:
        'Projetado para empresas com requisitos profissional de TI',
      icon: <GiSpikesFull />,
      price: '70.250',
      textPlaneInclude: 'Este plano profissional inclui:',
      serviceIncluded: [
        'Monitoramento do sistema 24/7',
        'Gerenciamento de segurança',
        'Gerenciamento de patches',
        'Suporte remoto'
      ],
      onClick: solicitation()
    }
  ]
  const listarPrices = docPrices.map((item, index) => {
    return (
      <RenderPrice
        key={index}
        titlePlane={item.titlePlane}
        descriptionPlane={item.descriptionPlane}
        icon={item.icon}
        price={item.price}
        textPlaneInclude={item.textPlaneInclude}
        serviceIncluded={item.serviceIncluded}
        onClick={item.onClick}
      />
    )
  })

  function solicitation() {}

  return (
    <ContainerProjects>
      <HeroSection
        backgroundImage="https://kodesolution.com/html/2022/oitech-html/images/background/page-title.jpg"
        title="Preços"
        base1="Preços"
      />

      <div className="container">
        <ContainerListProjects>{listarPrices}</ContainerListProjects>
      </div>
    </ContainerProjects>
  )
}

Projects.layout = RootLayoutMain

export default Projects
