


type GroupClassCardProps = {
    title: string,
    img: string,
    idCard: string
}

export default function GroupClassCard({title, img,idCard} : GroupClassCardProps) {
    return (
        <>
            <div id={idCard} className="p-5 border border-yellow-400 rounded-lg bg-gray-900/10 shadow shadow-yellow-400 mx-4 md:mx-2 xl:mx-0 flex flex-col justify-center items-center mb-5">
                <h3 className="bg-yellow-400 text-center md:w-fit p-2 mb-5 rounded-lg font-bold xl:text-xl uppercase truncate md:text-xs lg:text-lg ">{title}</h3>
                <img className="w-full border border-yellow-400 rounded-lg shadow shadow-yellow-400" src={img} alt="" />

                <div className="w-full">
                    <button className="bg-yellow-300 hover:bg-yellow-400 text-center w-full mt-5 cursor-pointer hover:font-semibold rounded-lg p-2" type="button">Más informacion...</button>
                </div>
            </div>
        </>
    )
}
