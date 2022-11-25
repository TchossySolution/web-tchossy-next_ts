import styled, { css } from 'styled-components'

interface IBtn {
  colorBase: string
  colorSecondary: string
  textColor?: string
  textColorSecond?: string
}

export const SButton = styled.button<IBtn>`
  position: relative;
  padding: 1rem 2rem;
  border: none;

  transition: 0.6s ease;

  ::before {
    position: absolute;
    content: '';
    right: 0%;
    top: 0;
    width: 3%;
    height: 100%;
    z-index: 1;
    transition: 0.4s ease;

    ${({ colorSecondary }) =>
      css`
        background-color: ${colorSecondary};
      `}
  }

  :hover::before {
    width: 100%;
  }

  ${({ colorBase }) =>
    css`
      background-color: ${colorBase};
    `}

  span {
    position: relative;
    padding: 0.2rem 1rem;
    ${({ textColor }) =>
      css`
        color: ${textColor ? textColor : '#fff '};
      `}
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.6rem;
    letter-spacing: 1px;
    z-index: 1;
  }

  :hover {
    span {
      ${({ textColorSecond }) =>
        css`
          color: ${textColorSecond ? textColorSecond : '#fff '};
        `}
    }
  }
`
