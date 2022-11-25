import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'
import { BiMessageDetail, BiUserCircle } from 'react-icons/bi'
import { routsNameMain } from '../../../../data/routsName'
import { defaultTheme } from '../../../../themes/default'
import { NavLink } from '../../../NavLink'
import ButtonBase from '../../buttons/ButtonBase'

import { CardContainer } from './styles'

interface RenderCardRecenteBlogInterface {
  imgUrl: string
  title: string
  author: string
  comments: number
  datePub: string
}

const RenderCardRecenteBlog: React.FC<RenderCardRecenteBlogInterface> = ({
  imgUrl,
  title,
  author,
  comments,
  datePub
}): JSX.Element => {
  const router = useRouter()

  function goTo(path: string) {
    router.push(path)
  }

  return (
    <CardContainer>
      <div>
        <div className="containerImg">
          <img src={imgUrl} alt="" />
          <div className="shadow"></div>
        </div>

        <div className="containerInfo">
          <div className="baseInfo">
            <BiUserCircle /> <span> {author} </span> <span> / </span>{' '}
            <BiMessageDetail />
            <span> {comments} comentários</span>
          </div>
          <h2> {title} </h2>

          <ButtonBase
            value={'Consulte mais informações'}
            onClick={() => goTo(routsNameMain.home)}
            colorBase={defaultTheme.colors['brand-primary']}
            colorSecondary={defaultTheme.colors['brand-super-dark']}
          />
        </div>
      </div>
    </CardContainer>
  )
}

export default RenderCardRecenteBlog
