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
      margin: 10rem 0;

      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .contentLeft {
        position: relative;
        width: 50%;
        padding: 0 1.4rem 0 0;

        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;

        .containerImagesTop {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;

          .containerImg1 {
            position: relative;
            display: block;

            width: 90%;
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
            top: -4rem;
            right: 0;
            display: block;

            object-fit: cover;
            overflow: hidden;

            img {
              vertical-align: middle;
              display: inline-block;
            }
          }
        }

        .containerImagesBottom {
          position: absolute;
          bottom: 0;
          right: 4rem;

          .containerImg {
            position: relative;
            display: block;

            max-height: 18rem;

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
        width: 50%;

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
          flex-direction: column;
          gap: 1rem;

          margin-bottom: 1.6rem;

          li {
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
          width: 100%;

          padding-bottom: 8rem;
          margin-bottom: 2rem;
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

  .solutions {
    .contentSolutions {
      position: relative;

      width: 100%;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 6rem 2rem;

      z-index: 10;
    }
  }

  .services {
    padding: 10rem 0 6rem 0;
    background-color: ${({ theme }) => theme.colors['brand-base-dark']};
    background-image: url('backgrounds/bg-khow-us.png');
    background-repeat: no-repeat;
    background-size: cover;

    .containerColumnServices {
      padding: 2.6rem 0;

      .containerRowServices {
        width: 100%;
        margin-top: 0.28rem;

        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 0.28rem;
        flex-flow: row wrap;
      }
    }
  }

  .weAreReady {
    .contentWeAreReady {
      position: relative;

      width: 100%;
      padding: 5rem 4rem;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 5rem;

      background-color: transparent;
      background-image: linear-gradient(
        270deg,
        ${props => props.theme.colors['brand-pink']} 0%,
        ${props => props.theme.colors['brand-pink-dark']} 100%
      );

      .coverBackground {
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background-image: url('https://demo.ovatheme.com/infetech/wp-content/uploads/2022/03/bg-decoration-01.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        opacity: 0.15;
      }

      .containerImg {
        position: relative;
        display: block;

        width: 10rem;
        max-height: 10rem;

        border-radius: 50% 50% 50% 50%;
        object-fit: cover;
        overflow: hidden;

        img {
          vertical-align: middle;
          display: inline-block;
        }
      }

      .contentInfo {
        flex: 1;
        min-width: 16rem;

        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 2rem;

        h1 {
          color: ${({ theme }) => theme.colors['base-white']};
          font-size: 2.6rem;
          font-weight: 700;
        }

        div {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          flex-direction: column;
          gap: 1.6rem;

          ul {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            li {
              font-size: 1rem;
              color: ${({ theme }) => theme.colors['base-white']};
              font-weight: 500;

              display: flex;
              flex-direction: row;
              gap: 0.6rem;

              svg {
                color: ${({ theme }) => theme.colors['base-white']};
              }
            }
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
          vertical-align: middle;
          display: inline-block;
        }

        :hover {
          transform: scale(1.1);
        }
      }
    }
  }

  .projects {
    margin: 6rem 0 0 0;
    padding: 6rem 0 0 0;
    background-color: #f5f5f5d5;
    background-repeat: no-repeat;
    background-size: cover;

    .containerProjectsRow {
      width: 100%;
      margin-top: 2.6rem;

      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 2.6rem;
      flex-flow: row wrap;
    }

    .containerBottom {
      width: 100%;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      padding: 2.8rem 0 5rem 0;
    }
  }

  .deponents {
    margin: 6rem 0 0 0;
    padding: 6rem 0 0 0;
    background-repeat: no-repeat;
    background-size: cover;

    .containerDeponentsRow {
      width: 100%;
      margin-top: 2.6rem;

      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 2.6rem;
      flex-flow: row wrap;
    }

    .containerBottom {
      width: 100%;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      padding: 2.8rem 0 5rem 0;
    }
  }

  .ourExperts {
    position: relative;
    width: 100%;
    padding: 4rem 0;

    .containerImg {
      position: absolute;
      top: 0;
      right: 0;
      display: block;

      /* max-width: 20rem; */

      object-fit: cover;
      overflow: hidden;

      opacity: 0.1;

      img {
        vertical-align: middle;
        display: inline-block;
      }
    }

    .containerOurExperts {
      position: relative;

      width: 100%;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 5rem;
    }
    .containerMemberExperts {
      position: relative;

      width: 100%;

      display: flex;
      flex-direction: row;
      gap: 2rem 0;
      flex-wrap: wrap;
    }
  }

  .saveTime {
    position: relative;
    padding: 5rem;

    background-color: #1d1729;

    overflow: hidden;

    .coverBackground {
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      background-color: #121212;
      background-image: url('https://demo.ovatheme.com/infetech/wp-content/uploads/2022/03/bg-attachment-01.jpg');
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      opacity: 0.3;

      mix-blend-mode: luminosity;
    }

    .containerLinesLeft {
      position: absolute;
      left: 4rem;
      top: 0;
      height: 100%;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      transform: rotate(30deg);

      .line1 {
        height: calc(100% + 16rem);
        width: 10rem;
        background-color: ${({ theme }) => theme.colors['brand-primary']};
        opacity: 0.5;
      }
    }

    .containerSaveTime {
      display: flex;
      flex-direction: row;
      gap: 1rem;

      z-index: 10;

      .containerLeft {
        width: 60%;

        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        gap: 1rem;

        .containerPlay {
          width: 6rem;
          height: 6rem;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 0.09rem solid
            ${({ theme }) => theme.colors['brand-primary-light']};
          border-radius: 100%;

          span {
            width: 4rem;
            height: 4rem;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 100%;

            background-color: ${({ theme }) => theme.colors['brand-secondary']};
            transition: 0.4s ease;

            svg {
              font-size: 1.2rem;
              color: ${({ theme }) => theme.colors['base-white']};
              border-radius: 100%;
            }
          }

          :hover {
            span {
              background-color: ${({ theme }) => theme.colors['brand-primary']};
            }
          }
        }

        .containerContent {
          h6 {
            font-size: 0.9rem;
            font-weight: 500;
            color: ${({ theme }) => theme.colors['base-white']};
          }
          h1 {
            font-size: 2.6rem;
            font-weight: 600;
            color: ${({ theme }) => theme.colors['base-white']};
          }
        }
      }

      .containerRight {
        width: 40%;

        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        flex-direction: column;
        gap: 1rem;

        .containerCalculations {
          width: 100%;
          max-width: 18rem;
          padding: 1.2rem 2rem;

          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          flex-direction: column;
          gap: 1rem;

          border: 0.1rem solid ${({ theme }) => theme.colors['brand-secondary']};

          /* background-color: ${({ theme }) =>
            theme.colors['brand-secondary']}; */

          .containerIcon {
            width: 3rem;
            height: 3rem;

            display: flex;
            align-items: center;
            justify-content: center;

            border: 0.2rem solid
              ${({ theme }) => theme.colors['brand-primary-light']};
            border-radius: 100%;

            transition: 0.3s ease;

            svg {
              font-size: 1.4rem;
              color: ${({ theme }) => theme.colors['base-white']};

              transition: 0.3s ease;
            }
          }

          h3 {
            font-size: 1.4rem;
            font-weight: 600;
            color: ${({ theme }) => theme.colors['base-white']};
          }

          p {
            font-size: 1rem;
            font-weight: 400;
            color: ${({ theme }) => theme.colors['base-white']};
          }

          :hover {
            .containerIcon {
              transform: rotateY(160deg);

              svg {
                color: ${({ theme }) => theme.colors['brand-secondary']};
              }
            }
          }
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
          align-items: flex-start;
        }
      }
    }
  }

  .ourBlog {
    width: 100%;
    margin: 10rem 0;

    .containerOurBlog {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }

  .prices {
    margin: 3rem 0 6rem 0;
    padding: 3rem 0 6rem 0;
    background-repeat: no-repeat;
    background-size: cover;

    .containerPricesRow {
      width: 100%;
      margin-top: 2.6rem;

      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 2.6rem;
      flex-flow: row wrap;
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
