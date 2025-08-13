import Header from "../components/Header";
import OurFamily from "../components/OurFamily";


export default function HomePage() {
  return (
    <>
      <div className="bg-img-layout-home xl:h-screen">
        <div className="bg-black/50 h-screen ">
          <Header />

          <div className="flex flex-col justify-center items-center h-screen pb-20 px-2">
            <h1 className="text-yellow-400 text-center text-4xl md:text-8xl font-bold uppercase border-b-4 pb-3">Se la mejor version de ti</h1>

            <button className=" mt-10 bg-yellow-400 w-50 rounded-lg text-2xl p-1 hover:font-semibold hover:text-black cursor-pointer hover:bg-yellow-500">Unete Hoy</button>
          </div>
        </div>
      </div>

      <OurFamily/>
    </>
  )
}
