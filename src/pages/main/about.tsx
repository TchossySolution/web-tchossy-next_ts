import HeroSection from '../../components/_main/HeroSection'
import { ContainerAbout } from '../../styles/pages/_main/AboutStyles'

function About() {
  return (
    <ContainerAbout>
      <HeroSection
        backgroundImage="https://cdn.lifehack.org/wp-content/uploads/2015/12/11224842/Coffee.jpg"
        title="Blog"
        base1="blog"
      />
    </ContainerAbout>
  )
}
