import { NavLink } from "react-router-dom"

type ServicesImgesProps = {
    title:string,
    image: string
    link: string
}

export default function ServicesImages({title,image, link}: ServicesImgesProps) {
    return (
        
        <div className="relative group w-full ">
            <img className=" w-full xl:w-100" src={image} alt={title} />
            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300"></div>
            {/* Texto centrado */}
            <h2 className="absolute inset-0 flex items-center justify-center text-white text-2xl md:text-6xl xl:text-2xl font-bold uppercase text-center">
                {title}
            </h2>
            <NavLink to={link} className="absolute inset-0 flex justify-center items-center mt-30 md:mt-50 lg:mt-30 text-white">Mas Informacion</NavLink>
        </div>
    )
}
