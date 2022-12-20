import React, { createContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

// Modulos mui/material
import { BiSearch } from 'react-icons/bi'

// Modulos de Icons
import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'

// Layout
import RootLayoutMain from '../../../../Layout/RootLayoutMain'

// Styles
import {
  ContainerBlog,
  ContainerPosts,
  SLink
} from '../../../../styles/pages/_main/ProjectsDetailsStyles'

// Routs
import { routsNameMain } from '../../../../data/routsName'

// Components
import HeroSection from '../../../../components/_main/HeroSection'
import StarRatingStatic from '../../../../components/_main/others/StarRatingStatic'
import { BsCalendarDate } from 'react-icons/bs'
import { AiOutlineComment, AiOutlineUser } from 'react-icons/ai'
import BaseButton from '../../../../components/BaseButton'
import { routsNameString } from '../../../../data/routsNameString'
import { FaQuoteLeft } from 'react-icons/fa'

function Post() {
  const router = useRouter()
  const projectPath = (router.query.team as string[]) || []

  const [numComment, setNumComment] = useState(2)

  const idPath = projectPath[0] as string
  const titlePath = projectPath[1] as string

  const docPhotosPosts = [
    {
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/04/blog-05.jpg'
    },
    {
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/04/blog-06.jpg'
    }
  ]
  const listarPhotosPosts = docPhotosPosts.map((item, index) => {
    return (
      <div key={index} className="photosPosts">
        <img src={item.imgUrl} alt="" />
      </div>
    )
  })

  useEffect(() => {
    console.log(projectPath)
  })

  return (
    <ContainerBlog>
      <HeroSection
        backgroundImage="https://kodesolution.com/html/2022/oitech-html/images/background/page-title.jpg"
        title={titlePath}
        base1="Equipe"
        base2={titlePath}
      />

      <div className="container">
        <ContainerPosts>
          <div className="post">
            <div className="containerImg">
              <img
                src={
                  'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/04/blog-06.jpg'
                }
                alt={'news'}
                width="400"
                height="300"
              />

              <div className="containerOtherInfo">
                <strong>
                  <BsCalendarDate size={'1rem'} /> 14 de Desembro de 2022
                </strong>

                <strong> | </strong>

                <strong>
                  <AiOutlineComment size={'1.3rem'} /> {'3'} Comentarios
                </strong>

                <strong> | </strong>

                <Link
                  href={routsNameMain.otherPages.team.details}
                  as={`${routsNameString.blog.details as string}${'1234'}`}
                >
                  <strong>
                    <AiOutlineUser size={'1.3rem'} /> Por Rafael Pilartes
                  </strong>
                </Link>
              </div>
            </div>

            <div className="containerInfPosts">
              <div className="headerTotal">
                <strong>
                  Conteúdo sem dados compatíveis com versões anteriores.
                </strong>
              </div>

              <div className="containerAllSectionPost">
                <div className="descriptionPost">
                  <h3>Experiências tecnológicas que nos conectam</h3>

                  <p>
                    É um fato estabelecido há muito tempo que um leitor se
                    distrairá com o conteúdo legível de uma página ao olhar para
                    seu layout. O objetivo de usar Lorem Ipsum O homem, que está
                    em condição estável no hospital, tem “ferimentos
                    potencialmente capazes de mudar sua vida” após o ataque
                    noturno em Garvagh, Condado de Lono Donderry. Ele foi
                    baleado nos braços e nas pernas.” Que tipo de homem acharia
                    aceitável submeter uma jovem a esse nível de brutalidade e
                    violência?
                    <br />
                    <br />
                    “Toda criança tem o direito de se sentir segura e protegida
                    em sua própria casa – como essa pobre criança vai dormir
                    esta noite ou nas próximas noites? Quais serão os efeitos a
                    longo prazo sobre ela?”
                  </p>

                  <div className="epigraph">
                    <div className="contentLeft">
                      <FaQuoteLeft />

                      <p>
                        Se você vai usar uma passagem de Lorem Ipsum, você
                        precisa ter certeza de que não há nada embaraçoso
                        escondido no meio do texto.
                      </p>
                    </div>

                    {/* <h4>Rafael Pilartes</h4> */}
                  </div>

                  <div className="containerPhotosRow">{listarPhotosPosts}</div>
                </div>

                <div className="descriptionPost">
                  <h3>Experiências tecnológicas que nos conectam</h3>

                  <p>
                    É um fato estabelecido há muito tempo que um leitor se
                    distrairá com o conteúdo legível de uma página ao olhar para
                    seu layout. O objetivo de usar Lorem Ipsum O homem, que está
                    em condição estável no hospital, tem “ferimentos
                    potencialmente capazes de mudar sua vida” após o ataque
                    noturno em Garvagh, Condado de Lono Donderry. Ele foi
                    baleado nos braços e nas pernas.” Que tipo de homem acharia
                    aceitável submeter uma jovem a esse nível de brutalidade e
                    violência?
                    <br />
                    <br />
                    “Toda criança tem o direito de se sentir segura e protegida
                    em sua própria casa – como essa pobre criança vai dormir
                    esta noite ou nas próximas noites? Quais serão os efeitos a
                    longo prazo sobre ela?”
                  </p>

                  <div className="epigraph">
                    <div className="contentLeft">
                      <FaQuoteLeft />

                      <p>
                        Se você vai usar uma passagem de Lorem Ipsum, você
                        precisa ter certeza de que não há nada embaraçoso
                        escondido no meio do texto.
                      </p>
                    </div>

                    {/* <h4>Rafael Pilartes</h4> */}
                  </div>

                  <div className="containerPhotosRow">{listarPhotosPosts}</div>
                </div>
              </div>
            </div>
          </div>
        </ContainerPosts>
      </div>
    </ContainerBlog>
  )
}

Post.layout = RootLayoutMain

export default Post
