import styled, { keyframes } from 'styled-components'

export const CardContainer = styled.div`
  flex: 1;
  position: relative;

  position: relative;
  max-width: 28rem;
  min-width: 20rem;

  padding: 2rem 1.6rem;

  background-color: ${({ theme }) => theme.colors['base-white']};

  overflow: hidden;

  .containerContent {
    position: relative;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    z-index: 1;

    .contentLeft {
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.6rem;

      h4 {
        font-size: 1.38rem;
        color: ${props => props.theme.colors['base-title']};
        text-transform: capitalize;
        text-align: center;
        transition: ease 0.5s;
      }

      p {
        font-size: 0.96rem;
        line-height: 1.6rem;
        transition: ease 0.5s;
      }
    }

    .contentRight {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;

      .icon {
        height: 100%;

        display: flex;
        align-self: flex-end;

        svg {
          transition: ease 0.5s;
        }
      }
    }
  }

  .containerLinesLeft {
    position: absolute;
    left: 2rem;
    top: 0;
    height: 100%;

    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    transition: 0.5s ease;
    transform: rotate(30deg);

    z-index: 10;

    .line1 {
      height: calc(100% + 10rem);
      width: 4rem;
      background-color: ${({ theme }) => theme.colors['brand-primary-light']};
      opacity: 0.4;
    }
    .line2 {
      height: calc(100% + 10rem);
      width: 4rem;
      background-color: ${({ theme }) => theme.colors['brand-secondary']};
      opacity: 0.3;
    }
  }

  ::before {
    position: absolute;
    content: '';
    right: 0%;
    top: 0;
    width: 2%;
    height: 100%;
    z-index: 1;
    transition: 0.4s ease;

    background-color: ${({ theme }) => theme.colors['brand-primary']};
  }

  :hover {
    ::before {
      width: 100%;
    }

    .containerLinesLeft {
      left: 0rem;
      display: flex;
    }

    .contentLeft {
      h4 {
        color: ${props => props.theme.colors['base-white']};
      }

      p {
        color: ${props => props.theme.colors['base-white']};
      }
    }

    .contentRight {
      .icon {
        svg {
          color: ${props => props.theme.colors['base-white']};
        }
      }
    }
  }
`
