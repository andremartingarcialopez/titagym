import { useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom'

type HeroImageProps = {
    bgImage: string
    title: string
}

export default function HeroImage({bgImage, title} : HeroImageProps) {

    const location = useLocation();

    const isHome = useMemo(() => {
        return location.pathname == "/"
    }, [location.pathname])

    return (
        <div className={`${bgImage} xl:h-screen`}>
            <div className="bg-black/50 h-screen ">

                <div className="flex flex-col justify-center items-center h-screen pb-20 px-2">
                    <h1 className="text-yellow-400 text-center text-4xl md:text-8xl font-bold uppercase border-b-4 pb-3">{title}</h1>

                    <NavLink className={`mt-10 bg-yellow-400 uppercase w-50 rounded-lg text-center text-2xl p-1 hover:font-semibold hover:text-black cursor-pointer hover:bg-yellow-500 ${!isHome && "hidden"}`} to={"/joinUs"}>Unete Hoy</NavLink>
                </div>
            </div>
        </div>
    )
}
