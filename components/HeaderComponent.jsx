import React, { useState, useEffect, useRef } from "react";
export default function HeaderComponent() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setSidebarOpen(false);
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"></link>

            <header className="flex fixed w-screen bg-headerBack h-16 items-center md:justify-center font-montserrat">
                <nav className={`text-lg font-semibold text-white ${sidebarOpen ? 'hidden' : 'block'}`}>
                    <ul className=" space-x-10">

                        <a href="home" className="invisible md:visible text-3xl bg-gradient-to-r from-laranjaForte to-laranjaClaro bg-clip-text text-transparent"> .me</a>
                        <a href="home" className="invisible md:visible hover:no-underline hover:text-laranjaForte hover:duration-300"> Início</a>
                        <a href="about" className="invisible md:visible hover:no-underline hover:text-laranjaForte hover:duration-300"> Sobre nós</a>
                        <a href="metas" className="invisible md:visible hover:no-underline hover:text-laranjaForte hover:duration-300"> Metas</a>
                        <button className=" invisible md:visible bg-gradient-to-r from-laranjaForte to-laranjaClaro w-32 h-8 rounded-lg hover:scale-110 transition duration-300 ease-in-out">
                            <a href="register">Quero doar</a>
                        </button>
                    </ul>
                </nav>

                <div className=" visible md:invisible flex justify-center font-semibold">
                    <a href="home" className="text-3xl text-white">Apoia</a>
                    <a href="home" className="text-3xl bg-gradient-to-r from-laranjaForte to-laranjaClaro bg-clip-text text-transparent"> .me</a>
                </div>
                <button
                    onClick={toggleSidebar}
                    className="md:hidden bg-gradient-to-r from-laranjaForte to-laranjaClaro w-10 h-10 rounded-lg flex items-center justify-center mr-4"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-10 w-10 text-white">
                        {sidebarOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </header>

            {sidebarOpen && (

                <nav ref={sidebarRef} className=" bg-headerBack h-screen w-64 fixed top-0 left-0 transform translate-x-0 transition duration-300 ease-in-out z-999 ">
                    {/* ... conteúdo da sidebar ... */}
                    <ul className="pt-8 px-4">
                        <div className="px-[19%] flex flex-col  text-white text-2xl pt-5 w-full">
                            <li className="flex justify-center">
                                <a href="home" className="hover:no-underline hover:text-laranjaForte hover:duration-300"> Início</a>
                            </li>
                            <hr />
                            <li className="flex justify-center">
                                <a href="about" className="hover:no-underline hover:text-laranjaForte hover:duration-300"> Sobre nós</a>
                            </li>
                            <hr />
                            <li className="flex justify-center">
                                <a href="metas" className="hover:no-underline hover:text-laranjaForte hover:duration-300"> Metas</a>
                            </li>
                            <hr />
                            <li className="flex justify-center pt-[5.5px]">
                                <button className=" bg-gradient-to-r from-laranjaForte w-full to-laranjaClaro   h-8 rounded-lg hover:scale-110 transition duration-300 ease-in-out">
                                    <a href="register">Quero doar</a>
                                </button>
                            </li>

                        </div>
                    </ul>
                </nav>
            )}
        </>
    );
}