import HeaderComponent from '../components/HeaderComponent'
import MetasComponent from '../components/MetasComponent'
import FooterComponent from '../components/FooterComponent'

export default function metas() {
    return (
    <>
    <header>
        <HeaderComponent />
    </header>

    <main>
        <MetasComponent />
    </main>

    <footer>
        <FooterComponent />
    </footer>

    </>
    )
}