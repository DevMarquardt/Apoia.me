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

            <header className="md:flex fixed w-screen bg-headerBack h-16 items-center justify-center font-montserrat">
                <nav className={`text-lg font-semibold text-white ${sidebarOpen ? 'hidden' : 'block'}`}>
                    <ul className="space-x-10">
                        <a href="home" className="text-3xl bg-gradient-to-r from-laranjaForte to-laranjaClaro bg-clip-text text-transparent"> .me</a>
                        <a href="home" className="hover:no-underline hover:text-laranjaForte hover:duration-300"> Início</a>
                        <a href="about" className="hover:no-underline hover:text-laranjaForte hover:duration-300"> Sobre nós</a>
                        <a href="metas" className="hover:no-underline hover:text-laranjaForte hover:duration-300"> Metas</a>
                        <button className="bg-gradient-to-r from-laranjaForte to-laranjaClaro w-32 h-8 rounded-lg hover:scale-110 transition duration-300 ease-in-out">
                            <a href="register">Quero doar</a>
                        </button>
                    </ul>
                </nav>
                <button
                    onClick={toggleSidebar}
                    className="md:hidden bg-gradient-to-r from-laranjaForte to-laranjaClaro w-10 h-10 rounded-lg flex items-center justify-center mr-4"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-white">
                        {sidebarOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </header>
            
            {sidebarOpen && (
                <nav ref={sidebarRef} className="md:hidden bg-headerBack h-screen w-64 absolute top-0 left-0 transform translate-x-0 transition duration-300 ease-in-out">
                    <ul className="pt-8 px-4">
                        <li>
                            <a href="home" className="text-white hover:text-laranjaForte">Item 1</a>
                        </li>
                        <li>
                            <a href="about" className="text-white hover:text-laranjaForte">Item 2</a>
                        </li>
                        <li>
                            <a href="metas" className="text-white hover:text-laranjaForte">Item 3</a>
                        </li>
                    </ul>
                </nav>
            )}
        </>
    );
}
