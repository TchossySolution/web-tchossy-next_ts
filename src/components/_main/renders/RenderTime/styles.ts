import styled, { keyframes } from 'styled-components'

export const TimeContainer = styled.div`
  position: relative;
  flex: 1;

  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;

  width: 100%;
  max-width: 28rem;
  min-width: 16rem;

  cursor: pointer;

  transition: ease 0.46s;

  .containerImgMember {
    position: relative;
    display: block;
    width: 100%;
    height: auto;

    object-fit: cover;
    overflow: hidden;

    img {
      width: 100%;
      vertical-align: middle;
      display: inline-block;
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

  .containerContent {
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;

    .containerInfo {
      width: 100%;
      height: auto;

      background-color: ${({ theme }) => theme.colors['base-white']};

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.6rem;
      padding: 1.4rem 3rem;
      text-align: left;

      transition: ease 0.5s;

      h2 {
        font-size: 1.18rem;
        text-transform: capitalize;
        text-align: center;
        transition: ease 0.5s;
        color: ${props => props.theme.colors['base-title']};

        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  :hover {
    .shadow {
      height: calc(100% - 0.2rem);
    }
  }
`
