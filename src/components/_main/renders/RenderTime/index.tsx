import React, { useContext, useState } from 'react'
import { NavLink } from '../../../NavLink'
import { TimeContainer } from './styles'

type socialLinksType = {
  type: string
  link: string
}

type RenderTimeInterface = {
  imgUrl: string
  name: string
  role: string
  socialLinks: socialLinksType
}

const RenderTime: React.FC<RenderTimeInterface> = ({
  imgUrl,
  name,
  role,
  socialLinks
}): JSX.Element => {
  return (
    <TimeContainer>
      <NavLink href={`/time/123/${name}`}>
        <div className="containerContent">
          <div className="containerImgMember">
            <img src={imgUrl} alt="" />
            <div className="shadow"></div>
          </div>

          <div className="containerInfo">
            <h2> {name} </h2>

            <p> {role} </p>
          </div>
        </div>
      </NavLink>
    </TimeContainer>
  )
}

export default RenderTime
