import { useContext, useEffect, useState } from 'react'

// Moludos de Icons
import { MdEmail, MdAccessTimeFilled } from 'react-icons/md'
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from 'react-icons/bs'
import { BiMenuAltLeft, BiSearchAlt } from 'react-icons/bi'

// Toastify
import { ToastContainer, toast } from 'react-toastify'

// Material UI
import 'react-toastify/dist/ReactToastify.css'

import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import Badge from '@mui/material/Badge'
import { Divider, ListItemIcon } from '@mui/material'

import { styled } from '@mui/material/styles'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch, { SwitchProps } from '@mui/material/Switch'
import Stack from '@mui/material/Stack'

// Themes
import { defaultTheme } from '../../../themes/default'

// Styles
import { HeaderContainerStyles, SLink, SLinkContainer } from './styles'

// Routes
import { routsNameMain } from '../../../data/routsName'

// Context
import { AppContext } from '../../../context/AppProvider'

// Modals
import ModalMenuMobile from '../modals/ModalMenuMobile'
import ModalSearch from '../modals/ModalSearch'
import { useTranslation } from 'react-i18next'
import i18n from '../../../i18n'
import { darkTheme } from '../../../themes/darkTheme'

interface ISettings {
  name: string
  type: string
  to?: string
  icon?: any
}
interface ILang {
  name: string
  langImage: string
  langSelected: string
}

function HeaderMain() {
  const {
    menuIsVisible,
    setMenuIsVisible,
    searchIsVisible,
    setSearchIsVisible,
    themeToggler,
    theme
  } = useContext(AppContext)

  const [lang, setLang] = useState({
    name: 'Português',
    langImage: '/lang/portugal.png',
    langSelected: 'pt'
  })

  const [anchorElLang, setAnchorElLang] = useState<null | HTMLElement>(null)

  const { t } = useTranslation()

  const openMenu = () => {
    setMenuIsVisible(true)
  }
  const openSearch = () => {
    setSearchIsVisible(true)
  }

  const successChangeLang = (langSelected: ILang) =>
    toast.success(`${t('header.changeLang') as string} ${langSelected.name}`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light'
    })

  function handleChangeLang(langSelected: ILang) {
    setLang(langSelected)
    i18n.changeLanguage(langSelected.langSelected)
    successChangeLang(langSelected)
  }

  const handleOpenLangMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElLang(event.currentTarget)
  }

  const handleCloseLangMenu = (setting: ISettings) => {
    if (setting.type == 'function') {
      alert('sair')
      setAnchorElLang(null)
    } else if (setting.type == 'navigate') {
      alert(setting.to)
      setAnchorElLang(null)
    }
    setAnchorElLang(null)
  }

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff'
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be'
        }
      }
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 32,
      height: 32,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff'
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`
      }
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2
    }
  }))

  useEffect(() => {}, [])

  return (
    <>
      <ToastContainer />

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
                  <SLink href={routsNameMain.blog.index as string}>Blog</SLink>
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
              <BiSearchAlt onClick={openSearch} />

              <FormControlLabel
                control={
                  <MaterialUISwitch
                    sx={{ m: 1 }}
                    defaultChecked={theme === 'light'}
                  />
                }
                label={theme as string}
                // label={isDarkMode ? 'Escuro' : 'Claro'}
                onChange={() => themeToggler()}
              />

              <div className="containerLang">
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title={t('header.language') as string}>
                    <IconButton onClick={handleOpenLangMenu} size="small">
                      <Avatar
                        sx={{ width: 38, height: 38 }}
                        alt="Remy Sharp"
                        src={lang.langImage}
                      />
                    </IconButton>
                  </Tooltip>
                </Box>
                <Menu
                  anchorEl={anchorElLang}
                  id="account-menu"
                  open={Boolean(anchorElLang)}
                  onClose={handleCloseLangMenu}
                >
                  <MenuItem
                    onClick={() =>
                      handleChangeLang({
                        name: 'Português',
                        langImage: '/lang/portugal.png',
                        langSelected: 'pt'
                      })
                    }
                  >
                    <Avatar src="/lang/portugal.png" />
                  </MenuItem>
                  <MenuItem
                    onClick={() =>
                      handleChangeLang({
                        name: 'Français',
                        langImage: '/lang/france.png',
                        langSelected: 'fr'
                      })
                    }
                  >
                    <Avatar src="/lang/france.png" />
                  </MenuItem>
                  <MenuItem
                    onClick={() =>
                      handleChangeLang({
                        name: 'English',
                        langImage: '/lang/united-states.png',
                        langSelected: 'en'
                      })
                    }
                  >
                    <Avatar src="/lang/united-states.png" />
                  </MenuItem>
                </Menu>
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
