import HeaderComponent from '../components/HeaderComponent'
import ParceirosComponent from '../components/ParceirosComponent'
import FooterComponent from '../components/FooterComponent'

export default function parceiros() {
    return (
        <>

            <header>
                <HeaderComponent />
            </header>
            <main>
                <ParceirosComponent />
            </main>
            <footer>
                <FooterComponent />
            </footer>
        </>
    )
}