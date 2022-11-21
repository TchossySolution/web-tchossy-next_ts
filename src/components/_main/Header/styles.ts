import styled from 'styled-components'
import { NavLink } from '../../NavLink'

// background-color: red;

export const HeaderContainerStyles = styled.header`
  position: sticky;
  width: 100%;
  height: 6.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  .containerLogo {
    width: 18.4rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
    background-color: ${({ theme }) => theme.colors['brand-primary-dark']};
  }

  .containerMenu {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 2rem;

    .containerTop {
      display: flex;
      flex-direction: row;
      align-items: center;

      border-bottom: 0.06rem solid
        ${({ theme }) => theme.colors['base-border-gray']};

      .containerLeft {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        p {
          font-size: 0.9rem;
          font-weight: 400;
        }

        .baseInfo {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding-right: 2rem;
          gap: 1.6rem;

          .containerEmail {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.6rem;

            span {
              color: ${({ theme }) => theme.colors['base-text']};
              font-size: 0.86rem;
            }
          }

          .containerTime {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.6rem;

            span {
              font-size: 0.86rem;
            }
          }
        }
      }
      .containerRight {
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 2.6rem;
        background-color: #eee;
        padding: 0.8rem 4rem;

        svg {
          color: ${({ theme }) => theme.colors['base-black']};
          font-size: 1rem;
          transition: 0.2s;

          :hover {
            color: ${({ theme }) => theme.colors['brand-primary']};
          }
        }
      }
    }

    .containerButton {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      nav {
        span {
          display: flex;
          align-items: center;
          color: ${({ theme }) => theme.colors['base-text']};

          font-size: 1rem;
          padding: 0 4rem 0 0;
          transition: ease 0.4s;

          cursor: pointer;
        }
      }

      .containerOtherInfo {
        display: flex;
        align-items: center;
        flex-direction: row;
        padding: 0.6rem 0;
        gap: 1.6rem;

        svg {
          color: ${({ theme }) => theme.colors['base-black']};
          font-size: 2.2rem;
          transition: 0.3s;

          :hover {
            color: ${({ theme }) => theme.colors['brand-primary']};
          }
        }

        .containerCall {
          width: 3rem;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: ${({ theme }) => theme.colors['brand-primary']};
          border-radius: 100%;

          svg {
            color: ${({ theme }) => theme.colors['base-white']};
            font-size: 1.6em;
            transition: 0.2s;
          }
        }

        .containerContact {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 0.6rem;

          .contentContact {
            min-width: 14rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.6rem;

            p {
              font-size: 0.8rem;
            }
            span {
              font-size: 1rem;
              font-weight: 500;
              color: ${({ theme }) => theme.colors['base-black']};
            }
          }
        }
      }
    }
  }
`

export const SLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1.6rem 0;

  .inactive {
    color: ${props => props.theme.colors['base-text']};
  }
  .active {
    color: ${props => props.theme.colors['brand-primary']};
  }
`

export const SLink = styled(NavLink)`
  display: flex;
  align-items: center;

  font-size: 1rem;
  padding: 0 4rem 0 0;
  transition: ease 0.4s;
`
