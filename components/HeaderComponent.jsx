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
            <header className="w-full h-[6rem] bg-[#292526] font-montserrat fixed" id="header">

                <nav className="h-full bg-[#292526]">
                    <div className="pl-8 text-3xl h-full text-white flex  items-center w-full justify-center">
                        <div className="font-semibold">
                            <a href="home">Apoia</a>
                            <a href="home" className=" bg-gradient-to-r from-[#FD6529] to-[#FC8844] bg-clip-text text-transparent">.me</a>
                        </div>

                        <div className="h-full bg-[#292526] md:flex">
                            <div className="flex justify-end">
                                <button
                                    onClick={toggleSidebar}
                                    className="visible md:invisible bg-gradient-to-r from-[#FD6529] to-[#FC8844] w-10 h-10 rounded-lg flex items-center mr-4 mt-[25.5px] md:mt-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-10 w-10 text-white">
                                        {sidebarOpen ? (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        ) : (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                        )}
                                    </svg>
                                </button>
                            </div>

                            <div className="invisible md:visible pr-8 md:flex items-center md:gap-20 text-2xl/3">
                                <a href="home" className=" hover:no-underline hover:text-[#FD6529] hover:duration-300">Início</a>
                                <a href="about" className="hover:no-underline hover:text-[#FD6529] hover:duration-300">Sobre nós</a>
                                <a href="metas" className="hover:no-underline hover:text-[#FD6529] hover:duration-300">Metas</a>
                                <button className=" invisible md:visible bg-gradient-to-r from-[#FD6529] to-[#FC8844] w-44 h-12 rounded-lg hover:scale-110 transition duration-300 ease-in-out">
                            <a href="register">Quero doar</a>
                        </button>
                            </div>
                        </div>

                    </div>
                </nav>
            </header>
        </>
    );
}