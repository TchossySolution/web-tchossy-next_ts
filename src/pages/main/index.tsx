import { useRouter } from 'next/router'

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Pagination, Grid } from 'swiper'
import { Navigation } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Modulos de Icons
import { FaIdCard, FaMoneyCheckAlt } from 'react-icons/fa'
import { BsFillCheckCircleFill, BsFillPlayFill } from 'react-icons/bs'
import { GiSmartphone } from 'react-icons/gi'
import {
  MdComputer,
  MdDesignServices,
  MdOutlineSupportAgent,
  MdOutlineWork
} from 'react-icons/md'

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

function Home() {
  const router = useRouter()

  const date = new Date()

  const solutions = [
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
  const listSolutions = solutions.map((item, index) => (
    <RenderSolutions
      key={index}
      imgUrl={item.imgUrl}
      title={item.title}
      icon={item.icon}
    />
  ))

  const memberTime = [
    {
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/04/team-02.jpg',
      name: 'Cristian Perry',
      role: 'Desenvolvedor',
      socialLinks: {
        type: 'facebook',
        link: 'facebook'
      }
    },
    {
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/04/team.jpg',
      name: 'Ana Mia Joice',
      role: 'Designer',
      socialLinks: {
        type: 'facebook',
        link: 'facebook'
      }
    },
    {
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/04/team-03.jpg',
      name: 'Luana Sofia',
      role: 'Analista',
      socialLinks: {
        type: 'facebook',
        link: 'facebook'
      }
    }
  ]
  const listMemberTime = memberTime.map((item, index) => (
    <RenderTime
      key={index}
      imgUrl={item.imgUrl}
      name={item.name}
      role={item.role}
      socialLinks={item.socialLinks}
    />
  ))

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

  function goTo(path: string) {
    router.push(path)
  }

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
                <div className="containerImg1">
                  <img src="images/about01.jpg" alt="" />
                </div>
                <div className="containerImg2">
                  <img src="it_logo.png" alt="Logo Tchossy" />
                </div>
              </div>

              <div className="containerImagesBottom">
                <div className="containerImg">
                  <img src="images/about02.jpg" alt="" />
                </div>
              </div>
            </div>

            <div className="contentRight">
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

      <section className="solutions">
        <div className="containerContent">
          <div className="contentSolutions">{listSolutions}</div>
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

              <div className="containerRight">
                <p>
                  Amamos ajudar pessoas e negócios a crescerem. Apostamos na
                  excelência para execução dos nossos serviços.
                </p>
              </div>
            </div>

            <div className="containerClientsRow">
              <div className="clients">
                <NavLink href="">
                  <img src="clients/buildora.png" alt="" />
                </NavLink>
              </div>

              <div className="clients">
                <NavLink href="">
                  <img src="clients/ka.jpg" alt="" />
                </NavLink>
              </div>

              <div className="clients">
                <NavLink href="">
                  <img src="clients/pungo.png" alt="" />
                </NavLink>
              </div>

              <div className="clients">
                <NavLink href="">
                  <img src="clients/tvone.png" alt="" />
                </NavLink>
              </div>
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

              <div className="containerRight">
                <p>
                  Conheça uma equipe de profissionais experientes e conhecedores
                  que deixam nossos clientes satisfeitos com sua capacidade de
                  criar as melhores soluções de TI para melhorar o desempenho
                  dos cliente
                </p>
              </div>
            </div>

            <div className="containerMemberExperts">{listMemberTime}</div>
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
                <h1>
                  Economize tempo e dinheiro com uma das principais agências de
                  soluções
                </h1>
              </div>
            </div>

            <div className="containerRight">
              <div className="containerCalculations">
                <div className="containerIcon">
                  <MdOutlineWork />
                </div>

                <div>
                  <h3>Com experiência</h3>
                  <p>3 anos de experiência</p>
                </div>
              </div>

              <div className="containerCalculations">
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

      <section className="exploreUs">
        <div className="containerLinesLeft">
          <div className="line1"></div>
          <div className="line2"></div>
        </div>

        <div className="containerLinesRight">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        <div className="containerLinesRightInvert">
          <div className="line1"></div>
        </div>

        <div className="containerContent">
          <div className="contentExploreUs">
            <div>
              <h3>Estamos aqui para ajudar a crescer o seu negócio.</h3>
              <h1>Procurando as melhores soluções de negócios de TI?</h1>
            </div>

            <div>
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
