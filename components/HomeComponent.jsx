export default function HomeComponent() {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"></link>
            <div className=" bg-cover h-screen bg-center bg-no-repeat pt-[120px] flex justify-center" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://as1.ftcdn.net/v2/jpg/02/79/12/42/1000_F_279124266_QRp7wTZ8SOm3zwkWKXgle3XoXOKr2PGI.jpg")' }}>
                    <div className="w-1/2 font-montserrat text-white rounded-xl">
                        <div className="flex justify-center md:flex flex-col items-center pt-24">
                            <div className="w-[300px] flex flex-col items-center md:w-full text-3xl pb-4 md:flex-row gap-3 justify-center">
                                <p>Se junte a nós</p> <p>e</p> <p>ajude o próximo!</p>

                            </div>
                            <button className="bg-gradient-to-r from-laranjaForte to-laranjaClaro w-40 h-12 md:text-4xl md:w-[400px] md:h-[100px] rounded-lg hover:scale-110 transition duration-300 ease-in-out">
                                <a href="metas">Começar a ajudar</a>
                            </button>
                        </div>
                    </div>

                </div>
                <div>
                    <div className="h-[90%] mb:h-[100vh] bg-black pb-4 font-montserrat">
                        <p className="text-3xl md:text-5xl text-white flex justify-center pt-10">Principais vaquinhas</p>
                        <div className="h-full lg:flex justify-evenly pt-10 px-20 ">
                            <div className="pb-4 flex flex-col items-center w-full mb-4 pt-4 bg-trasparent lg:w-[360px] lg:h-[590px] rounded-xl border-2 border-laranjaForte">
                                <div className=" w-4/5 h-40 mb-4 bg-brancoDiferente lg:w-[80%] lg:h-[45%] rounded-lg">

                                </div>
                                <button class="mt-[100px] transition duration-500 ease-in-out bg-white hover:bg-laranjaForte transform w-40 h-12 rounded-lg hr text-pretoDiferente ">
                                            <a href="login" className="font-semibold ">Saiba mais</a>
                                        </button>
                            </div>
                            <div className="pb-4 flex flex-col items-center w-full mb-4 pt-4 bg-trasparent lg:w-[360px] lg:h-[590px] rounded-xl border-2 border-laranjaForte ">
                                <div className=" w-4/5 h-40 mb-4 bg-brancoDiferente lg:w-[80%] lg:h-[45%] rounded-lg">

                                </div>
                                <button class="mt-[100px] transition duration-500 ease-in-out bg-white hover:bg-laranjaForte transform w-40 h-12 rounded-lg hr text-pretoDiferente">
                                            <a href="login" className="font-semibold ">Saiba mais</a>
                                        </button>
                            </div>
                            <div className="pb-4 flex flex-col items-center w-full  pt-4 bg-trasparent lg:w-[360px] lg:h-[590px] rounded-xl border-2 border-laranjaForte ">
                                <div className=" w-4/5 h-40 mb-4 bg-brancoDiferente lg:w-[80%] lg:h-[45%] rounded-lg">

                                </div>
                                <button class="mt-[100px] transition duration-500 ease-in-out bg-white hover:bg-laranjaForte transform w-40 h-12 rounded-lg hr text-pretoDiferente">
                                            <a href="login" className="font-semibold ">Saiba mais</a>
                                        </button>
                            </div>
                        </div>
                    </div>
                
            </div>
        </>
    )
}