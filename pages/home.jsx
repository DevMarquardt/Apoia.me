import HeaderComponent from '../components/HeaderComponent'
import HomeComponent from '../components/HomeComponent'
import FooterComponent from '../components/FooterComponent'

export default function Home() {
  return (
    <>
      <header>
        <HeaderComponent />
      </header>
      
      <main>
        <HomeComponent />
      </main>

      <footer>
        <FooterComponent />
      </footer>

    </>
  )
}
