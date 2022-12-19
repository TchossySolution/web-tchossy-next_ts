import { useEffect } from 'react'
import Image from 'next/image'

// Modulos de aos animação de scroll
import Aos from 'aos'
import 'aos/dist/aos.css'

// Layout
import RootLayoutMain from '../../Layout/RootLayoutMain'

// Theme
import { defaultTheme } from '../../themes/default'

// Component
import HeroSection from '../../components/_main/HeroSection'

// Styles
import { ContainerAbout } from '../../styles/pages/_main/AboutStyles'
import { BsCheck2Circle, BsFillCheckCircleFill } from 'react-icons/bs'
import { GiSmartphone } from 'react-icons/gi'
import { MdComputer } from 'react-icons/md'
import ButtonSeeMore from '../../components/_main/buttons/ButtonSeeMore'
import { routsNameMain } from '../../data/routsName'
import { useRouter } from 'next/router'
import CountUp from 'react-countup'
import { NavLink } from '../../components/NavLink'

// Images
import imgLittleLogo from '../../../public/it_logo.png'
import imgBuildora from '../../../public/clients/buildora.png'
import imgKa from '../../../public/clients/ka.jpg'
import imgPungo from '../../../public/clients/pungo.png'
import imgTvone from '../../../public/clients/tvone.png'
import imgProcess1 from '../../../public/process/process1.png'
import imgProcess2 from '../../../public/process/process2.png'
import imgProcess3 from '../../../public/process/process3.png'
import imgProcess4 from '../../../public/process/process4.png'
import imgProcess5 from '../../../public/process/process5.png'
import imgProcess6 from '../../../public/process/process6.png'

