import Formulary from "./Formulary";

export default function ContactoHomePage() {

    return (
        <>
            <div id="contact" className="bg-img-layout-homePage-contacto scroll-mt-30">
                <div className="bg-black/50 ">


                    <div className="flex flex-col xl:flex-row xl:justify-around justify-center items-center h-screen px-3 gap-20 xl:gap-0">

                        <h1 className="text-yellow-400 text-4xl md:text-8xl font-bold uppercase border-b-4 pb-3 text-center xl:text-left">Ponte en <span className="xl:block">contacto</span></h1>

                        <Formulary/>
                    </div>
                </div>
            </div>
        </>
    )
}
