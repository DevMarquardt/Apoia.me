

export default function HeaderComponent() {
    var sidebarOpen = false;
    
    function openSideBAr() {

        sidebarOpen = !sidebarOpen;

        if (sidebarOpen) {
            document.querySelector("#__next > header > nav").classList.remove('invisible');
            document.querySelector("#__next > header > nav").classList.add('visible');
        }
        else{
            document.querySelector("#__next > header > nav").classList.add('invisible');
            document.querySelector("#__next > header > nav").classList.remove('visible');
        }
    }

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"></link>
            <header className="w-full h-[6rem] bg-[#292526] font-montserrat fixed" id="header">

                <nav className="h-full bg-[#292526]">
                    <div className="pl-8 text-3xl h-full text-white flex  items-center w-full justify-center">
                        <div className="font-semibold pl-[175px] md:pl-0">
                            <a href="home">Apoia</a>
                            <a href="home" className=" bg-gradient-to-r from-[#FD6529] to-[#FC8844] bg-clip-text text-transparent">.me</a>
                        </div>

                        <div className="h-full bg-[#292526] md:flex">
                            <div className="flex justify-end">
                                <button
                                    onClick={ () => openSideBAr()}
                                    className="md:invisible bg-gradient-to-r from-[#FD6529] to-[#FC8844] w-10 h-10 rounded-lg flex items-center mr-28 mt-[25.5px] md:mt-0"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-10 w-10 text-white">
                                        sidebarOpen(
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                        )
                                    </svg>
                                </button>
                            </div>

                            <div className="invisible md:visible pr-8 md:flex items-center md:gap-20 text-2xl/3">
                                <a href="home" className=" hover:no-underline hover:text-[#FD6529] hover:duration-300">Início</a>
                                <a href="about" className="hover:no-underline hover:text-[#FD6529] hover:duration-300">Sobre nós</a>
                                <a href="metas" className="hover:no-underline hover:text-[#FD6529] hover:duration-300">Metas</a>
                                <button className=" invisible md:visible bg-gradient-to-r from-[#FD6529] to-[#FC8844] w-44 h-12 rounded-lg hover:scale-110 transition duration-300 ease-in-out">
                                    <a href="register">Quero dar</a>
                                </button>
                            </div>
                        </div>

                    </div>
                </nav>
            </header>

                <nav className="invisible md:invisible font-montserrat bg-headerBack h-[30%] w-full fixed top-0 left-0 transform translate-x-0 transition duration-300 ease-in-out" style={{zIndex:999}}>
                    {/* ... conteúdo da sidebar ... */}
                    <ul className="flex flex-col justify-end items-center pt-32 text-xl font-bold px-4">
                        <li>
                            <a href="home" className="text-white hover:text-laranjaForte  mb-2">Item 1</a>
                        </li>
                        <li>
                            <a href="about" className="text-white hover:text-laranjaForte  mb-2">Item 2</a>
                        </li>
                        <li>
                            <a href="metas" className="text-white hover:text-laranjaForte  mb-2">Item 3</a>
                        </li>
                    </ul>
                </nav>

        </>
    );
}