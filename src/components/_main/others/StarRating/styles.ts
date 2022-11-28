import styled, { keyframes } from 'styled-components'

export const StarRatingContainer = styled.div`
  .star {
    font-size: 1.4rem;
  }

  button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .on {
    color: #ffe02e;
  }
  .off {
    color: #ccc;
  }
`
