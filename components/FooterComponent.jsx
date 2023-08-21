export default function FooterComponent() {
    return (
        <>

            <div class="bg-headerBack ">
                <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8 bg-headerBack">
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
                            <span href="home" className=" font-semibold text-3xl bg-gradient-to-r from-laranjaForte to-laranjaClaro bg-clip-text text-transparent"> .me</span>
                        </a>
                        <ul class="space-x-10 flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="about" className=" hover:no-underline hover:text-laranjaForte hover:duration-300"> Sobre nós</a>
                            </li>
                            <li>
                                <a href="metas" className=" hover:no-underline hover:text-laranjaForte hover:duration-300"> Metas</a>
                            </li>
                        </ul>
                    </div>

                    <span class="block text-sm text-gray-500 sm:text-center">© 2023 <a href="home" class="hover:no-underline hover:text-laranjaForte hover:duration-300">Apoia.me™</a>. Todos os direitos reservados.</span>
                </div>
            </div>

        </>
    )
}