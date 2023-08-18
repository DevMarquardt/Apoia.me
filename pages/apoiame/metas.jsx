import HeaderComponent from '../../components/HeaderComponent'
import MetasComponent from '@/components/MetasComponent'
import FooterComponent from '@/components/FooterComponent'

export default function metas() {
    return (
        <>

            <HeaderComponent />
            <main>
                <MetasComponent />
            </main>
            <FooterComponent/>
        </>
    )
}