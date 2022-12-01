import { useEffect } from 'react'

import { useRouter } from 'next/router'

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Pagination, Grid } from 'swiper'
import { Navigation } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Modulos de Icons
import { SiOpenai } from 'react-icons/si'
import { BsFillCheckCircleFill, BsFillPlayFill } from 'react-icons/bs'
import { GiSmartphone, GiSpikesFull } from 'react-icons/gi'
import {
  MdComputer,
  MdDesignServices,
  MdOutlineSupportAgent,
  MdOutlineWork
} from 'react-icons/md'
import { GrVolumeControl } from 'react-icons/gr'

// Modulos de aos animação de scroll
import Aos from 'aos'
import 'aos/dist/aos.css'

// Layout
import RootLayoutMain from '../../Layout/RootLayoutMain'

// Theme
import { defaultTheme } from '../../themes/default'

// Styles
import { ContainerHome } from '../../styles/pages/_main/HomeStyles'

// Routs
import { routsNameMain } from '../../data/routsName'

// Components
import ButtonSeeMore from '../../components/_main/buttons/ButtonSeeMore'
import RenderCardBlog from '../../components/_main/renders/RenderCardRecenteBlog'
import RenderSolutions from '../../components/_main/renders/RenderSolutions'
import ButtonBase from '../../components/_main/buttons/ButtonBase'
import { AiFillCode, AiFillStar } from 'react-icons/ai'
import RenderTime from '../../components/_main/renders/RenderTime'
import { NavLink } from '../../components/NavLink'
import RenderResumeService from '../../components/_main/renders/RenderResumeService'
import RenderProject from '../../components/_main/renders/RenderProject'
import RenderDeponents from '../../components/_main/renders/RenderDeponents'
import RenderPrice from '../../components/_main/renders/RenderPrices'
import { TfiWorld } from 'react-icons/tfi'

