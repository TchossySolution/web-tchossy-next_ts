import styled from 'styled-components'
import { NavLink } from '../../../NavLink'
export const ContainerPosts = styled.div`
  margin: 0 0 3rem 0;
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 5px;
  width: 100%;
  /* border-bottom: 5px solid ${props =>
    props.theme.colors['brand-primary']}; */

  .containerImg {
    position: relative;
    width: 5rem;
    height: 5rem;
    margin-bottom: 1rem;

    img {
      width: 100%;
      height: 100%;
      position: absolute;
      margin-top: 0.6rem;
      transition: all 0.3s;
      object-fit: cover;
    }
  }

  .containerInfProduct {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-direction: column;
    padding: 0 0.8rem;

    .name {
      font-size: 1rem;
      font-weight: 700;
      max-width: 190px;

      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .containerInfProduct {
      font-size: 1rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 190px;
    }
  }
`
export const SLink = styled.div`
  color: #111;
  font-family: 'Montserrat', sans-serif;

  transition: 0.4s ease;

  :hover {
    color: ${props => props.theme.colors['brand-primary']};
    transform: translateX(0.4rem);
  }
`
