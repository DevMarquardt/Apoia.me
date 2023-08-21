import HeaderComponent from '../components/HeaderComponent'
import LoginComponent from '../components/LoginComponent'
import FooterComponent from '../components/FooterComponent'

export default function Home() {
  return (
    <>
      <header>
        <HeaderComponent />
      </header>

      <main>
        <LoginComponent />
      </main>
      
      <footer>
        <FooterComponent />
      </footer>
    </>
  )
}
