import styled from 'styled-components'
export const ContainerPosts = styled.div`
  flex: 1;
  max-width: 28rem;
  min-width: 20rem;
  margin: 1rem 0;
  background-color: white;
  border-radius: 5px;
  border-top: 5px solid ${props => props.theme.colors['brand-primary']};
  box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.13);

  .containerImg {
    position: relative;
    width: 100%;
    height: 18rem;
    margin-bottom: 1rem;
  }
  img {
    position: absolute;
    width: 100%;
    height: 20rem;
    object-fit: cover;
  }

  .containerInfPosts {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 3rem 1rem 1rem 1rem;

    cursor: pointer;

    .headerTotal {
      position: relative;
      width: 100%;
      padding: 1rem 0;

      border-bottom: 0.1rem solid #ddd;

      strong {
        line-height: 2rem;
        font-size: 1.2rem;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        color: #111;

        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;

        transition: 0.5s ease;

        :hover {
          color: ${props => props.theme.colors['brand-primary']};
        }
      }
      ::after {
        position: absolute;
        content: '';
        left: 0;
        bottom: -2px;
        width: 20%;
        height: 0.2rem;
        background-color: ${props => props.theme.colors['brand-primary']};
      }
    }

    .descriptionPost {
      border-bottom: 0.1rem solid #ddd;

      p {
        margin: 1.6rem 0;
        font-size: 0.9rem;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        color: #111;
        line-height: 1.8rem;

        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }
  }

  .containerOtherInfo {
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.6rem;

    strong {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      gap: 0.6rem;

      line-height: 2rem;
      font-size: 0.8rem;
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      color: #474746;
    }
  }

  @media (max-width: 780px) {
    min-width: 16rem;
  }
`
export const SButton = styled.button`
  position: relative;
  padding: 1rem 1.8rem;
  margin: 2rem 1rem;
  background-color: ${props => props.theme.colors['brand-primary']};
  border: none;

  cursor: pointer;
  transition: 0.6s ease;

  ::before {
    position: absolute;
    content: '';
    left: 50%;
    right: 50%;
    top: 0;
    width: 3%;
    height: 100%;
    transform: translate(-50%, 0%);
    background-color: transparent;
    z-index: 1;
    transition: 0.4s ease;
  }

  :hover::before {
    width: 100%;
    background-color: #000;
  }

  :active::before {
    background-color: #1d1e1d;
  }

  div {
    position: relative;
    color: #fff;
    font-size: 0.9rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.6rem;
    letter-spacing: 1px;
    z-index: 1;
  }
`
