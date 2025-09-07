import Reviews from "./Reviews"
import ServicesImages from "./ServicesImages"

export default function OurServices() {

  

  return (
    <>
      <div id="ourServices" className="bg-black scroll-mt-30">

        <div className=" grid grid-cols-1 xl:h-screen  xl:pt-25 justify-center items-center mx-auto container">
          <div className="my-10 mx-2 xl:my-0">
            <h2 className="text-yellow-400 text-5xl font-semibold text-center">Que Ofrecemos</h2>
            <p className="text-white my-5 text-center">Nos comprometemos a brindarte con la mejor experiencia de entrenamiento..</p>
          </div>

          <div className="flex flex-col xl:flex-row justify-center items-center xl:gap-5 group my-3">
            <ServicesImages link="/our-gym" title={"nuestro Gimnasio"} image={"https://img.freepik.com/foto-gratis/concepto-levantamiento-pesas-mancuernas_23-2149267003.jpg"}/>
            <ServicesImages link="/personalized-training" title={"Entrenamientos Personalizados"} image={"https://img.freepik.com/foto-gratis/jovenes-que-entrenan-gimnasio-matutino_1157-28953.jpg"}/>
            <ServicesImages link="/group-class" title={"Clases en grupos"} image={"https://img.freepik.com/foto-gratis/gente-feliz-forma-gimnasio-tiro-completo_23-2149445955.jpg"}/>
          </div>

        </div>
      </div>

      <Reviews />
    </>

  )
}
