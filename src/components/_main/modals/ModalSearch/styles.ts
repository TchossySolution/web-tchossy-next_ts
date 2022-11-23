import styled, { css } from 'styled-components'

interface IBtn {
  isVisible: boolean
}

export const MenuContainer = styled.section<IBtn>`
  width: 100%;
  height: 100%;
  backdrop-filter: blur(0.4rem);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgb(0, 0, 0, 0.3);

  opacity: 0;
  pointer-events: none;

  transition: 0.5s ease;
  transform: translateY(4rem);

  > svg {
    color: #fff;
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 5;
    transform: rotate(45deg);
    transition: 0.7s ease;
  }

  .containerSearch {
    width: 60%;
    max-width: 40rem;
    background-color: ${props => props.theme.colors['base-background']};
    padding: 0rem 0rem;
    gap: 0.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 0.4rem;

    .headerSearch {
      width: 100%;
      padding: 1rem;
      background-color: ${props => props.theme.colors['base-gray']};

      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;

      border-radius: 0.4rem 0.4rem 0rem 0rem;

      svg {
        color: ${props => props.theme.colors['brand-primary']};

        :active {
          color: #ddd;
        }
      }
    }

    .contentSearch {
      width: 100%;
      padding: 1rem;

      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;

      gap: 1rem;

      .content {
        width: 100%;
        margin-bottom: 0.6rem;

        display: flex;
        justify-content: center;
        flex-direction: column;

        label {
          margin-bottom: 0.6rem;
        }

        select {
          width: 100%;
          padding: 0.6rem 0.4rem;

          border-radius: 2px;
          font-size: 1rem;
          margin: 0;
          outline: 0;
          color: ${props => props.theme.colors['base-text']};
          background-color: transparent;
          box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;

          option {
            width: 100%;
            height: 2rem;
            background-color: #111;
            border-radius: 2px;
            border: none;
            border-bottom: 0.1rem solid #fff;
            font-size: 1rem;
            margin: 0;
            outline: 0;
            color: #111;
            background-color: transparent;
            box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
            margin-top: 0.6rem;
          }
        }

        input {
          color: ${props => props.theme.colors['base-text']};

          background: transparent;
          padding: 0.6rem 0.4rem;

          border: 0.1rem solid #807e7e;
        }
      }

      .searchInput {
        width: 100%;
        height: 5rem;
        padding: 0 1.6rem;
        border: none;
        outline: none;

        font-size: 1.6rem;
      }

      button {
        width: 100%;
        color: #fff;
        font-size: 1rem;
        font-weight: 500;
        border: none;
        background-color: ${props => props.theme.colors['brand-primary']};
        margin-top: 1rem;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: 0.6rem;

        padding: 0.8rem 1rem;
        border-radius: 0.4rem;
      }
    }
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);

      > svg {
        transform: rotate(0deg);
      }

      ul {
        transform: scale(1);
      }
    `}
`
