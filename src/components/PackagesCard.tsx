import { CheckCircleIcon, XCircleIcon } from "lucide-react";
import ModalJoinUs from "./ModalJoinUs";



type Benefit = {
    text: string,
    included: boolean
}

type PackesCardProps = {
    pack: string,
    subtitle: string,
    totalPrice: string
    duration: string
    benefits: Benefit[];


}


export default function PackagesCard({ pack, subtitle, totalPrice, duration, benefits }: PackesCardProps) {
    return (
        <>
            <div className="text-white p-5 rounded-lg border border-yellow-400 shadow shadow-yellow-400 bg-gray-900/20">
                <h2 className="bg-yellow-400 text-2xl w-40 text-center text-black font-semibold uppercase rounded-lg">{pack}</h2>
                <div className="flex flex-col justify-center items-stretch gap-8">
                    <div>
                        <p className="mt-5 font-light">{subtitle}</p>
                    </div>
                    <div>
                        <p className="font-light" >Desde <span className="block text-4xl font-bold">$50.00* <span className="block text-base font-semibold">en el primer mes, <span className="font-light">despues {totalPrice} /mes</span></span></span></p>
                        <p className="font-light mt-3">{duration}</p>
                    </div>
                    <div>
                        <h3 className="text-yellow-400 text-2xl font-semibold mb-3">Beneficios</h3>
                        <ul className="font-light flex flex-col justify-center items-stretch space-y-2">
                            {benefits.map((benefit, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    {benefit.included ? (
                                        <CheckCircleIcon className="w-5 h-5 text-green-500" />
                                    ) : (
                                        <XCircleIcon className="w-5 h-5 text-red-500" />
                                    )}
                                    <span
                                        className={
                                            benefit.included ? "text-white" : "text-gray-400 line-through"
                                        }
                                    >
                                        {benefit.text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <button className="bg-yellow-400 w-full mt-5 p-2 rounded-lg uppercase text-black hover:font-semibold cursor-pointer hover:bg-yellow-500 active:bg-yellow-400">¡Inscribite ya!</button>

            </div>

            <ModalJoinUs/>
        </>
    )
}
