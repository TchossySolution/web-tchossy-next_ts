import { StarRatingStaticContainer } from './styles'

interface StarRatingStaticInterface {
  numberStars?: number
}

const StarRatingStatic = ({ numberStars }: StarRatingStaticInterface) => {
  return (
    <StarRatingStaticContainer>
      {[...Array(numberStars)].map(star => {
        return <span className="star">&#9733;</span>
      })}
    </StarRatingStaticContainer>
  )
}

export default StarRatingStatic
