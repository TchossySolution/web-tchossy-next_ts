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
import RenderDeponents from '../../components/_main/renders/RenderDeponents'

function Projects() {
  const docDeponents = [
    {
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/10/team-08.jpg',
      author: 'Aleesha Smith',
      deponents:
        'A Infetech é uma provedora de serviços de consultoria em TI e desenvolvimento de software.',
      numberStars: 5
    },
    {
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/10/team-07.jpg',
      author: 'Mike Hardson',
      deponents:
        'Ajudam organizações e empresas que não são de TI a melhorar o desempenho dos negócios.											',
      numberStars: 3
    },
    {
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/04/team06.jpg',
      author: 'Aleeshe Smith',
      deponents:
        'A Infetech é uma provedora de serviços de consultoria em TI e desenvolvimento de software.',
      numberStars: 4
    }
  ]
  const listarDeponents = docDeponents.map((item, index) => {
    return (
      <RenderDeponents
        key={index}
        imgUrl={item.imgUrl}
        author={item.author}
        deponents={item.deponents}
        numberStars={item.numberStars}
      />
    )
  })

  return (
    <ContainerProjects>
      <HeroSection
        backgroundImage="https://kodesolution.com/html/2022/oitech-html/images/background/page-title.jpg"
        title="Depoimentos"
        base1="Depoimentos"
      />

      <div className="container">
        <ContainerListProjects>{listarDeponents}</ContainerListProjects>
      </div>
    </ContainerProjects>
  )
}

Projects.layout = RootLayoutMain

export default Projects
