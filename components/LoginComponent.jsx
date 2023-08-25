export default function LoginComponent() {
    return (
        <>

            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"></link>
            <div className="  flex justify-center pt-24 bg-cover h-screen bg-center bg-no-repeat" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://as1.ftcdn.net/v2/jpg/02/79/12/42/1000_F_279124266_QRp7wTZ8SOm3zwkWKXgle3XoXOKr2PGI.jpg")' }}>
            <div class="absolute inset-0 backdrop-blur-md"></div>
                <div className="w-[320px] xl:pb-10 xl:w-[30%] relative z-10">
                    <div className="font-montserrat text-white rounded-xl bg-pretoDiferente  font-semibold mt-[25%]">
                        <div className="flex justify-center text-4xl font-semibold pt-5 ">
                            <p className="bg-gradient-to-r from-laranjaForte to-laranjaClaro bg-clip-text text-transparent ">Entrar</p>
                        </div>
                        <div className="flex items-center p-4 flex-col  ">
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
                            <br />
                            <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                                <input
                                    class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                    type="checkbox"
                                    value=""
                                    id="checkboxDefault" />
                                <label
                                    class="inline-block pl-[0.15rem] hover:cursor-pointer"
                                    for="checkboxDefault">
                                    Deseja salvar o Login?
                                </label>
                            </div>
                            <br />
                            <br />
                            <div className="flex flex-col items-center">
                                <p class="text-sm text-blue-gray-500 font-normal">
                                    Ainda não possui uma conta?{" "}

                                </p>
                                <a href="register" class="text-llaranjaForte-500 underline hover:hover:no-underline hover:text-laranjaForte hover:duration-300">
                                        Registrar-se
                                    </a>
                            </div>
                            <br />

                            <button class="transition duration-500 ease-in-out bg-white hover:bg-laranjaForte transform w-40 h-12 rounded-lg hr text-pretoDiferente">
                                <a href="login">Entrar</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}