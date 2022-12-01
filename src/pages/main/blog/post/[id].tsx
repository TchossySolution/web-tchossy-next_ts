import React, { createContext, useEffect, useState } from 'react'
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
  ContainerFilter,
  SLink
} from '../../../../styles/pages/_main/BlogPostStyles'

// Routs
import { routsNameMain } from '../../../../data/routsName'

// Components
import RenderPost from '../../../../components/_main/renders/RenderPost'
import RenderPostWithDate from '../../../../components/_main/renders/RenderPostWithDate'
import Link from 'next/link'
import HeroSection from '../../../../components/_main/HeroSection'
import StarRating from '../../../../components/_main/others/StarRating'
import StarRatingStatic from '../../../../components/_main/others/StarRatingStatic'
import { BsCalendarDate } from 'react-icons/bs'
import { AiOutlineComment, AiOutlineUser } from 'react-icons/ai'
import BaseButton from '../../../../components/BaseButton'
import { routsNameString } from '../../../../data/routsNameString'
import { FaQuoteLeft } from 'react-icons/fa'

function Post() {
  const router = useRouter()
  const id = router.query.id as string

  const [numComment, setNumComment] = useState(2)

  // console.log('searchPath', id)
  // console.log('============================')
  console.log('router.query.blog', router.query)

  const docPosts = [
    {
      _id: Math.random() * (1000 - 1) + 1000,
      nome: 'Argamassa Colante para Porcelanato Interno E Externo Cinza 20kg',
      categoria: 'Cimento',
      imagePost:
        'https://themerange.net/wp/montro/wp-content/uploads/2021/12/news-12.jpg',
      descricao:
        'A Argamassa Colante na cor cinza para Porcelanato da Fortaleza de 20Kg é ideal para assentamento de revestimento porcelanato em fachadas de áreas internas e externas. No caso do assentamento de fachadas, suas placas de aplicação devem ter dimensão maior do que 400 cm². A Usina Fortaleza foi fundada em 1969, com o objetivo de oferecer ao consumidor a melhor solução em argamassas e rejuntes para todo tipo de aplicação, como assentamento, revestimento, rejuntamento, decoração, sobreposição e ancoragem. Criatividade e inovação têm sido, nos últimos anos, as diretrizes que conduzem o sucesso e o crescimento sustentável da marca, produzindo produtos de alta qualidade e segurança.',
      date: '14 de dezembro de 2022'
    },
    {
      _id: Math.random() * (1000 - 1) + 1000,
      nome: 'Telha em Cerâmica Portuguesa Realeza Gold 40,2x24,3cm Terracota',
      categoria: 'Cimento',
      marca: 'Fortaleza',
      preco: 3579,
      imagePost:
        'https://themerange.net/wp/montro/wp-content/uploads/2021/12/news-13.jpg',
      descricao:
        'A Telha em Cerâmica Portuguesa Realeza Gold de 40,2x24,3cm Terracota tem aspecto liso, uniforme e resistente que garante eficiente lavabilidade ao produto, que é selecionado a partir de excelente matéria prima. As telhas Barrobello oferecem garantia de empeno zero e têm acabamento em resina uniforme, conferindo maior duração da cor, mesmo expostas a intempéries.',
      date: '14 de dezembro de 2022'
    },
    {
      _id: Math.random() * (1000 - 1) + 1000,
      nome: 'Kit Bacia com Caixa Acoplada Like 3/6 Litros + Assento Sanitário Branco',
      categoria: 'Cimento',
      marca: 'Fortaleza',
      preco: 4750,
      imagePost:
        'https://themerange.net/wp/montro/wp-content/uploads/2021/12/news-14.jpg',
      descricao:
        'O Kit Bacia com Caixa Acoplada da Linha Like da Celite possui Caixa Ecoflush de 3/6 Litros e Assento Sanitário  em Polipropileno Branco. Perfeito para instalações em banheiros, lavabos e suítes e conta com toda modernidade dos produtos da marca. O kit acompanha Bacia para Caixa, Caixa Ecoflush, Anel de Vedação, Conjunto de Fixação e Flexível. A Celite foi fundada em 1941, com o nome de Porcelite, uma das primeiras indústria de louças sanitárias do Brasil. Seus fundadores foram dois engenheiros decididos a fabricar no Brasil as louças sanitárias vitrificadas, que, antes desta data, eram importadas. Atualmente a Celite tem soluções completas para seu banheiro, com linhas de louças, metais, acessórios, banheiras e móveis. Mais qualidade e segurança em seu banheiro.',
      date: '14 de dezembro de 2022'
    },
    {
      _id: Math.random() * (1000 - 1) + 1000,
      nome: 'Aquecedor de Água Elétrico 5400w 220v Clima Frio Branco',
      categoria: 'Cimento',
      marca: 'Fortaleza',
      preco: 4750,
      imagePost:
        'https://themerange.net/wp/montro/wp-content/uploads/2021/12/news-15.jpg',
      descricao:
        'O Aquecedor de Água Elétrico 5400w 220v Clima Frio na cor Branca da Fame é ideal para pias, lavatórios de cozinhas e banheiros. Possui tampa seletora de temperatura liga/desliga, sua instalação é externa, fácil e rápida, similar a ligação de um chuveiro elétrico. Conforto, segurança e água quente!',
      date: '14 de dezembro de 2022'
    },
    {
      _id: Math.random() * (1000 - 1) + 1000,
      nome: 'Kit de Ferramentas com 129 Peças',
      categoria: 'Cimento',
      marca: 'Fortaleza',
      preco: 4750,
      imagePost:
        'https://themerange.net/wp/montro/wp-content/uploads/2021/10/news-1.jpg',
      descricao:
        'O Kit de Ferramentas com 129 Peças da Metropac é essencial para reparos domésticos, além de contarem com toda a qualidade que só a marca Metropac oferece em seus produtos. O kit conta com uma vasta variedade de ferramentas que vão facilitar a sua vida. Tendo sua grande maioria feitas de aço e plástico, as peças são resistentes e garantem o sucesso no trabalho realizado. Observação: chave inglesa ajustável de 22cm.',
      date: '14 de dezembro de 2022'
    },
    {
      _id: Math.random() * (1000 - 1) + 1000,
      nome: 'Martelete Perfurador E Rompedor com Sds-Plus E Maleta 15/16 800w 220v Azul E Preto.',
      categoria: 'Cimento',
      marca: 'Fortaleza',
      preco: 4750,
      imagePost:
        'https://themerange.net/wp/montro/wp-content/uploads/2021/10/news-10.jpg',
      descricao:
        'O  Martelete Perfurador e Rompedor com SDS-plus e Maleta 15/16" 800W 220v HR2470 Azul e Preto da Makita possui velocidade variável, rotação reversível, dupla isolação e limitador de torque. Produto acompanha punho completo, limitador de profundidade e maleta.',
      date: '14 de dezembro de 2022'
    }
  ]
  const docCategory = [
    {
      _id: '1',
      name: 'Materiais hidráulicos'
    },
    {
      _id: '2',
      name: 'Materiais elétricos'
    },
    {
      _id: '3',
      name: 'Pisos e revestimentos'
    },
    {
      _id: '4',
      name: 'Portas e janelasJANELAS'
    },
    {
      _id: '5',
      name: 'Aço'
    },
    {
      _id: '6',
      name: 'Material de canalização'
    }
  ]
  const docTags = [
    {
      _id: '1',
      name: 'Materiais hidráulicos'
    },
    {
      _id: '2',
      name: 'Materiais elétricos'
    },
    {
      _id: '3',
      name: 'Pisos e revestimentos'
    },
    {
      _id: '4',
      name: 'Portas e janelasJANELAS'
    },
    {
      _id: '5',
      name: 'Aço'
    },
    {
      _id: '6',
      name: 'Material de canalização'
    }
  ]

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

  const renderPosts = docPosts.map((item, index) => {
    return <RenderPost key={index} post={item}></RenderPost>
  })

  const listarCategoryPost = docCategory.map((item, index) => {
    return (
      <li key={index}>
        <Link
          href={`${routsNameMain.blog.category as string}${item.name}`}
          as={`${routsNameString.blog.category as string}${item.name}`}
        >
          <SLink>{item.name}</SLink>
        </Link>
      </li>
    )
  })
  const listarTags = docTags.map((item, index) => {
    return (
      <li key={index}>
        <Link
          href={`${routsNameMain.blog.tag as string}${item.name}`}
          as={`${routsNameString.blog.tag as string}${item.name}`}
        >
          <SLink>{item.name}</SLink>
        </Link>
      </li>
    )
  })

  const listarPopularPosts = docPosts.map((item, index) => {
    return <RenderPostWithDate key={index} post={item}></RenderPostWithDate>
  })

  return (
    <ContainerBlog>
      <HeroSection
        backgroundImage="https://cdn.lifehack.org/wp-content/uploads/2015/12/11224842/Coffee.jpg"
        title={id}
        base1="blog"
        base2="post"
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

          <br />
          <br />

          <div className="containerReview">
            <div className="addAvaliiation">
              <div className="titleSessionTab">
                <h1> Deixe o seu comentário </h1>
                <p> Os campos obrigatórios estão marcados com *</p>
              </div>

              <div className="field">
                <strong> Sua avaliação *</strong>
                <Stack spacing={4}>
                  <Rating
                    style={{ fontSize: '1.6rem' }}
                    name="half-rating-read"
                    defaultValue={0}
                    precision={1}
                  />
                </Stack>
              </div>

              <div className="field">
                <strong> Seu comentário *</strong>
                <input type="text" required />
              </div>

              <div>
                <BaseButton name="Enviar" />
              </div>
            </div>

            <div className="seeAvaliiation">
              <div className="titleSessionTab">
                <h2>
                  {numComment} Avaliação Para "{}"
                </h2>
              </div>

              <div className="containerComment">
                <div className="comment">
                  <div className="containerImag">
                    <img
                      src={'https://manager.almadarisp.com/user/img/user.png'}
                      alt="user"
                    />
                  </div>

                  <div className="infoComment">
                    <div className="top">
                      <h2>Administrador – 5 de junho de 2022 </h2>
                      <div className="containerRating">
                        <StarRatingStatic numberStars={3} />
                      </div>
                    </div>

                    <div className="descriptionComment">
                      <p>
                        O relâmpago louco ninguém que você bate de apenas um
                        tambor eles o chamam de Flipper Flipper mais rápido que
                        um raio ninguém que você vê é mais inteligente a cada
                        semana meus amigos você tem certeza de obter um sorriso
                        de sete encalhados aqui na Ilha Gilligans eles o chamam
                        de Flipper Flipper mais rápido.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="comment">
                  <div className="containerImag">
                    <img
                      src={
                        'https://kureintedu.com/wp-content/uploads/2019/04/image-blank-woman.png'
                      }
                      alt="user"
                    />
                  </div>

                  <div className="infoComment">
                    <div className="top">
                      <h2>Administrador – 5 de junho de 2022 </h2>
                      <div className="containerRating">
                        <StarRatingStatic numberStars={4} />
                      </div>
                    </div>

                    <div className="descriptionComment">
                      <p>
                        O relâmpago louco ninguém que você bate de apenas um
                        tambor eles o chamam de Flipper Flipper mais rápido que
                        um raio ninguém que você vê é mais inteligente a cada
                        semana meus amigos você tem certeza de obter um sorriso
                        de sete encalhados aqui na Ilha Gilligans eles o chamam
                        de Flipper Flipper mais rápido.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContainerPosts>

        <ContainerFilter>
          <div className="sectionFilter">
            <div className="headerTotal">
              <strong>Procurar por posts</strong>
            </div>

            <div className="containerSearch">
              <input
                type="text"
                placeholder="Digite a palavra-chave"
                className="searchInput"
              />
              <BiSearch size={'1.3rem'} />
            </div>
          </div>

          <div className="sectionFilter">
            <div className="headerTotal">
              <strong>Categoria de posts</strong>
            </div>

            <div className="containerToChecked">
              <ul>{listarCategoryPost}</ul>
            </div>
          </div>

          <div className="sectionFilter">
            <div className="headerTotal">
              <strong>Tags</strong>
            </div>

            <div className="containerToChecked">
              <ul>{listarTags}</ul>
            </div>
          </div>

          <div className="sectionFilter">
            <div className="headerTotal">
              <strong>Artigos populares</strong>
            </div>

            <div className="containerToChecked">
              <ul className="listarPopularPosts">{listarPopularPosts}</ul>
            </div>
          </div>
        </ContainerFilter>
      </div>
    </ContainerBlog>
  )
}

Post.layout = RootLayoutMain

export default Post
