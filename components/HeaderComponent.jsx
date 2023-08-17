export default function HeaderComponent() {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"></link>
            <header className=" bg-headerBack h-16 flex items-center justify-center font-montserrat">
                <nav className="text-lg font-semibold">
                    <ul className="space-x-10 text-white">
                        <a href="" className=" text-3xl bg-gradient-to-r from-laranjaForte to-laranjaClaro bg-clip-text text-transparent"> .me</a>
                        <a href="" className=" hover:no-underline hover:text-laranjaForte hover:duration-300"> Início</a>
                        <a href="" className=" hover:no-underline hover:text-laranjaForte hover:duration-300"> Sobre nós</a>
                        <a href="" className=" hover:no-underline hover:text-laranjaForte hover:duration-300"> Quero doar</a>
                        <a href="" className=" hover:no-underline hover:text-laranjaForte hover:duration-300"> Metas</a>
                        <a href="" className=" hover:no-underline hover:text-laranjaForte hover:duration-300"> Parceiros</a>
                        <button className="bg-gradient-to-r from-laranjaForte to-laranjaClaro w-32 h-8 rounded-lg hover:scale-110 transition duration-300 ease-in-out">
                            <p>Registrar-se</p>
                        </button>
                    </ul>
                </nav>
            </header>
        </>
    )
}