import React, { useContext, useState } from 'react'
import StarRatingStatic from '../../others/StarRatingStatic'

import { CardContainer } from './styles'

interface RenderDeponentsInterface {
  imgUrl: string
  author: string
  deponents: string
  numberStars: number
}

const RenderDeponents: React.FC<RenderDeponentsInterface> = ({
  imgUrl,
  author,
  deponents,
  numberStars
}): JSX.Element => {
  return (
    <CardContainer>
      <div className="containerRenderDeponents">
        <div className="containerImg">
          <img src={imgUrl} alt="" />
        </div>

        <div className="contentBase">
          <h4>{author}</h4>

          <div className="containerStars">
            <StarRatingStatic numberStars={numberStars} />
          </div>
        </div>

        <div className="contentDeponents">
          <p> {deponents} </p>
        </div>
      </div>
    </CardContainer>
  )
}

export default RenderDeponents
