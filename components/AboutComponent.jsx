export default function AboutComponent() {
    return (
        <>

            <main>
                <div className="flex justify-center bg-gradient-to-b  from-orange-500 to-pink-800 h-screen font-montserrat font-semibold">
                    <div className="w-1/2 font-montserrat text-white rounded-xl">
                        <div className="flex justify-center md:flex flex-col items-center pt-24">
                            <div className="w-full text-3xl">
                                <div className="flex flex-col items-center justify-center"  >
                                    <p className="pt-10">O que é a Apoia.me?</p>
                                    <p className="pt-10 text-base text-center">No Apoia.me, acreditamos no poder da comunidade para transformar ideias em realidade. Somos uma plataforma de vaquinhas online dedicada a unir pessoas com paixões e projetos a apoiadores generosos que desejam fazer a diferença. Desde causas sociais até empreendimentos criativos, fornecemos a plataforma onde sonhos ganham vida. Nossa missão é oferecer uma maneira simples para arrecadar fundos e conquistar apoio para o que realmente importa para você. </p>
                                </div>
                            </div>
                            <div className="mt-10 w-full h-[10rem] bg-black rounded-3xl flex justify-center items-center gap-[60px] text-xl">
                                <div className=" flex flex-col items-center">
                                    <p>2M+</p>
                                    <p>Vaquinhas</p>
                                </div>
                                <div className="w-[0.1px] h-[6rem] bg-white"></div>
                                <div className="flex flex-col items-center">
                                    <p>1M+</p>
                                    <p>Usuários</p>
                                </div>
                                <div className="w-[0.1px] h-[6rem] bg-white"></div>
                                <div className="flex flex-col items-center">
                                    <p>3M+</p>
                                    <p>Arrecadados</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" bg-black">
                    <div className="w-full font-montserrat text-white">
                        <div className="flex justify-center md:flex flex-col items-center ">
                            <div className="w-full text-3xl">
                                <div className="flex flex-col items-center justify-center"  >
                                    <p className="pt-10">Nosso time de desenvolvimento</p>
                                </div>
                                <div className="pt-10 flex justify-evenly ">
                                    <div className="flex flex-col items-center">
                                        <img src="" alt="" className=" rounded-full bg-white w-60 h-60" />
                                        <p className="text-sm pt-2">Gabriel Fellipe Marquardt</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <img src="" alt="" className=" rounded-full bg-white w-60 h-60" />
                                        <p className="text-sm pt-2">Guilherme Otávio Pereira</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <img src="" alt="" className=" rounded-full bg-white w-60 h-60" />
                                        <p className="text-sm pt-2">Iago Bogler</p>
                                    </div>
                                </div>
                                <div className="pt-10 pb-10 flex justify-evenly">
                                    <div className="flex flex-col items-center">
                                        <img src="" alt="" className=" rounded-full bg-white w-60 h-60" />
                                        <p className="text-sm pt-2">Júlia Paz e Silva</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <img src="" alt="" className=" rounded-full bg-white w-60 h-60" />
                                        <p className="text-sm pt-2">Lucas Müller Bortoloti</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}