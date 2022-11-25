import styled from 'styled-components'
import { NavLink } from '../../NavLink'

export const FooterContainerStyles = styled.footer`
  display: flex;
  flex-direction: column;

  .containerTop {
    flex: 1;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 1rem;

    padding: 8rem 2rem;

    /* background-image: url('/backgrounds/lines-footer.png'); */

    background-color: ${({ theme }) => theme.colors['brand-primary-dark']};

    > div {
      display: flex;
      flex-direction: column;
      padding: 1rem 2rem;
      gap: 1.4rem;

      h3 {
        color: ${({ theme }) => theme.colors['base-white']};
        padding: 0 0 1.1rem 0;
        position: relative;

        ::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 1.8rem;
          height: 0.16rem;
          background-color: ${({ theme }) => theme.colors['brand-primary']};
        }
      }

      ul {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;

        a {
          color: ${({ theme }) => theme.colors['base-text-gray']};
          font-size: 1rem;
          list-style: none;
          padding: 0 0 0.6rem 0;
          position: relative;

          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 0.6rem;

          ::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 0.11rem;
            background-color: ${({ theme }) => theme.colors['brand-primary']};

            transition: 0.4s ease;
          }

          :hover {
            ::before {
              width: 100%;
            }
          }

          svg {
            color: ${({ theme }) => theme.colors['brand-primary']};
          }
        }
      }

      p {
        color: ${({ theme }) => theme.colors['base-text-gray']};
        font-size: 1rem;
        position: relative;
      }
    }

    .containerInfoTchossy {
      gap: 2rem;
      max-width: 24rem;

      img {
        width: 80%;
      }

      .containerSocialMedia {
        display: flex;
        flex-direction: row;
        gap: 1.2rem;

        span {
          width: 2.4rem;
          height: 2.4rem;
          background-color: red;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 100%;

          background-color: #15191e;

          svg {
            color: ${({ theme }) => theme.colors['base-white']};
            font-size: 1rem;
            transition: 0.3s;
          }

          :hover {
            svg {
              color: ${({ theme }) => theme.colors['brand-primary']};
            }
          }
        }
      }
    }

    .containerLinks {
      max-width: 24rem;
    }
    .containerNewsletter {
      max-width: 24rem;

      .containerSendNewsletter {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;

        input {
          width: 100%;
          height: 100%;
          font-size: 0.8rem;
          padding: 0.9rem 0.9rem;

          border: none;

          ::placeholder {
            font-size: 0.8rem;
          }
        }

        button {
          height: 100%;
          padding: 0.9rem 0.9rem;
          display: flex;
          flex-direction: row;
          justify-content: center;

          background-color: ${({ theme }) => theme.colors['brand-primary']};
          border: none;

          svg {
            color: ${({ theme }) => theme.colors['base-white']};
          }
        }
      }
      .containerConcordTerms {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 0.6rem;
      }
    }
    .containerContact {
      max-width: 24rem;
    }
  }

  .containerBottom {
    display: flex;
    flex-direction: row;
    justify-content: center;

    padding: 2.6rem 2rem;

    background-color: ${({ theme }) => theme.colors['brand-super-dark']};

    p {
      font-size: 0.8rem;
      font-weight: 400;
    }
  }
`
