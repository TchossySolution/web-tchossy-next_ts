import { MdEmail, MdAccessTimeFilled } from 'react-icons/md'
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from 'react-icons/bs'
import { BsSearch } from 'react-icons/bs'
import { IoCallOutline } from 'react-icons/io5'
import { defaultTheme } from '../../../themes/default'

import { HeaderContainerStyles, SLink, SLinkContainer } from './styles'
import { routsNameMain } from '../../../data/routsName'

function HeaderMain() {
  return (
    <>
      <HeaderContainerStyles>
        <div className="containerLogo">Tchossy</div>

        <div className="containerMenu">
          <div className="containerTop">
            <div className="containerLeft">
              <p>Bem-vindo Tchossy Solution</p>

              <div className="baseInfo">
                <div className="containerEmail">
                  <MdEmail color={defaultTheme.colors['brand-primary']} />
                  <a href="mailto:tchossysolution@outlook.com">
                    <span>tchossysolution@outlook.com</span>
                  </a>
                </div>

                <div className="containerTime">
                  <MdAccessTimeFilled
                    color={defaultTheme.colors['brand-primary']}
                  />
                  <span>Seg - Sáb 8h ás 19h</span>
                </div>
              </div>
            </div>

            <div className="containerRight">
              <BsFacebook />
              <BsInstagram />
              <BsWhatsapp />
              <BsTwitter />
            </div>
          </div>

          <div className="containerButton">
            <nav>
              <SLinkContainer>
                <span>
                  <SLink exact href={routsNameMain.home as string}>
                    Casa
                  </SLink>
                </span>

                <span>
                  <SLink href={routsNameMain.about as string}>Sobre</SLink>
                </span>

                <span>Paginas</span>
                <span>
                  <SLink href={routsNameMain.service as string}>Serviços</SLink>
                </span>

                <span>
                  <SLink href={routsNameMain.blog as string}>Blog</SLink>
                </span>

                <span>
                  <SLink href={routsNameMain.contact as string}>
                    Contactos
                  </SLink>
                </span>
              </SLinkContainer>
            </nav>

            <div className="containerOtherInfo">
              <BsSearch />

              <div className="containerContact">
                <span className="containerCall">
                  <IoCallOutline />
                </span>

                <div className="contentContact">
                  <p>Ligue a qualquer hora</p>
                  <span>(+244) 923 414 621</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HeaderContainerStyles>
    </>
  )
}

export default HeaderMain
