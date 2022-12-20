import React, { createContext, useEffect, useState } from 'react'

// Layout
import RootLayoutMain from '../../../Layout/RootLayoutMain'

// Styles
import {
  ContainerProjects,
  ContainerListProjects
} from '../../../styles/pages/_main/ProjectsStyles'

// Components
import RenderPost from '../../../components/_main/renders/RenderPost'
import HeroSection from '../../../components/_main/HeroSection'
import RenderProject from '../../../components/_main/renders/RenderProject'

function Projects() {
  const docProjects = [
    {
      _id: 'bqwjk89e8h8x2',
      nome: 'Projeto de Marketing Inteligente',
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/03/project01.jpg',
      link: '#',
      category: 'Marketing Inteligente',
      tags: ['Visão', 'Ideias']
    },
    {
      _id: 'cc87g3uie8c3dc3',
      nome: 'Projeto de Identidade visual',
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/03/project04.jpg',
      link: '#',
      category: 'Identidade visual',
      tags: ['Design', 'Identidade']
    },
    {
      _id: '34fc3g5344tgcdsu8d9',
      nome: 'Projeto de Consultoria',
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/03/project02.jpg',
      link: '#',
      category: 'Consultoria',
      tags: ['Ideias']
    },
    {
      _id: 'cc87g3uie8c3dc3',
      nome: 'Projeto de Identidade visual',
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/03/project04.jpg',
      link: '#',
      category: 'Identidade visual',
      tags: ['Design', 'Identidade']
    },
    {
      _id: '34fc3g5344tgcdsu8d9',
      nome: 'Projeto de Consultoria',
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/03/project02.jpg',
      link: '#',
      category: 'Consultoria',
      tags: ['Ideias']
    },
    {
      _id: 'bqwjk89e8h8x2',
      nome: 'Projeto de Marketing Inteligente',
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/03/project01.jpg',
      link: '#',
      category: 'Marketing Inteligente',
      tags: ['Visão', 'Ideias']
    }
  ]

  const listarProjects = docProjects.map((item, index) => {
    return <RenderProject project={item} key={index} />
  })

  return (
    <ContainerProjects>
      <HeroSection
        backgroundImage="https://kodesolution.com/html/2022/oitech-html/images/background/page-title.jpg"
        title="Projeto"
        base1="projeto"
      />

      <div className="container">
        <ContainerListProjects>{listarProjects}</ContainerListProjects>
      </div>
    </ContainerProjects>
  )
}

Projects.layout = RootLayoutMain

export default Projects
