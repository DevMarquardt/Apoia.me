import HeaderComponent from '../components/HeaderComponent'
import RegisterComponent from '../components/RegisterComponent'
import FooterComponent from '../components/FooterComponent'

export default function Home() {
  return (
    <>
      <header>
        <HeaderComponent />
      </header>

      <main>
        <RegisterComponent />
      </main>
      <footer>
        <FooterComponent />
      </footer>

    </>
  )
}
