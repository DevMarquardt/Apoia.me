export default function HomeComponent() {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"></link>
            <div className="bg-cover bg-center bg-no-repeat pt-96 pb-64 flex justify-center" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://as1.ftcdn.net/v2/jpg/02/79/12/42/1000_F_279124266_QRp7wTZ8SOm3zwkWKXgle3XoXOKr2PGI.jpg")' }}>
                <div className="w-1/2 font-montserrat imagem text-white rounded-xl">
                    <div className="flex justify-center text-5xl font-semibold ">
                        <p>Apoia</p>
                        <p className="bg-gradient-to-r from-laranjaForte to-laranjaClaro bg-clip-text text-transparent ">.me</p>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-3xl">“Conectando pessoas para apoiar o próximo”</p>
                    </div>
                </div>
            </div>

            <main >
                <div className="flex justify-center h-60 bg-black items-center">
                    <div className="w-1/2 font-montserrat text-white rounded-xl ">
                        <div className="flex justify-center text-2xl font-semibold ">
                            <p>Conte com o apoio das</p>
                            <p className="bg-gradient-to-r from-laranjaForte to-laranjaClaro bg-clip-text text-transparent pl-2">maiores empresas do país</p>
                        </div>
                        <div className="flex justify-center content-evenly items-center">
                            <img src="/itaupng.png" className=" w-40"/>
                            <div className="h-28 w-0.5 bg-laranjaForte"></div>
                            <img src="/ifoodpng.png" className=" w-40 px-3"/>
                            <div className="h-28 w-0.5 bg-laranjaForte"></div>
                            <img src="/xpinvest.png" className=" w-40 px-8"/>
                        </div>
                    </div>
                </div>

                <div className="bg-white">
                </div>
            </main>
        </>
    )
}
