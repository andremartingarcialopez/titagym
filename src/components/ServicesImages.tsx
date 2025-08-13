
type ServicesImgesProps = {
    title:string,
    image: string
}

export default function ServicesImages({title,image}: ServicesImgesProps) {
    return (
        <a href="#" className="relative group">
            <img className=" xl:w-100" src={image} alt={title} />
            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300"></div>
            {/* Texto centrado */}
            <h2 className="absolute inset-0 flex items-center justify-center text-white text-2xl md:text-6xl xl:text-2xl font-bold uppercase hover:underline">
                {title}
            </h2>
        </a>
    )
}
