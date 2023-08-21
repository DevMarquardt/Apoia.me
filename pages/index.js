import FooterComponent from '@/components/FooterComponent'
import HeaderComponent from '../components/HeaderComponent'
import HomeComponent from '../components/HomeComponent'

export default function Home() {
  return (
    <>
      <main >
        <HeaderComponent />
        <HomeComponent />
        <FooterComponent/>
      </main>
    </>
  )
}
