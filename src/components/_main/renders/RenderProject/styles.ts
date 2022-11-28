import styled, { keyframes } from 'styled-components'

export const CardContainer = styled.div`
  position: relative;
  flex: 1;
  position: relative;

  max-width: 26rem;
  min-width: 20rem;
  height: 32rem;

  cursor: pointer;

  transition: ease 0.46s;

  object-fit: cover;
  overflow: hidden;

  img {
    position: absolute;
    right: -10rem;

    height: 100%;
    margin: auto 0;

    transition: 0.5s ease;

    z-index: 1;
  }

  .mask {
    opacity: 0;
    -webkit-transition: 0.5s;
    transition: 0.5s;

    background: linear-gradient(
      0deg,
      ${props => props.theme.colors['brand-pink']} 0%,
      rgba(184, 130, 252, 0) 65%
    );
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 0;

    width: 20%;
    height: 10%;

    z-index: 2;
  }

  .shadow {
    background: linear-gradient(0deg, black 0%, rgba(0, 0, 0, 0.2) 65%);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;

    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .containerInfo {
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.4rem;
    padding: 1.4rem 2.4rem;
    text-align: left;

    z-index: 20;

    h2 {
      font-size: 1.4rem;
      text-transform: capitalize;
      text-align: start;
      transition: ease 0.5s;
      color: ${props => props.theme.colors['base-white']};

      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    h3 {
      font-size: 0.9rem;
      text-transform: uppercase;
      text-align: start;
      transition: ease 0.5s;
      color: ${props => props.theme.colors['brand-secondary']};
    }
  }

  :hover {
    img {
      transform: scale(1.06);
    }

    .mask {
      opacity: 1;

      width: 100%;
      height: 100%;
    }

    h3 {
      color: ${props => props.theme.colors['base-white']};
    }
  }
`