function About() {
  const router = useRouter()

  const NumClients = 7
  const numProjects = 16
  const numYears = 2
  const numExperts = 4

  const docClients = [
    {
      imgUrl: imgBuildora,
      link: '#'
    },
    {
      imgUrl: imgKa,
      link: '#'
    },
    {
      imgUrl: imgPungo,
      link: '#'
    },
    {
      imgUrl: imgTvone,
      link: '#'
    }
  ]
  const listarClients = docClients.map((item, index) => {
    return (
      <div key={index} className="clients">
        <NavLink href={item.link}>
          <Image src={item.imgUrl} alt="" />
        </NavLink>
      </div>
    )
  })

  function goTo(path: string) {
    router.push(path)
  }

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <ContainerAbout>
      <HeroSection
        backgroundImage="https://kodesolution.com/html/2022/oitech-html/images/background/page-title.jpg"
        title="Sobre nós"
        base1="Sobre"
      />

      <section className="aboutUs">
        <div className="containerContent">
          <div className="containerAboutUs">
            <div className="contentLeft">
              <div className="containerImagesTop">
                <div className="containerImg1" data-aos="fade-right">
                  <img
                    src="https://demo.ovatheme.com/infetech/wp-content/uploads/2022/03/left-about-company-aboutUs.jpg"
                    alt=""
                  />
                </div>
                <div className="containerImg2">
                  <Image src={imgLittleLogo} alt="Logo Tchossy" />
                </div>
              </div>
            </div>

            <div className="contentRight" data-aos="fade-up">
              <div className="containerTitleSection">
                <h4>Sobre nossa empresa</h4>
                <h1>Sempre entregue mais do que você esperava</h1>
              </div>

              <p>
                Sed non odio non elit porttitor tincidunt. Donec fermentum, elit
                sit amet gravida molestie, orci dui eleifend sem, at blandit sit
                diam non purus. Duis dapibus nisi eget vehicula dignissim. amet
                gravida molestie, orci dui eleifend sem, at blandit ipsum diam
                non purus. Duis dapibus nisi eget vehicula dignissim.
              </p>

              {/* <div className="containerIconDescription">
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
              </div> */}

              <ul>
                <li>
                  <BsCheck2Circle /> Trazer novas soluções de TI para o mercado
                </li>
                <li>
                  <BsCheck2Circle /> Incluir a lista das 100 melhores empresas
                  de TI
                </li>
                <li>
                  <BsCheck2Circle /> Nossa empresa tem profissionais capacitados
                  de TI.
                </li>
                <li>
                  <BsCheck2Circle /> Incluir a lista das 100 melhores empresas
                  de TI
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="countUp">
        <div className="containerContent">
          <div className="containerCountUpRow">
            <div className="contentCountUp">
              <div className="numbers">
                <CountUp
                  start={0}
                  end={NumClients}
                  separator=" "
                  onEnd={() => console.log('Ended! 👏')}
                  onStart={() => console.log('Started! 💨')}
                  delay={4}
                >
                  {({ countUpRef, start }) => (
                    <span className="numberCountUp" ref={countUpRef} />
                  )}
                </CountUp>
                <span> +</span>
              </div>
              <h3>Cliente ativos</h3>
            </div>

            <div className="contentCountUp">
              <div className="numbers">
                <CountUp
                  start={0}
                  end={numProjects}
                  separator=" "
                  onEnd={() => console.log('Ended! 👏')}
                  onStart={() => console.log('Started! 💨')}
                  delay={4}
                >
                  {({ countUpRef, start }) => (
                    <span className="numberCountUp" ref={countUpRef} />
                  )}
                </CountUp>
                <span>+</span>
              </div>
              <h3>Projetos Concluídos</h3>
            </div>

            <div className="contentCountUp">
              <div className="numbers">
                <CountUp
                  start={0}
                  end={numYears}
                  separator=" "
                  onEnd={() => console.log('Ended! 👏')}
                  onStart={() => console.log('Started! 💨')}
                  delay={4}
                >
                  {({ countUpRef, start }) => (
                    <span className="numberCountUp" ref={countUpRef} />
                  )}
                </CountUp>

                <span>+</span>
              </div>
              <h3>Anos Gloriosos</h3>
            </div>

            <div className="contentCountUp">
              <div className="numbers">
                <CountUp
                  start={0}
                  end={numExperts}
                  separator=" "
                  onEnd={() => console.log('Ended! 👏')}
                  onStart={() => console.log('Started! 💨')}
                  delay={4}
                >
                  {({ countUpRef, start }) => (
                    <span className="numberCountUp" ref={countUpRef} />
                  )}
                </CountUp>

                <span>+</span>
              </div>
              <h3>Equipe Profissional</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="process">
        <div className="containerContent">
          <div className="containerProcess">
            <div className="containerHeader">
              <div className="containerLeft">
                <div className="containerTitleSection">
                  <div>
                    <h4>Como processamos os nossos projetos</h4>
                    <h1 style={{ color: '#fff' }}>Nossos processos</h1>
                  </div>
                </div>
              </div>

              <div className="containerRight" data-aos="fade-left">
                <p style={{ color: '#bbbbbb' }}>
                  Visando facilitar o trabalho, assim como localizar de modo
                  sequencial as atividades. As listas apresentadas para cada
                  parte, é apenas um esboço dos seus principais pontos.
                </p>
              </div>
            </div>

            <div className="containerColumnProcess">
              <div className="containerRowProcess">
                <div className="itemProcess" data-aos="fade-right">
                  <Image src={imgProcess1} alt="imgProcess1" />

                  <div className="descriptionProcess">
                    <h2>Assessment (avaliação)</h2>
                    <p>
                      A ideia é que o Tchossy possa gerar um diagnóstico com uma
                      visão 360º dos aspectos culturais, técnicos,
                      organizacionais e de negócios.
                    </p>
                  </div>
                </div>

                <div className="itemProcess" data-aos="fade-left">
                  <Image src={imgProcess2} alt="imgProcess2" />

                  <div className="descriptionProcess">
                    <h2>Processos de planeamento</h2>
                    <p>
                      Apresentaremos os detalhes das etapas, quais metodologias
                      serão utilizadas em cada uma delas, ferramentas aplicadas
                      e a descrição de como as etapas ocorrerão.
                    </p>
                  </div>
                </div>

                <div className="itemProcess" data-aos="fade-right">
                  <Image src={imgProcess3} alt="imgProcess3" />

                  <div className="descriptionProcess">
                    <h2>Investimento</h2>
                    <p>
                      Colocar de forma clara o valor de investimento referente à
                      projeto proposto. Este valor pode ainda ser dividido
                      conforme foi planejado o projeto.
                    </p>
                  </div>
                </div>

                <div className="itemProcess" data-aos="fade-left">
                  <Image src={imgProcess4} alt="imgProcess4" />

                  <div className="descriptionProcess">
                    <h2>Responsabilidades</h2>
                    <p>
                      Definimos desde o início quais são as nossas
                      responsabilidades e quais são as responsabilidades do
                      cliente sucesso do projeto.
                    </p>
                  </div>
                </div>

                <div className="itemProcess" data-aos="fade-right">
                  <Image src={imgProcess5} alt="imgProcess5" />

                  <div className="descriptionProcess">
                    <h2>Execução</h2>
                    <p>
                      Integra a equipe e outros recursos para produzir as
                      entregas e informações sobre o desempenho do respectivo
                      projeto.
                    </p>
                  </div>
                </div>

                <div className="itemProcess" data-aos="fade-left">
                  <Image src={imgProcess6} alt="imgProcess6" />

                  <div className="descriptionProcess">
                    <h2>Encerramento</h2>
                    <p>
                      Finaliza todas as atividades de todos os grupos de
                      processos de gestão do projeto, visando completar
                      formalmente o respectivo projeto (ou uma fase dele) e
                      formalizar a aceitação do produto, serviço ou resultado
                      para o qual ele foi dedicado.
                    </p>
                  </div>
                </div>
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
                value={'Obter solução'}
                onClick={() => goTo(routsNameMain.home)}
                colorBase={defaultTheme.colors['base-white']}
                colorSecondary={defaultTheme.colors['brand-secondary']}
                textColor={defaultTheme.colors['base-text-bold']}
              />
            </div>
          </div>
        </div>
      </section>
    </ContainerAbout>
  )
}

About.layout = RootLayoutMain

export default About