function Home() {
  const router = useRouter()

  const date = new Date()

  function solicitation() {}

  const docSolutions = [
    {
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/03/service1-01.jpg',
      title: 'Soluções perfeitas que os negócios exigem',
      icon: <AiFillStar size={36} />
    },
    {
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/03/service1-03.jpg',
      title: 'Designer gráficos e identidade visual',
      icon: <MdDesignServices size={36} />
    },
    {
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/03/service1-02.jpg',
      title: 'Fornecendo excelentes soluções de tecnologia',
      icon: <AiFillCode size={36} />
    }
  ]
  const listSolutions = docSolutions.map((item, index) => (
    <RenderSolutions
      key={index}
      imgUrl={item.imgUrl}
      title={item.title}
      icon={item.icon}
    />
  ))

  const docServices1 = [
    {
      title: 'Desenvolvimento de software',
      description:
        'Produtos de software programados para atender às metas de negócios.',
      icon: <AiFillStar size={36} />
    },
    {
      title: 'Consultoria de TI',
      description:
        'Melhoria da produtividade da equipe, redução de custos, vantagem competitiva e muito mais.',
      icon: <MdDesignServices size={36} />
    },
    {
      title: 'Marketing Digital',
      description: 'Pesquise e avalie negócios, público e concorrentes.',
      icon: <AiFillStar size={36} />
    }
  ]
  const listServices1 = docServices1.map((item, index) => (
    <RenderResumeService
      key={index}
      title={item.title}
      description={item.description}
      icon={item.icon}
    />
  ))
  const docServices2 = [
    {
      title: 'Criação de identidade visual',
      description:
        'Oferecemos uma variedade das melhores estratégias de marketing para expandir seus negócios.',
      icon: <AiFillCode size={36} />
    },
    {
      title: 'consultoria de TI',
      description:
        'Melhoria da produtividade da equipe, redução de custos, vantagem competitiva e muito mais.',
      icon: <MdDesignServices size={36} />
    },
    {
      title: 'Estratégia de mercado',
      description:
        'Oferecemos uma variedade das melhores estratégias de marketing para expandir seus negócios.',
      icon: <AiFillCode size={36} />
    }
  ]
  const listServices2 = docServices2.map((item, index) => (
    <RenderResumeService
      key={index}
      title={item.title}
      description={item.description}
      icon={item.icon}
    />
  ))

  const docMemberTime = [
    {
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
    <RenderTime
      key={index}
      imgUrl={item.imgUrl}
      name={item.name}
      role={item.role}
      socialLinks={item.socialLinks}
    />
  ))

  const docClients = [
    {
      imgUrl: 'clients/buildora.png',
      link: '#'
    },
    {
      imgUrl: 'clients/ka.jpg',
      link: '#'
    },
    {
      imgUrl: 'clients/pungo.png',
      link: '#'
    },
    {
      imgUrl: 'clients/tvone.png',
      link: '#'
    }
  ]
  const listarClients = docClients.map((item, index) => {
    return (
      <div key={index} className="clients">
        <NavLink href={item.link}>
          <img src={item.imgUrl} alt="" />
        </NavLink>
      </div>
    )
  })

  const docProjects = [
    {
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/03/project01.jpg',
      link: '#',
      category: 'Marketing Inteligente',
      tags: ['Visão', 'Ideias']
    },
    {
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/03/project04.jpg',
      link: '#',
      category: 'Identidade visual',
      tags: ['Design', 'Identidade']
    },
    {
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/03/project02.jpg',
      link: '#',
      category: 'Consultoria',
      tags: ['Ideias']
    }
  ]
  const listarProjects = docProjects.map((item, index) => {
    return (
      <RenderProject
        key={index}
        imgUrl={item.imgUrl}
        category={item.category}
        link={item.link}
        tags={item.tags}
      />
    )
  })

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

  const newNotices = [
    {
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/04/blog-02-768x500.jpg',
      title: 'Os diferentes tipos de backups de dados',
      author: 'Eng. Rafael',
      comments: 0,
      datePub: date.toLocaleDateString()
    },
    {
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/04/blog-01-768x501.jpg',
      title: 'Uma solução rápida para o problema',
      author: 'Eng. Raimundo',
      comments: 11,
      datePub: date.toLocaleDateString()
    },
    {
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/04/blog-04-768x500.jpg',
      title: 'O que é Aumento de Pessoal?',
      author: 'Eng. Rafael',
      comments: 21,
      datePub: date.toLocaleDateString()
    }
  ]
  const listNewNotices = newNotices.map((item, index) => (
    <RenderCardBlog
      key={index}
      imgUrl={item.imgUrl}
      title={item.title}
      author={item.author}
      comments={item.comments}
      datePub={item.datePub}
    />
  ))

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

  function goTo(path: string) {
    router.push(path)
  }

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <ContainerHome>
      <div className="containerSwiper">
        <Swiper
          pagination={{
            clickable: true,
            dynamicBullets: true
          }}
          loop={true}
          autoplay={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <h1> Tecnologia </h1>
            <img src="https://portal.inss.gov.ao/wp-content/uploads/2021/08/inn-em-numeros-.jpg" />
          </SwiperSlide>

          <SwiperSlide>
            <h1> Tecnologia </h1>
            <img src="https://portal.inss.gov.ao/wp-content/uploads/2021/08/inn-em-numeros-.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>

      <section className="aboutUs">
        <div className="containerContent">
          <div className="containerAboutUs">
            <div className="contentLeft">
              <div className="containerImagesTop">
                <div className="containerImg1" data-aos="fade-right">
                  <img src="images/about01.jpg" alt="" />
                </div>
                <div className="containerImg2">
                  <img src="it_logo.png" alt="Logo Tchossy" />
                </div>
              </div>

              <div className="containerImagesBottom">
                <div className="containerImg" data-aos="fade-left">
                  <img src="images/about02.jpg" alt="" />
                </div>
              </div>
            </div>

            <div className="contentRight" data-aos="fade-up">
              <div className="containerTitleSection">
                <h4>Sobre sua empresa</h4>
                <h1>Somos Parceiros de Suas Inovações</h1>
              </div>

              <p>
                A Tchossy é uma provedora de serviços, consultoria em TI e
                desenvolvimento de software. Ajudamos organizações e empresas a
                melhorar o desempenho dos negócios e aumentar sua
                competitividade.
              </p>

              <div className="containerIconDescription">
                <div className="iconDescription">
                  <div className="containerIcon">
                    <MdComputer />
                  </div>
                  <span>Desenvolvimento de sites</span>
                </div>

                <div className="iconDescription">
                  <div className="containerIcon">
                    <GiSmartphone />
                  </div>
                  <span>Desenvolvimento de aplicativos</span>
                </div>
              </div>

              <ul>
                <li>
                  <BsFillCheckCircleFill /> Trazer novas soluções de TI para o
                  mercado
                </li>
                <li>
                  <BsFillCheckCircleFill /> Incluir a lista das 100 melhores
                  empresas de TI
                </li>
                <li>
                  <BsFillCheckCircleFill /> Nossa empresa tem profissionais
                  capacitados de TI.
                </li>
              </ul>

              <div>
                <ButtonSeeMore
                  value={'Saber mais'}
                  onClick={() => goTo(routsNameMain.home)}
                  colorBase={defaultTheme.colors['brand-primary']}
                  colorSecondary={defaultTheme.colors['brand-super-dark']}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="solutions ">
        <div className="containerContent">
          <div className="contentSolutions" data-aos="fade-right">
            {listSolutions}
          </div>
        </div>
      </section>

      <section className="services">
        <div className="containerContent">
          <div className="containerServices">
            <div className="containerHeader">
              <div className="containerLeft">
                <div className="containerTitleSection">
                  <div>
                    <h4>O que estamos oferecendo aos nossos clientes</h4>
                    <h1 style={{ color: '#fff' }}>
                      Negociação em todos os serviços profissionais
                    </h1>
                  </div>
                </div>
              </div>

              <div className="containerRight" data-aos="fade-left">
                <p style={{ color: '#bbbbbb' }}>
                  Oferecemos serviços de desenvolvimento de software de ciclo
                  completo que atendem a vários requisitos de negócios, desde
                  consultoria em estratégia de TI até o desenvolvimento de ponta
                  a ponta de soluções escaláveis.
                </p>
              </div>
            </div>

            <div className="containerColumnServices">
              <div className="containerRowServices" data-aos="fade-left">
                {listServices1}
              </div>
              <div className="containerRowServices" data-aos="fade-right">
                {listServices2}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="weAreReady">
        <div className="containerContent">
          <div className="contentWeAreReady">
            <div className="coverBackground"></div>

            <div className="containerImg">
              <img
                src="https://demo.ovatheme.com/infetech/wp-content/uploads/2022/03/service1-02.jpg"
                alt=""
              />
            </div>

            <div className="contentInfo">
              <h1>Estamos Prontos, Desenvolva Seu Site!</h1>

              <div>
                <ul>
                  <li>
                    <BsFillCheckCircleFill /> As soluções de TI são criadas
                    pelos melhores especialistas
                  </li>
                  <li>
                    <BsFillCheckCircleFill /> Receba consultoria gratuita para
                    qualquer tipo de solução de TI
                  </li>
                  <li>
                    <BsFillCheckCircleFill /> Suporte 24 horas por dia, 7 dias
                    por semana para parceiros durante o processo.
                  </li>
                </ul>

                <ButtonBase
                  value={'SABER MAIS'}
                  onClick={() => goTo(routsNameMain.home)}
                  colorBase={defaultTheme.colors['base-gray']}
                  colorSecondary={defaultTheme.colors['brand-primary']}
                  textColor={defaultTheme.colors['base-text']}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ourClients">
        <div className="containerContent">
          <div className="containerClients">
            <div className="containerHeader">
              <div className="containerLeft">
                <div className="containerTitleSection">
                  <div>
                    <h4>Nossos clientes</h4>
                    <h1>Conheça nosso clientes</h1>
                  </div>
                </div>
              </div>

              <div className="containerRight" data-aos="fade-left">
                <p>
                  Amamos ajudar pessoas e negócios a crescerem. Apostamos na
                  excelência para execução dos nossos serviços.
                </p>
              </div>
            </div>

            <div className="containerClientsRow" data-aos="fade-up">
              {listarClients}
            </div>
          </div>
        </div>
      </section>

      <section className="projects">
        <div className="containerContent">
          <div className="containerProjects">
            <div className="containerHeader">
              <div className="containerLeft">
                <div className="containerTitleSection">
                  <div>
                    <h4>Nossos Projetos Concluídos</h4>
                    <h1>Conheça alguns dos nossos projetos</h1>
                  </div>
                </div>
              </div>

              <div className="containerRight" data-aos="fade-left">
                <p>
                  Existem vários projetos bem-sucedidos, desde consultoria em
                  estratégia de TI até o desenvolvimento end-to-end de soluções
                  escaláveis ​​feitas por nossos criativos e experientes
                  profissionais.
                </p>
              </div>
            </div>

            <div className="containerProjectsRow" data-aos="fade-up">
              {listarProjects}
            </div>

            <div className="containerBottom">
              <ButtonSeeMore
                value={'Ver mais projetos'}
                onClick={() => goTo(routsNameMain.home)}
                colorBase={defaultTheme.colors['brand-primary']}
                colorSecondary={defaultTheme.colors['brand-super-dark']}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="ourExperts">
        <div className="containerImg">
          <img src="backgrounds/bg-lines-main.png" alt="" />
        </div>

        <div className="containerContent">
          <div className="containerOurExperts">
            <div className="containerHeader">
              <div className="containerLeft">
                <div className="containerTitleSection">
                  <div>
                    <h4>Nossos especialistas</h4>
                    <h1>Conheça nosso membro da equipe profissional</h1>
                  </div>
                </div>
              </div>

              <div className="containerRight" data-aos="fade-left">
                <p>
                  Conheça uma equipe de profissionais experientes e conhecedores
                  que deixam nossos clientes satisfeitos com sua capacidade de
                  criar as melhores soluções de TI para melhorar o desempenho
                  dos cliente
                </p>
              </div>
            </div>

            <div className="containerMemberExperts" data-aos="fade-up">
              {listMemberTime}
            </div>
          </div>
        </div>
      </section>

      <section className="saveTime">
        <div className="containerLinesLeft">
          <div className="line1"></div>
        </div>

        <div className="coverBackground"></div>

        <div className="containerContent">
          <div className="containerSaveTime">
            <div className="containerLeft">
              <div className="containerPlay">
                <span>
                  <BsFillPlayFill />
                </span>
              </div>

              <div className="containerContent">
                <h6>Você precisa de uma solução?</h6>
                <h1 data-aos="fade-up">
                  Economize tempo e dinheiro com uma das principais agências de
                  soluções
                </h1>
              </div>
            </div>

            <div className="containerRight">
              <div className="containerCalculations" data-aos="flip-left">
                <div className="containerIcon">
                  <MdOutlineWork />
                </div>

                <div>
                  <h3>Com experiência</h3>
                  <p>3 anos de experiência</p>
                </div>
              </div>

              <div className="containerCalculations" data-aos="flip-left">
                <div className="containerIcon">
                  <MdOutlineSupportAgent />
                </div>

                <div>
                  <h3>Conveniência</h3>
                  <p>Suporte a qualquer hora 24/10</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ourBlog">
        <div className="containerContent">
          <div className="containerOurBlog">
            <div className="containerTitleSection">
              <h4>O que está acontecendo</h4>
              <h1>Posts recentes</h1>
            </div>

            <div className="containerRow">{listNewNotices}</div>
          </div>
        </div>
      </section>

      <section className="prices">
        <div className="containerContent">
          <div className="containerPrices">
            <div className="containerTitleSection">
              <div>
                <h4>Nossos planos de preços</h4>
                <h1>Planos de preços transparentes adequados para você</h1>
              </div>
            </div>

            <div className="containerPricesRow" data-aos="fade-up">
              {listarPrices}
            </div>
          </div>
        </div>
      </section>

      <section className="exploreUs">
        <div className="containerLinesLeft" data-aos="fade-up">
          <div className="line1"></div>
          <div className="line2"></div>
        </div>

        <div className="containerLinesRight" data-aos="fade-down">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        <div className="containerLinesRightInvert">
          <div className="line1"></div>
        </div>

        <div className="containerContent">
          <div className="contentExploreUs">
            <div data-aos="fade-right">
              <h3>Estamos aqui para ajudar a crescer o seu negócio.</h3>
              <h1>Procurando as melhores soluções de negócios de TI?</h1>
            </div>

            <div data-aos="fade-left">
              <ButtonSeeMore
                value={'Saber mais'}
                onClick={() => goTo(routsNameMain.home)}
                colorBase={defaultTheme.colors['base-white']}
                colorSecondary={defaultTheme.colors['brand-secondary']}
                textColor={defaultTheme.colors['base-text-bold']}
              />
            </div>
          </div>
        </div>
      </section>
    </ContainerHome>
  )
}

Home.layout = RootLayoutMain

export default Home
