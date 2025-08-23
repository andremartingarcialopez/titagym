
type Details = {
    name:string
}

type PersonalizedTrainingCardProps = {
    title: string,
    img: string,
    details: Details[]
}

export default function PersonalizedTrainingCard({title, img, details} : PersonalizedTrainingCardProps) {



    return (
        <div className="md:border  border-b-yellow-400 md:py-5 mx-auto container md:flex md:gap-2 ">
            <div className="md:w-1/2">
                <h2 className="bg-yellow-400 my-5 mx-2 block md:hidden text-2xl text-center text-black font-semibold uppercase rounded-lg">{title}</h2>
                <img className="w-full xl:h-100" src={img} alt="" />
            </div>


            <div className="p-5 md:w-1/2 border-b h-fit border-yellow-400 mb-5  text-white px-2 bg-gray-900/20">
                <h2 className="bg-yellow-400 my-5 mx-2 hidden md:block text-2xl text-center text-black font-semibold uppercase rounded-lg">{title}</h2>
                <ul className="font-light  flex mx-2 flex-col justify-center items-stretch space-y-2">
                    
                    {details.map(function (detail, index) {
                        return (
                            <li key={index} className="flex items-center gap-2">{detail.name}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
