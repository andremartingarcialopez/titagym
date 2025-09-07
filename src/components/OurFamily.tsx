import { NavLink } from "react-router-dom";
import OurServices from "./OurServices";

export default function OurFamily() {
  return (
    <>
      <div id="ourFamily" className="bg-black scroll-mt-30">
        <div className=" grid grid-cols-1 xl:h-screen md:grid-cols-2 justify-center items-center mx-auto container gap-15">
          <div className="m-5 xl:m-0">
            <h2 className="text-yellow-400 text-5xl font-semibold">Sobre nuestra <span className="block">Familia Deportiva</span></h2>
            <p className="text-white my-5">En nuestro gimnasio creemos que el éxito se construye en equipo. Por eso, nuestra familia deportiva está conformada por un grupo de entrenadores de alto nivel y médicos especializados que trabajan en conjunto para guiarte en cada etapa de tu camino hacia una vida más saludable. Desde la preparación física y el desarrollo de habilidades, hasta el cuidado médico y la prevención de lesiones, cada uno de nuestros profesionales aporta su experiencia y pasión para ayudarte a alcanzar tu máximo potencial.</p>

            
            <NavLink to={"/ourFamily"} className="text-white hover:underline cursor-pointer">Mas Informacion </NavLink>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center  ">
            <img className="lg:w-60 xl:w-85" src="https://img.freepik.com/foto-gratis/persona-haciendo-entrenamiento-crossfit_23-2149162330.jpg" alt="" />
            <img className=" w-full lg:w-60 xl:w-85 xl:h-120" src="https://img.freepik.com/foto-gratis/mujer-abdominales-visibles-haciendo-ejercicio_23-2150228898.jpg" alt="" />
          </div>
        </div>
      </div>

      <OurServices/>
    </>
  )
}
