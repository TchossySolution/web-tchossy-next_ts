import { StarRatingStaticContainer } from './styles'

interface StarRatingStaticInterface {
  numberStars?: number
}

const StarRatingStatic = ({ numberStars }: StarRatingStaticInterface) => {
  return (
    <StarRatingStaticContainer>
      {[...Array(numberStars)].map((star, index) => {
        return (
          <span key={index} className="star">
            &#9733;
          </span>
        )
      })}
    </StarRatingStaticContainer>
  )
}

export default StarRatingStatic
