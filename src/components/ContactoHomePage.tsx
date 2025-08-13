import Footer from "./Footer";

export default function ContactoHomePage() {
    return (
        <>
            <div className="bg-img-layout-homePage-contacto">
                <div className="bg-black/50 ">


                    <div className="flex flex-col xl:flex-row xl:justify-around justify-center items-center h-screen px-3 gap-20 xl:gap-0">

                        <h1 className="text-yellow-400 text-4xl md:text-8xl font-bold uppercase border-b-4 pb-3 text-center xl:text-left">Ponte en <span className="xl:block">contacto</span></h1>

                        <form className="bg-white/90 rounded-xl p-5 w-full xl:w-100 flex flex-col justify-center items-stretch space-y-3">
                            <div>
                                <label className="text-gray-800 "
                                    htmlFor="name">Nombre</label>
                                <input className="w-full outline-amber-400 rounded-lg p-2 bg-gray-400/30 text-sm"
                                    type="text"
                                    placeholder="Ej. Andy" />
                            </div>

                            <div>
                                <label className="text-gray-800 "
                                    htmlFor="name">Edad</label>
                                <input className="w-full outline-amber-400 rounded-lg p-2 bg-gray-400/30 text-sm"
                                    type="number"
                                    placeholder="Ej. 27" />
                            </div>

                            <div>
                                <label className="text-gray-800 "
                                    htmlFor="name">Telefono</label>
                                <input className="w-full outline-amber-400 rounded-lg p-2 bg-gray-400/30 text-sm"
                                    type="tel"
                                    maxLength={10}
                                    placeholder="Ej. 3312839670" />
                            </div>

                            <div>
                                <label className="text-gray-800 "
                                    htmlFor="name">Email</label>
                                <input className="w-full outline-amber-400 rounded-lg p-2 bg-gray-400/30 text-sm"
                                    type="email"
                                    placeholder="Ej. user@correo.com" />
                            </div>

                            <input className="bg-yellow-400 p-2 rounded-lg uppercase hover:bg-yellow-500 cursor-pointer hover:font-semibold active:bg-yellow-400 mt-3 w-full lg:w-50" 
                            value={"Contactame"} 
                            type="submit" />
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
