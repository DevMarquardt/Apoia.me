export default function HomeComponent() {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"></link>
            <div className="flex justify-center pt-48">
                <div className=" w-1/2 font-montserrat imagem text-white rounded-xl ">
                    <div className="flex justify-center text-5xl font-semibold ">
                        <p>Apoia</p>
                        <p className="bg-gradient-to-r from-laranjaForte to-laranjaClaro bg-clip-text text-transparent ">.me</p>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-3xl">“Conectando pessoas para apoiar o próximo”</p>
                    </div>
                </div>
            </div>

        </>
    )
}