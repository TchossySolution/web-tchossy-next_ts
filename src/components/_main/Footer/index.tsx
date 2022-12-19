import Link from 'next/link'
import Image from 'next/image'

// Icons
import {
  MdEmail,
  MdAccessTimeFilled,
  MdOutlineEmail,
  MdGpsFixed
} from 'react-icons/md'
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from 'react-icons/bs'
import { BsSearch } from 'react-icons/bs'
import { IoCall, IoCallOutline, IoSend } from 'react-icons/io5'

// Themes
import { defaultTheme } from '../../../themes/default'

// Styles
import { FooterContainerStyles } from './styles'

// Routas
import { routsNameMain } from '../../../data/routsName'

// Images
import imgLogoSemNOme from '../../../../public/it_logo_name.png'

function FooterMain() {
  return (
    <>
      <FooterContainerStyles>
        <div className="containerTop">
          <div className="containerInfoTchossy">
            <Image src={imgLogoSemNOme} alt="Tchossy" />

            <p>
              Trabalhamos com paixão de enfrentar desafios e criar soluções
              inovadoras.
            </p>

            <div className="containerSocialMedia">
              <span>
                <BsFacebook />
              </span>

              <span>
                <BsInstagram />
              </span>

              <span>
                <BsWhatsapp />
              </span>

              <span>
                <BsTwitter />
              </span>
            </div>
          </div>

          <div className="containerLinks">
            <h3>Links</h3>

            <ul>
              <Link href="/fff">Sobre</Link>
              <Link href="#">Conheça a nossa equipe</Link>
              <Link href="#">Veja notícias e Media</Link>
              <Link href="#">Nossos Projeto</Link>
              <Link href="#">Contacto</Link>
            </ul>
          </div>

          <div className="containerNewsletter">
            <h3>Newsletter</h3>

            <p>
              Inscreva-se para nossas últimas notícias e artigos. Não vamos
              enviar e-mails de span
            </p>

            <div className="containerSendNewsletter">
              <input type="text" placeholder="Digite o seu email" />
              <button>
                <IoSend />
              </button>
            </div>

            <div className="containerConcordTerms">
              <input type="checkbox" name="" id="" />
              <p>Concordo com todos os termos e políticas da empresa</p>
            </div>
          </div>

          <div className="containerContact">
            <h3>Contacto</h3>

            <ul>
              <Link target="_blank" href="tel:923414621">
                <IoCall /> +244 923 414 621
              </Link>
              <Link target="_blank" href="mailto:tchossysolution@outlook.com">
                <MdOutlineEmail /> tchossysolution@outlook.com
              </Link>
              <Link
                target="_blank"
                href="https://goo.gl/maps/1Uvj3cRqNQPEKzoB7"
              >
                <MdGpsFixed /> Luanda, Benfica, Avenida 21 de Janeiro
              </Link>
            </ul>
          </div>
        </div>

        <div className="containerBottom">
          <p>TchossySolution @ Todos direitos reservados 2023</p>
        </div>
      </FooterContainerStyles>
    </>
  )
}

export default FooterMain
