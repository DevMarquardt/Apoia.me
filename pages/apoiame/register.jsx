import HeaderComponent from '../../components/HeaderComponent'
import RegisterComponent from '../../components/RegisterComponent'
import FooterComponent from '@/components/FooterComponent'

export default function Home() {
  return (
    <>
            <HeaderComponent />
      <main>
        <RegisterComponent />
      </main>
      <FooterComponent/>

    </>
  )
}
