import React, { useContext, useState } from 'react'

import { TfiBarChart } from 'react-icons/tfi'

import { IChildren } from '../../../../interfaces/children'
import { NavLink } from '../../../NavLink'

import { CardContainer } from './styles'

interface RenderResumeServiceInterface {
  title: string
  description: string
  icon: any
}

const RenderResumeService: React.FC<RenderResumeServiceInterface> = ({
  title,
  description,
  icon
}): JSX.Element => {
  return (
    <CardContainer>
      <div className="containerContent">
        <div className="contentLeft">
          <h4>{title}</h4>

          <p>{description}</p>
        </div>

        <div className="contentRight">
          <div className="icon">{icon}</div>
        </div>
      </div>

      <div className="containerLinesLeft">
        <div className="line1"></div>
        <div className="line2"></div>
      </div>
    </CardContainer>
  )
}

export default RenderResumeService
