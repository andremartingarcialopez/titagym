import HeroImage from "../components/HeroImage";
import ModalGroupClasess from "../components/ModalGroupClasess";
import { useAppStore } from "../stores/useAppStore";

export type GroupClassCard = {
    title: string,
    img: string,
    details: string
}

export default function GroupClassPage() {

  const groupClasessCards : GroupClassCard[] = [
    {title: "Clases de Cardio en grupo", img: "https://img.freepik.com/foto-gratis/personas-que-hacen-ciclismo-interiores_23-2149270265.jpg", details: "Las sesiones de cardio en grupo son dinámicas y entretenidas, ideales para quemar calorías y mejorar la resistencia. Con ritmos motivadores y rutinas variadas como zumba, spinning o step, el ejercicio se convierte en una experiencia llena de energía." },
    {title: "Clases de Fuerza y Tonificación", img: "https://img.freepik.com/foto-gratis/mujeres-trabajando-entrenador_23-2148371748.jpg", details: "Estas clases se enfocan en fortalecer y definir el cuerpo mediante ejercicios guiados con pesas, bandas y rutinas funcionales. Son perfectas para quienes buscan mejorar su fuerza, resistencia y tonificación en un ambiente motivador." },
    {title: "Clases de Bienestar y Relajación", img: "https://img.freepik.com/foto-gratis/concepto-clase-yoga_53876-47114.jpg", details: "Aquí el objetivo es equilibrar cuerpo y mente a través de yoga, pilates y estiramientos guiados. Estas sesiones ayudan a mejorar la postura, la flexibilidad y reducen el estrés, brindando un espacio de calma y bienestar dentro del gimnasio." },
    {title: "Clases de Alta Intensidad", img: "https://img.freepik.com/foto-gratis/entrenamiento-mujeres-forma-interiores_23-2151717244.jpg", details: "Ideales para quienes buscan un reto, estas clases combinan fuerza, cardio y ejercicios explosivos en entrenamientos de alto rendimiento. Son perfectas para mejorar la condición física general y lograr resultados visibles en menos tiempo." },
    {title: "Clases Especializadas", img: "https://img.freepik.com/foto-gratis/grupo-adolescentes-jovenes-diversos-que-realizan-actividades-juntos-celebrar-dia-mundial-habilidades-juveniles_23-2151478338.jpg", details: "Pensadas para diferentes públicos, desde principiantes hasta adultos mayores o familias. Incluyen programas de baile fitness, sesiones de bajo impacto y entrenamientos temáticos que se adaptan a cada necesidad." },

  ]

    const {openModalGroupClass} = useAppStore()


  return (
    <div>
      <HeroImage bgImage="bg-group-class" title="Clases en grupos" />

      <div className="bg-black">

        <div className="mx-2">
          <h2 className="text-yellow-400 text-5xl font-semibold text-center pt-10 pb-5 xl:my-0">¿Por qué clases en grupos?</h2>

          <p className="text-white text-center pb-5 md:text-lg font-light">Las clases en grupo son una excelente manera de mantenerse motivado, constante y disfrutar del entrenamiento. A diferencia de ejercitarse solo, el ambiente colectivo genera energía positiva, fomenta la disciplina y convierte cada sesión en una experiencia divertida y social. Además, están guiadas por instructores especializados que adaptan los ejercicios a distintos niveles, lo que garantiza seguridad y resultados efectivos. Entrenar en grupo no solo mejora tu condición física, también fortalece el compromiso y crea un sentido de comunidad dentro del gimnasio.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 mx-auto container pb-5 ">

          {groupClasessCards.map(function (card, i) {
            return (
              <div key={i} className="p-5 border border-yellow-400 rounded-lg bg-gray-900/10 shadow shadow-yellow-400 mx-4 md:mx-2  flex flex-col justify-center items-center mb-5 last-of-type:mb-0 md:last-of-type:mb-5">
                <h3 className="bg-yellow-400 text-center md:w-fit p-2 mb-5 rounded-lg font-bold xl:text-xl uppercase truncate md:text-xs lg:text-lg ">{card.title}</h3>
                <img className="w-full border border-yellow-400 rounded-lg shadow shadow-yellow-400" src={card.img} alt="" />

                <div className="w-full">
                    <button onClick={() => openModalGroupClass(card)} 
                    className="bg-yellow-300 hover:bg-yellow-400 text-center w-full mt-5 cursor-pointer hover:font-semibold rounded-lg p-2" type="button">Más informacion...</button>
                </div>
            </div>
            )
          })}
        </div>
      </div>
      <ModalGroupClasess/>
    </div>
  )
}
