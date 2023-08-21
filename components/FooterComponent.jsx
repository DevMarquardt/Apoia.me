export default function FooterComponent() {
    return (
        <>

            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"></link>

            <footer class=" bg-pretoDiferente ">
                <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div class="flex flex-col items-center sm:flex-row sm:justify-between">
                        <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
                            <span href="home" className=" font-semibold text-5xl bg-gradient-to-r from-laranjaForte to-laranjaClaro bg-clip-text text-transparent"> .me</span>
                        </a>
                        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="about" class="mr-4 hover:no-underline hover:text-laranjaForte hover:duration-300">Sobre nós</a>
                            </li>
                            <li>
                                <a href="metas" class="hover:no-underline hover:text-laranjaForte hover:duration-300">Metas</a>
                            </li>
                        </ul>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span class="flex justify-center md:block text-sm text-gray-500 dark:text-gray-400">© 2023 <a href="home" class="hover:no-underline hover:text-laranjaForte hover:duration-300 "> Sempre junto a você</a></span>
                </div>
            </footer>



        </>
    )
}