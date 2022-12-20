import React, { createContext, useEffect, useState } from 'react'

// Layout
import RootLayoutMain from '../../../Layout/RootLayoutMain'

// Styles
import {
  ContainerTeams,
  ContainerListTeams
} from '../../../styles/pages/_main/TeamsStyles'

// Components
import HeroSection from '../../../components/_main/HeroSection'
import RenderMember from '../../../components/_main/renders/RenderMember'

function Teams() {
  const docMemberTime = [
    {
      _id: 'g56rbe685j68r67',
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/04/team-02.jpg',
      name: 'Cristian Perry',
      role: 'Desenvolvedor',
      socialLinks: [
        {
          type: 'facebook',
          link: 'facebook'
        },
        {
          type: 'instagram',
          link: 'instagram'
        },
        {
          type: 'twitter',
          link: 'twitter'
        }
      ]
    },
    {
      _id: 'f43gyh37h6jj6j',
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/04/team.jpg',
      name: 'Ana Mia Joice',
      role: 'Designer',
      socialLinks: [
        {
          type: 'facebook',
          link: 'facebook'
        },
        {
          type: 'instagram',
          link: 'instagram'
        },
        {
          type: 'twitter',
          link: 'twitter'
        }
      ]
    },
    {
      _id: 'k08tlk7k97r68k676',
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/04/team-03.jpg',
      name: 'Luana Sofia',
      role: 'Analista',
      socialLinks: [
        {
          type: 'facebook',
          link: 'facebook'
        },
        {
          type: 'instagram',
          link: 'instagram'
        },
        {
          type: 'twitter',
          link: 'twitter'
        }
      ]
    }
  ]
  const listMemberTime = docMemberTime.map((item, index) => (
    <RenderMember key={index} memberTime={item} />
  ))

  return (
    <ContainerTeams>
      <HeroSection
        backgroundImage="https://kodesolution.com/html/2022/oitech-html/images/background/page-title.jpg"
        title="Nossa equipe"
        base1="Equipe"
      />

      <div className="container">
        <ContainerListTeams>{listMemberTime}</ContainerListTeams>
      </div>
    </ContainerTeams>
  )
}

Teams.layout = RootLayoutMain

export default Teams
