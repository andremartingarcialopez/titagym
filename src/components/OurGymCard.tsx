
type OurGymCardProps = {
    title: string,
    items: { label: string, value: string }[]

}


export default function OurGymCard({ title, items }: OurGymCardProps) {



    return (
        <div className="text-white p-5 mx-2 my-5 rounded-lg border border-yellow-400 shadow shadow-yellow-400 bg-gray-900/20 md:h-140 lg:h-110">
            <h2 className="bg-yellow-400 text-2xl md:w-40 text-center text-black font-semibold uppercase rounded-lg mx-auto md:mx-0 container w-full">{title}</h2>
            <div className="mt-5">
                <ul className="md:list-disc md:list-inside space-y-2 ">
                    {items.map(function (item, index) {
                        return (
                            <li key={index} className="text-white text-center md:text-left">
                                <span className="font-bold text-yellow-400">{item.label}</span>{" "}
                                <span className="font-extralight block">{item.value}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>

        </div>
    )
}
