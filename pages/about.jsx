import HeaderComponent from '../components/HeaderComponent'
import AboutComponent from '../components/AboutComponent'
import FooterComponent from '../components/FooterComponent'

export default function AboutUs() {
  return (
    <>
      <header>
        <HeaderComponent />
      </header>

      <main>
        <AboutComponent />
      </main>

      <footer>
        <FooterComponent />
      </footer>

    </>
  )
}
