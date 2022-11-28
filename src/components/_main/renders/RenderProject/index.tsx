import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'
import { BiMessageDetail, BiUserCircle } from 'react-icons/bi'
import { routsNameMain } from '../../../../data/routsName'
import { defaultTheme } from '../../../../themes/default'
import { NavLink } from '../../../NavLink'
import ButtonBase from '../../buttons/ButtonBase'

import { CardContainer } from './styles'

interface RenderProjectInterface {
  imgUrl: string
  link: string
  category: string
  tags: string[]
}

const RenderProject: React.FC<RenderProjectInterface> = ({
  imgUrl,
  link,
  category,
  tags
}): JSX.Element => {
  const listTags = tags.map((tag, index) => {
    const lastPosition = tags[tags.length - 1]
    if (tag == lastPosition) {
      return tag + ' '
    } else {
      return tag + ' ' + '/ '
    }
  })
  return (
    <CardContainer>
      <Link href={link}>
        <img src={imgUrl} alt="" />

        <div className="containerInfo">
          <h2> {category} </h2>
          <h3> {listTags}</h3>
        </div>

        <div className="mask"></div>
        <div className="shadow"></div>
      </Link>
    </CardContainer>
  )
}

export default RenderProject
