import React, { useState } from 'react'
import { StarRatingContainer } from './styles'

interface StarRatingInterface {
  numberStars?: number
}

const StarRating = ({ numberStars }: StarRatingInterface) => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  return (
    <StarRatingContainer>
      {[...Array(numberStars)].map((star, index) => {
        index += 1
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? 'on' : 'off'}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        )
      })}
    </StarRatingContainer>
  )
}

export default StarRating
