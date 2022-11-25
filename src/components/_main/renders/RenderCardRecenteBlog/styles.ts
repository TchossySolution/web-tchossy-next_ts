import styled, { keyframes } from 'styled-components'

export const CardContainer = styled.div`
  flex: 1;
  position: relative;
  max-width: 26rem;
  min-width: 20rem;

  cursor: pointer;

  border-radius: 0 0 0.8rem 0.8rem;

  transition: ease 0.46s;

  .containerImg {
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
    overflow: hidden;

    img {
      width: 100%;
    }

    .shadow {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 0%;
      background-color: #0f0f0f42;
      transition: ease 0.46s;
    }
  }

  .containerInfo {
    width: 90%;
    height: auto;

    background-color: ${({ theme }) => theme.colors['base-white']};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1.2rem;
    padding: 1.4rem 2.4rem;
    text-align: left;

    transition: ease 0.5s;

    position: absolute;
    bottom: -5.6rem;
    left: 0;
    right: 0;
    margin: 0 auto;

    z-index: 20;

    -webkit-box-shadow: 0px 9px 31px -11px rgba(0, 0, 0, 0.29);
    -moz-box-shadow: 0px 9px 31px -11px rgba(0, 0, 0, 0.29);
    box-shadow: 0px 9px 31px -11px rgba(0, 0, 0, 0.29);

    .baseInfo {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
      gap: 0.2rem;

      svg {
        font-size: 1rem;
        color: ${({ theme }) => theme.colors['brand-primary']};
      }
      span {
        font-size: 0.8rem;
        color: ${({ theme }) => theme.colors['base-text']};
      }
    }

    h2 {
      font-size: 1.4rem;
      text-transform: capitalize;
      text-align: start;
      transition: ease 0.5s;
      color: ${props => props.theme.colors['base-title']};

      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  :hover {
    .shadow {
      height: calc(100% - 0.2rem);
    }
  }
`
