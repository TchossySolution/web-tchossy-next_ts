import styled from 'styled-components'
import { NavLink } from '../../../components/NavLink'

export const ContainerContacts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;

  .containerContent {
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

  .containerMap {
    position: relative;
    width: 100%;
    height: 30rem;

    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
  }
`

export const ContainerContactsUs = styled.section`
  position: relative;

  width: 100%;
  margin: 6rem 2rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .contentLeft {
    position: relative;
    width: 40%;
    padding: 0 1.4rem 0 0;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 2rem;

    .containerLink {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      gap: 1rem;

      .containerLinkContacts {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        gap: 1rem;

        .containerIcon {
          border-radius: 50%;
          background-image: -moz-linear-gradient(
            0deg,
            #5f2dee 0%,
            #b882fc 100%
          );
          background-image: -webkit-linear-gradient(
            0deg,
            #5f2dee 0%,
            #b882fc 100%
          );
          background-image: -ms-linear-gradient(0deg, #5f2dee 0%, #b882fc 100%);
          box-shadow: 0px 5px 30px 0px rgba(0, 0, 0, 0.1);
          min-width: 5.6rem;
          position: relative;
          height: 5.6rem;
          z-index: 2;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 12px;

          .backgroundIcon {
            position: absolute;
            border-radius: 50%;

            min-width: 5rem;
            height: 5rem;

            display: flex;
            align-items: center;
            justify-content: center;
            background-color: ${({ theme }) => theme.colors['base-white']};

            svg {
              font-size: 2rem;
              color: ${({ theme }) => theme.colors['brand-pink-dark']};
            }
          }
        }

        .containerInfo {
          display: flex;
          justify-content: center;
          align-items: flex-start center;
          flex-direction: column;
          gap: 0.4rem;

          p {
            font-size: 0.9rem;
            color: ${({ theme }) => theme.colors['base-text']};
          }
          a {
            font-size: 1.1rem;
            font-weight: 600;
            color: ${({ theme }) => theme.colors['base-title']};
          }
        }
      }
    }
  }

  .contentRight {
    width: 60%;
    padding: 4rem;

    display: flex;
    flex-direction: column;
    gap: 1.4rem;

    background-color: ${({ theme }) => theme.colors['brand-base-dark']};
    background-image: url('https://demo.ovatheme.com/infetech/wp-content/uploads/2022/03/bg-contact.png');
    background-repeat: no-repeat;
    background-size: cover;

    .containerRowInput {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 1.4rem;

      input {
        width: 100%;
        font-size: 0.9rem;
        color: ${({ theme }) => theme.colors['base-text']};
        border: none;
        padding: 1rem;
      }
    }

    textarea {
      width: 100%;
      font-size: 0.9rem;
      color: ${({ theme }) => theme.colors['base-text']};
      border: none;
      padding: 1rem;
    }
  }

  .containerTitleSection {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 0.4rem;

    h4 {
      position: relative;

      font-size: 1rem;
      color: ${({ theme }) => theme.colors['brand-primary']};

      padding-left: 2.6rem;
      ::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        margin: auto 0;

        height: 0.16rem;
        width: 2rem;
        background-color: ${({ theme }) => theme.colors['brand-primary']};
      }
    }
    h1 {
      font-size: 2.8rem;
      color: ${({ theme }) => theme.colors['base-title']};
    }
  }

  @media (max-width: 1155px) {
    flex-direction: column;
    gap: 2rem;

    .contentLeft {
      width: 90%;
    }

    .contentRight {
      width: 90%;
    }
  }

  @media (max-width: 670px) {
    .contentRight {
      .containerRowInput {
        flex-direction: column;
      }
    }
  }
  @media (max-width: 488px) {
    .contentLeft {
      .containerLink {
        gap: 2rem;

        .containerLinkContacts {
          flex-direction: column;
          align-items: flex-start;
        }
      }
    }
  }
`
