export default function RegisterComponent() {

    return (
        <>

            <div className="h-screen flex justify-center pt-48 ">
                <div className=" w-1/3 h-4/6 font-montserrat imagem text-white rounded-xl bg-pretoDiferente  font-semibold">
                    <div className="flex justify-center text-4xl font-semibold pt-10">
                        <p className="bg-gradient-to-r from-laranjaForte to-laranjaClaro bg-clip-text text-transparent ">Registrar-se</p>
                    </div>
                    <div className="flex items-center p-4 flex-col ">
                        <div class="relative h-11 w-3/5 min-w-[200px] flex justify-center">
                            <input
                                class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-llaranjaForte-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" "
                            />
                            <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-orange-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-llaranjaForte-500 peer-focus:after:scale-x-100 peer-focus:after:border-llaranjaForte-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Nome
                            </label>
                        </div>
                        <br />
                        <div class="relative h-11 w-3/5 min-w-[200px] flex justify-center ">
                            <input
                                class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-llaranjaForte-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" "
                            />
                            <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-orange-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-llaranjaForte-500 peer-focus:after:scale-x-100 peer-focus:after:border-llaranjaForte-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Email
                            </label>
                        </div>
                        <br />
                        <div class="relative h-11 w-3/5 min-w-[200px] flex justify-center ">
                            <input
                                class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-llaranjaForte-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" "
                            />
                            <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-orange-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-llaranjaForte-500 peer-focus:after:scale-x-100 peer-focus:after:border-llaranjaForte-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Senha
                            </label>
                        </div>
                        <br />
                        <div class="relative h-11 w-3/5 min-w-[200px] flex justify-center ">
                            <input
                                class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-llaranjaForte-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" "
                            />
                            <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-orange-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-llaranjaForte-500 peer-focus:after:scale-x-100 peer-focus:after:border-llaranjaForte-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Confirmar senha
                            </label>
                        </div>
                        <br />
                        <div>
                            <p class="text-sm text-blue-gray-500 font-normal">
                                Já possui uma conta?{" "}
                                <a href="login" class="text-llaranjaForte-500 hover:hover:no-underline hover:text-laranjaForte hover:duration-300">
                                    Entrar
                                </a>
                            </p>
                        </div>
                        <div className="pt-10">
                            <button  class="transition duration-500 ease-in-out bg-white hover:bg-laranjaForte transform w-40 h-12 rounded-lg hr text-pretoDiferente">
                                <a href="login">Registrar</a>
                            </button>
                        </div>


                    </div>
                </div>
            </div>


        </>
    )
}