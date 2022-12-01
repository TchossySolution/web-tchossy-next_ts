import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaShareAlt } from 'react-icons/fa'
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
  socialLinks: socialLinksType[]
}

const RenderTime: React.FC<RenderTimeInterface> = ({
  imgUrl,
  name,
  role,
  socialLinks
}): JSX.Element => {
  function typeLink(item: socialLinksType, index: number) {
    switch (item.type) {
      case 'facebook':
        return (
          <Link key={index} href={item.link}>
            <span>
              <BsFacebook />
            </span>
          </Link>
        )

      case 'instagram':
        return (
          <Link key={index} href={item.link}>
            <span>
              <BsInstagram />
            </span>
          </Link>
        )

      case 'twitter':
        return (
          <Link key={index} href={item.link}>
            <span>
              <BsTwitter />
            </span>
          </Link>
        )

      default:
        break
    }
  }
  // const renderSocialMedia = socialLinks.map((item, index) =>
  //   typeLink(item, index)
  // )

  return (
    <TimeContainer>
      <NavLink href={`/time/123/${name}`}>
        <div className="containerContent">
          <div className="containerImgMember">
            <img src={imgUrl} alt="" />

            {/* <div className="containerSocialMedia">{renderSocialMedia}</div> */}
            <div className="shadow"></div>
          </div>

          <div className="containerInfo">
            <div className="content">
              <h2> {name} </h2>
              <p> {role} </p>
            </div>

            <div className="containerShare">
              <FaShareAlt />
            </div>
          </div>
        </div>
      </NavLink>
    </TimeContainer>
  )
}

export default RenderTime
