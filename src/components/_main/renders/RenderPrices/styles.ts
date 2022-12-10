import styled, { keyframes } from 'styled-components'

export const CardContainer = styled.div`
  flex: 1;
  position: relative;

  max-width: 24rem;
  min-width: 20rem;

  padding: 2rem 1rem;
  /* border: 0.1rem solid ${({ theme }) => theme.colors['brand-secondary']}; */

  background-color: #222429;
  background-image: url('backgrounds/bg_pricing.png');
  background-repeat: no-repeat;
  background-size: auto;
  background-position: bottom right;

  -webkit-box-shadow: 0px 0px 18px 2px rgba(0, 0, 0, 0.21);
  box-shadow: 0px 0px 18px 2px rgba(0, 0, 0, 0.21);

  transition: 0.5s ease;
  overflow: hidden;

  @keyframes zoomIn {
    0% {
      transform: scale(1);
    }
    70% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes zoomOut {
    0% {
      transform: scale(1);
    }
    70% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes rotationsIn {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes rotationsOut {
    0% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  .containerRenderPrice {
    position: relative;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    gap: 1.8rem;

    transition: 0.4s ease;

    h1 {
      font-size: 2rem;
      font-weight: 800;
      text-transform: capitalize;
      text-align: start;
      transition: ease 0.5s;
      color: ${props => props.theme.colors['base-subtitle']};

      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    p {
      font-size: 0.9rem;
      font-weight: 500;
      text-transform: capitalize;
      text-align: start;
      transition: ease 0.5s;
      color: ${props => props.theme.colors['base-text-gray']};
    }

    .containerPrice {
      width: 100%;

      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: flex-start;
      gap: 1rem;

      .containerIcon {
        animation: zoomIn 0.2s;

        svg {
          font-size: 4rem;
          color: ${props => props.theme.colors['brand-primary']};
          animation: rotationsIn 0.4s;
        }
      }

      .price {
        font-size: 2rem;
        font-weight: 800;
        color: ${props => props.theme.colors['brand-primary']};
      }
    }

    h3 {
      font-size: 1rem;
      color: ${props => props.theme.colors['base-subtitle']};
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 1rem;

      li {
        list-style: none;
        font-size: 0.9rem;
        font-weight: 600;
        color: ${props => props.theme.colors['base-text-gray']};

        span {
          font-size: 1.4rem;
          color: ${props => props.theme.colors['brand-primary']};
        }
      }
    }
  }

  ::before {
    position: absolute;
    content: '';
    left: 0%;
    top: 0;
    width: 0%;
    height: 100%;
    z-index: 1;
    transition: 0.3s ease;

    z-index: 0;

    background-color: ${({ theme }) => theme.colors['brand-primary']};
  }

  :hover {
    transform: scale(1.02);

    .containerRenderPrice {
      /* z-index: 0;
      h1 {
        color: ${props => props.theme.colors['base-white']};
      }

      p {
        color: ${props => props.theme.colors['base-white']};
      } */

      .containerPrice {
        .containerIcon {
          animation: zoomOut 0.2s;

          svg {
            color: ${props => props.theme.colors['base-white']};
            animation: rotationsOut 0.4s;
          }
        }

        /* .price {
          color: ${props => props.theme.colors['base-white']};
        } */
      }

      /* h3 {
        color: ${props => props.theme.colors['base-white']};
      }

      ul {
        li {
          color: ${props => props.theme.colors['base-white']};

          span {
            color: ${props => props.theme.colors['base-white']};
          }
        }
      } */
    }

    ::before {
      width: 2%;
    }
  }
`
