import styled from 'styled-components'
import { NavLink } from '../../../components/NavLink'

export const ContainerBlog = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;

  .container {
    width: 95%;
    max-width: 1390px;

    display: flex;
    padding: 3rem 2rem;
    margin: 2rem 0;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;

    @media (max-width: 1349px) {
      width: 100%;
    }

    @media (max-width: 780px) {
      flex-direction: column;
    }
  }
`

export const ContainerPosts = styled.div`
  margin: 1rem 0;
  background-color: white;
  border-radius: 5px;
  border-top: 5px solid ${props => props.theme.colors['brand-primary']};

  .post {
    box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.13);
    padding: 0 0 1.6rem 0;

    .containerImg {
      position: relative;
      width: 100%;
      height: 26rem;

      img {
        position: absolute;
        width: 100%;
        height: 26rem;
        object-fit: cover;
      }

      .containerOtherInfo {
        position: absolute;
        bottom: -2rem;

        width: 100%;
        background-color: ${props => props.theme.colors['brand-primary']};
        padding: 0.8rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;

        gap: 0.6rem;

        strong {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: row;
          gap: 0.6rem;

          line-height: 2rem;
          font-size: 0.9rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          color: #fff;
        }
      }
    }

    .containerInfPosts {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 1rem;
      margin: 3rem 1rem 1rem 1rem;

      .headerTotal {
        position: relative;
        width: 100%;
        padding: 1rem 0;

        border-bottom: 0.1rem solid #ddd;

        strong {
          line-height: 2rem;
          font-size: 1.4rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          color: #111;

          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;

          transition: 0.5s ease;

          :hover {
            color: ${props => props.theme.colors['brand-primary']};
          }
        }
        ::after {
          position: absolute;
          content: '';
          left: 0;
          bottom: -2px;
          width: 20%;
          height: 0.2rem;
          background-color: ${props => props.theme.colors['brand-primary']};
        }
      }

      .containerAllSectionPost {
        display: flex;
        flex-direction: column;
        gap: 4.4rem;

        .descriptionPost {
          border-bottom: 0.1rem solid #ddd;

          p {
            margin: 1.6rem 0;
            font-size: 1rem;
            font-family: 'Montserrat', sans-serif;
            font-weight: 400;
            color: #111;
            line-height: 1.8rem;
          }

          .epigraph {
            width: 100%;
            padding: 1.4rem 1.4rem;
            background-color: #f3f3f3;
            display: flex;
            flex-direction: column;
            gap: 1rem;

            border-left: 0.2rem solid
              ${props => props.theme.colors['brand-primary']};
            border-top-left-radius: 0.26rem;
            border-bottom-left-radius: 0.26rem;

            .contentLeft {
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              gap: 1rem;

              svg {
                font-size: 2.6rem;
                color: ${props => props.theme.colors['brand-primary']};
              }

              p {
                font-size: 1rem;
                line-height: 1.8rem;
                color: ${props => props.theme.colors['base-text']};
                font-style: italic;
              }
            }

            h4 {
              font-size: 1rem;
              line-height: 1.8rem;
              color: #3b3b3b;
              font-weight: 600;
              color: ${props => props.theme.colors['base-text']};
              font-style: italic;
            }
          }

          .containerPhotosRow {
            width: 100%;
            padding-top: 4rem;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            flex-wrap: wrap;
            gap: 4rem 1.6rem;

            .photosPosts {
              position: relative;
              display: block;

              max-width: 24rem;
              max-height: 16rem;

              object-fit: cover;
              overflow: hidden;
              background-color: red;

              transition: 0.4s ease;
              img {
                width: 100%;
                vertical-align: middle;
                display: inline-block;
              }

              :hover {
                transform: scale(1.06);
              }
            }
          }
        }
      }
    }
  }
`

export const SLink = styled.span`
  padding: 0.7rem 0;
  color: #111;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'Montserrat', sans-serif;

  cursor: pointer;
  transition: 0.4s ease;

  :hover {
    color: ${props => props.theme.colors['brand-primary']};
    transform: translateX(0.4rem);
  }
`
