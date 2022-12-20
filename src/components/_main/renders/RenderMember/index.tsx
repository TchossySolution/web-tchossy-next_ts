import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaShareAlt } from 'react-icons/fa'
import { routsNameMain } from '../../../../data/routsName'
import { routsNameString } from '../../../../data/routsNameString'
import {
  memberTimeType,
  socialLinksType
} from '../../../../models/types/memberTime'
import { NavLink } from '../../../NavLink'
import { TimeContainer } from './styles'

function RenderMember({ memberTime }: memberTimeType) {
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
      <Link
        href={routsNameMain.otherPages.team.details}
        as={`${routsNameString.otherPages.team.details as string}${
          memberTime._id
        }/${memberTime.name}`}
      >
        <div className="containerContent">
          <div className="containerImgMember">
            <img src={memberTime.imgUrl} alt="" />

            {/* <div className="containerSocialMedia">{renderSocialMedia}</div> */}
            <div className="shadow"></div>
          </div>

          <div className="containerInfo">
            <div className="content">
              <h2> {memberTime.name} </h2>
              <p> {memberTime.role} </p>
            </div>

            <div className="containerShare">
              <FaShareAlt />
            </div>
          </div>
        </div>
      </Link>
    </TimeContainer>
  )
}

export default RenderMember
