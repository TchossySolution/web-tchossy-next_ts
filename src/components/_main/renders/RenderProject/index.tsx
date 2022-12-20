import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'
import { routsNameMain } from '../../../../data/routsName'
import { routsNameString } from '../../../../data/routsNameString'
import { projectType } from '../../../../models/types/projectTypes'

import { CardContainer } from './styles'

function RenderProject({ project }: projectType) {
  const listTags = project.tags.map((tag, index) => {
    const lastPosition = project.tags[project.tags.length - 1]
    if (tag == lastPosition) {
      return tag + ' '
    } else {
      return tag + ' ' + '/ '
    }
  })
  return (
    <CardContainer>
      <Link
        href={routsNameMain.otherPages.projects.details}
        as={`${routsNameString.otherPages.projects.details as string}${
          project._id
        }/${project.nome}`}
      >
        <img src={project.imgUrl} alt="" />

        <div className="containerInfo">
          <h2> {project.category} </h2>
          <h3> {listTags}</h3>
        </div>

        <div className="mask"></div>
        <div className="shadow"></div>
      </Link>
    </CardContainer>
  )
}

export default RenderProject
