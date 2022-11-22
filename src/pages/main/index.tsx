import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Pagination, Grid } from 'swiper'
import { Navigation } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import RootLayoutMain from '../../Layout/RootLayoutMain'
import { ContainerHome } from '../../styles/pages/_main/HomeStyles'

function Home() {
  return (
    <ContainerHome>
      <div className="containerSwiper">
        <Swiper
          pagination={{
            clickable: true,
            dynamicBullets: true
          }}
          loop={true}
          autoplay={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <h1> Tecnologia </h1>
            <img src="https://portal.inss.gov.ao/wp-content/uploads/2021/08/inn-em-numeros-.jpg" />
          </SwiperSlide>

          <SwiperSlide>
            <h1> Tecnologia </h1>
            <img src="https://portal.inss.gov.ao/wp-content/uploads/2021/08/inn-em-numeros-.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </ContainerHome>
  )
}

Home.layout = RootLayoutMain

export default Home
