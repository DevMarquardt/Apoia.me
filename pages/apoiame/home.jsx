import HeaderComponent from '../../components/HeaderComponent'
import HomeComponent from '../../components/HomeComponent'
import FooterComponent from '@/components/FooterComponent'

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <main>
        <HomeComponent />
      </main>
      <FooterComponent />

    </>
  )
}
