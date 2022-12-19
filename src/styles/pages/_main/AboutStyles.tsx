import styled from 'styled-components'

export const ContainerAbout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  section {
    position: relative;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .containerContent {
      width: 85%;
      max-width: 1390px;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1.2rem;

      @media (max-width: 1349px) {
        width: 90%;
      }
    }
    .containerRow {
      width: 100%;

      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
      gap: 4rem 1.2rem;

      padding: 1.6rem 0;

      @media (max-width: 1254px) {
        gap: 8rem 2rem;
        /* display: none; */
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
    .containerHeader {
      width: 100%;

      display: flex;
      justify-content: space-between;
      flex-direction: row;

      .containerLeft {
        width: 50%;
      }

      .containerRight {
        width: 45%;

        p {
          font-size: 0.9rem;
          font-weight: 400;
          color: ${({ theme }) => theme.colors['base-text']};
          line-height: 2rem;
        }
      }

      @media (max-width: 922px) {
        flex-direction: column;
        gap: 2rem;

        .containerLeft {
          width: 100%;
        }

        .containerRight {
          width: 100%;
        }
      }
    }
  }

  .aboutUs {
    .containerAboutUs {
      position: relative;

      width: 100%;
      margin: 10rem 0 4rem 0;

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

        .containerImagesTop {
          position: relative;
          width: 90%;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;

          .containerImg1 {
            position: relative;
            display: block;

            width: 100%;
            max-height: 26rem;

            object-fit: cover;
            overflow: hidden;

            img {
              vertical-align: middle;
              display: inline-block;
            }
          }

          .containerImg2 {
            position: absolute;
            top: 2rem;
            right: -5rem;
            display: block;

            object-fit: cover;
            overflow: hidden;

            img {
              vertical-align: middle;
              display: inline-block;
            }
          }
        }
      }

      .contentRight {
        width: 60%;

        display: flex;
        flex-direction: column;
        gap: 2rem;

        p {
          font-size: 1rem;
          color: ${({ theme }) => theme.colors['base-text']};
          font-weight: 400;
          line-height: 2rem;
        }

        .containerIconDescription {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 1.1rem;

          .iconDescription {
            flex: 1;
            width: 48%;
            display: flex;
            flex-direction: row;
            gap: 0.4rem;

            .containerIcon {
              position: relative;
              padding: 0.6rem 0.4rem;

              transition: 0.4s ease;
              ::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;

                width: 2.4rem;
                height: 2.4rem;
                background-color: ${({ theme }) =>
                  theme.colors['brand-secondary']};
                opacity: 0.4;
                border-radius: 100%;
              }

              svg {
                font-size: 3.6rem;
                color: ${({ theme }) => theme.colors['brand-primary']};
              }
            }

            span {
              font-size: 1.2rem;
              font-weight: 500;
              color: ${({ theme }) => theme.colors['base-title']};
              line-height: 1.8rem;
            }

            :hover {
              .containerIcon {
                transform: scale(1.1);
              }
            }
          }
        }

        ul {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 1rem;

          margin-bottom: 1.6rem;

          li {
            width: 100%;
            max-width: 23rem;
            font-size: 1.01rem;
            color: ${({ theme }) => theme.colors['base-text']};
            font-weight: 500;

            display: flex;
            flex-direction: row;
            gap: 0.6rem;

            svg {
              color: ${({ theme }) => theme.colors['brand-primary']};
            }
          }
        }
      }
    }

    @media (max-width: 1082px) {
      .containerAboutUs {
        flex-direction: column;

        .contentLeft {
          width: auto;

          padding-bottom: 8rem;
          margin-bottom: 2rem;

          .containerImagesTop {
            .containerImg2 {
              display: none;
            }
          }
        }
        .contentRight {
          width: 100%;
        }
      }
    }

    @media (max-width: 600px) {
      .containerAboutUs {
        .contentLeft {
          margin-bottom: 0rem;
          gap: 1rem;

          .containerImagesBottom {
            position: relative;
            right: 0rem;

            position: relative;
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;

            .containerImg {
              position: relative;
              display: block;

              width: 100%;
              max-height: 26rem;

              object-fit: cover;
              overflow: hidden;

              img {
                vertical-align: middle;
                display: inline-block;
              }
            }
          }
        }
      }
    }
  }

  .countUp {
    width: 100%;
    margin: 0 0 6rem 0;

    .containerCountUpRow {
      width: 100%;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 0rem 1.6rem;

      .contentCountUp {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.4rem;

        max-width: 14rem;

        object-fit: cover;
        overflow: hidden;

        transition: 0.4s ease;
        cursor: pointer;

        .numbers {
          display: flex;
          justify-content: center;
          flex-direction: row;

          .numberCountUp {
            color: ${({ theme }) => theme.colors['base-title']};
            font-size: 4rem;
            font-family: 'Catamaran', sans-serif;
            font-weight: 800;
          }
          span {
            color: ${({ theme }) => theme.colors['base-title']};
            font-size: 2.2rem;
            font-weight: 600;
          }
        }

        h3 {
          color: ${({ theme }) => theme.colors['brand-primary']};
          font-size: 1rem;
          text-transform: uppercase;
        }
      }
    }
  }

  .process {
    padding: 2rem 0;
    background-color: ${({ theme }) => theme.colors['brand-base-dark']};
    background-image: url('backgrounds/bg-khow-us.png');
    background-repeat: no-repeat;
    background-size: cover;

    .containerColumnProcess {
      padding: 4.6rem 0 2.6rem 0;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .containerRowProcess {
        width: 100%;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 2rem;
        flex-flow: row wrap;

        .itemProcess {
          width: 45%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          gap: 0.98rem;

          img {
            width: 4rem;
            height: 4rem;
            position: relative;
            max-width: 5rem;
          }

          .descriptionProcess {
            display: flex;
            flex-direction: column;
            gap: 0.3rem;

            h2 {
              font-size: 1.4rem;
              color: ${({ theme }) => theme.colors['base-white']};
              font-weight: 600;
              line-height: 2rem;
            }

            p {
              font-size: 1rem;
              color: ${({ theme }) => theme.colors['base-white']};
              font-weight: 400;
              line-height: 1.6rem;
            }
          }
        }
      }
    }

    @media (max-width: 1039px) {
      .containerColumnProcess {
        .containerRowProcess {
          gap: 2.6rem;

          .itemProcess {
            width: 100%;
          }
        }
      }
    }

    @media (max-width: 520px) {
      .containerColumnProcess {
        .containerRowProcess {
          gap: 3rem;

          .itemProcess {
            flex-direction: column;
          }
        }
      }
    }
  }

  .ourClients {
    width: 100%;
    margin: 6rem 0;

    .containerClientsRow {
      width: 100%;
      padding-top: 4rem;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 4rem 1.6rem;

      .clients {
        position: relative;
        display: block;

        max-width: 14rem;
        max-height: 10rem;

        object-fit: cover;
        overflow: hidden;

        transition: 0.4s ease;

        img {
          width: 100%;
          height: auto;
          vertical-align: middle;
          display: inline-block;
        }

        :hover {
          transform: scale(1.1);
        }
      }
    }
  }

  .exploreUs {
    position: relative;
    background-color: ${({ theme }) => theme.colors['brand-primary']};

    overflow: hidden;

    .containerLinesLeft {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      transform: rotate(30deg);

      .line1 {
        height: calc(100% + 10rem);
        width: 6rem;
        background-color: ${({ theme }) => theme.colors['brand-primary-light']};
        opacity: 0.4;
      }
      .line2 {
        height: calc(100% + 10rem);
        width: 6rem;
        background-color: ${({ theme }) => theme.colors['brand-secondary']};
        opacity: 0.3;
      }
    }

    .containerLinesRight {
      position: absolute;
      right: 10rem;
      top: 2rem;
      height: 100%;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      transform: rotate(30deg);

      .line1 {
        height: calc(100% + 14em);
        width: 6rem;
        background-color: ${({ theme }) => theme.colors['brand-primary-light']};
        opacity: 0.4;
      }
      .line2 {
        height: calc(100% + 18rem);
        width: 6rem;
        background-color: ${({ theme }) => theme.colors['brand-secondary']};
        opacity: 0.3;
      }

      @media (max-width: 673px) {
        display: none;
      }
    }

    .containerLinesRightInvert {
      position: absolute;
      right: -6rem;
      top: 2rem;
      height: 100%;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      transform: rotate(-30deg);

      .line1 {
        height: calc(100% + 14em);
        width: 10rem;
        background-color: ${({ theme }) => theme.colors['brand-primary-light']};
        opacity: 0.2;
      }

      @media (max-width: 673px) {
        display: none;
      }
    }

    .contentExploreUs {
      position: relative;

      width: 100%;
      padding: 5rem 0rem;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 5rem;

      div {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        h3 {
          color: ${({ theme }) => theme.colors['base-white']};
          font-size: 1rem;
          font-weight: 400;
        }
        h1 {
          color: ${({ theme }) => theme.colors['base-white']};
          font-size: 2rem;
          font-weight: 700;
        }
      }
    }
  }
`
