import React, { useContext, useEffect, useState } from 'react'

import { MenuContainer } from './styles'
import { AiOutlineClose } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'

interface MenuMobileInterface {
  searchIsVisible: boolean
  setSearchIsVisible: (value: any) => void
}

const SearchModal: React.FC<MenuMobileInterface> = ({
  searchIsVisible,
  setSearchIsVisible
}): JSX.Element => {
  const [searchTxt, setsearchTxt] = useState<String>('')

  const closeMenu = () => {
    setSearchIsVisible(false)
  }

  useEffect(() => {
    document.body.style.overflowY = searchIsVisible ? 'hidden' : 'auto'
  }, [searchIsVisible])

  return (
    <MenuContainer isVisible={searchIsVisible}>
      <div className="containerSearch">
        <div className="headerSearch">
          <h3>Pesquisa</h3>

          <AiOutlineClose size={24} onClick={closeMenu} />
        </div>

        <div className="contentSearch">
          <div className="content">
            <label htmlFor="">O que pretende pesquisar</label>
            <select>
              <option>Serviços</option>
              <option>Blog</option>
            </select>
          </div>

          <div className="content">
            <label htmlFor="">{'Pesquisa'}</label>
            <input type="text" placeholder={'Digite a palavra-chave'} />
          </div>

          <button onClick={closeMenu}>
            Pesquisar
            <BiSearch size={'1.2rem'} />
          </button>
        </div>
      </div>
    </MenuContainer>
  )
}

export default SearchModal
