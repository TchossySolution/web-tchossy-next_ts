import styled from 'styled-components'

export const ContainerHome = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .containerSwiper {
    /* height: calc(100vh - 6.6rem); */
  }

  .swiper {
    width: 100vw;
    height: 100%;

    overflow: hidden;
  }
  .swiper-slide {
    position: relative;
    text-align: center;
    font-size: 18px;
    background: #fff;
    overflow: hidden;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;

    h1 {
      position: absolute;
      left: 50px;
    }
  }
  .swiper-slide img {
    /* position: absolute; */
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`
