import { MdEmail, MdAccessTimeFilled } from 'react-icons/md'
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from 'react-icons/bs'
import { BsSearch } from 'react-icons/bs'
import { IoCallOutline } from 'react-icons/io5'
import { defaultTheme } from '../../../themes/default'

import { HeaderContainerStyles, SLink, SLinkContainer } from './styles'
import { routsNameMain } from '../../../data/routsName'
import { AppContext } from '../../../context/AppProvider'
import { useContext, useEffect, useState } from 'react'
import ModalMenuMobile from '../modals/ModalMenuMobile'
import ModalSearch from '../modals/ModalSearch'
import { BiMenuAltLeft } from 'react-icons/bi'

function HeaderMain() {
  const [showHeader, setShowHeader] = useState<boolean>(true)
  const {
    isSignedIn,
    menuIsVisible,
    setMenuIsVisible,
    searchIsVisible,
    setSearchIsVisible
  } = useContext(AppContext)

  const hiddenHeader = () => {
    if (window.scrollY >= 1249) {
      alert('1')
      setShowHeader(false)
    } else {
      alert('2')
      setShowHeader(true)
    }
  }

  const openMenu = () => {
    setMenuIsVisible(true)
  }
  const openSearch = () => {
    setSearchIsVisible(true)
  }

  useEffect(() => {
    // window.addEventListener('scroll', hiddenHeader)
  }, [])

  return (
    <>
      <ModalMenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <ModalSearch
        setSearchIsVisible={setSearchIsVisible}
        searchIsVisible={searchIsVisible}
      />

      <HeaderContainerStyles>
        <div className="containerLogo">
          <img src="it_logo_name.png" alt="Tchossy" />
        </div>

        <div className="containerMenu">
          <div className="containerTop">
            <div className="containerLeft">
              <p>Bem-vindo ao Tchossy Solution</p>

              <div className="baseInfo">
                <div className="containerEmail">
                  <MdEmail color={defaultTheme.colors['brand-secondary']} />
                  <a href="mailto:tchossysolution@outlook.com">
                    <span>tchossysolution@outlook.com</span>
                  </a>
                </div>

                <div className="containerTime">
                  <MdAccessTimeFilled
                    color={defaultTheme.colors['brand-secondary']}
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

            <div></div>

            <div className="containerOtherInfo">
              <BsSearch onClick={openSearch} />

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

        <span className="containerIconMenu">
          <BiMenuAltLeft className="iconsMenu" onClick={openMenu} />
        </span>
      </HeaderContainerStyles>
    </>
  )
}

export default HeaderMain
