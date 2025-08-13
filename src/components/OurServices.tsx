import Reviews from "./Reviews"
import ServicesImages from "./ServicesImages"

export default function OurServices() {

  

  return (
    <>
      <div className="bg-black">

        <div className=" grid grid-cols-1 xl:h-screen justify-center items-center mx-auto container">
          <div className="my-10 mx-2 xl:my-0">
            <h2 className="text-yellow-400 text-5xl font-semibold text-center">Que Ofrecemos</h2>
            <p className="text-white my-5 text-center">Nos comprometemos a brindarte con la mejor experiencia de entrenamiento..</p>
          </div>

          <div className="flex flex-col xl:flex-row justify-center items-center xl:gap-5 group my-3">
            <ServicesImages title={"nuestro Gimnasio"} image={"/nuestro-gym.jpg"}/>
            <ServicesImages title={"Enytrenamientos Personalizados"} image={"/clases-grupos.jpg"}/>
            <ServicesImages title={"Clases en grupos"} image={"/entrenamientos-personalizados.jpg"}/>
          </div>

        </div>
      </div>

      <Reviews />
    </>

  )
}
