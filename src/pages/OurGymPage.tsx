import HeroImage from "../components/HeroImage";
import OurGymCard from "../components/OurGymCard";

export default function OurGymPage() {
  
  const instalaciones = [
    { label: "Área de Pesas Libres", value: "Con barras olímpicas, mancuernas y discos de distintos pesos para entrenamientos de fuerza." },
    { label: "Zona de Máquinas de Musculación", value: "Equipos de última generación diseñados para trabajar cada grupo muscular de forma segura." },
    { label: "Área de Cardio", value: "Cintas de correr, bicicletas estáticas, elípticas y máquinas de remo con tecnología avanzada." },
    { label: "Salones para Clases Grupales", value: "Espacios amplios y climatizados para yoga, spinning, HIIT, baile fitness, pilates, etc." },
    { label: "Área de Artes Marciales y Boxeo:", value: "Ring, sacos de boxeo y tatamis para kickboxing, MMA o defensa personal." },
    { label: "Locker Rooms", value: "Vestidores cómodos con duchas, casilleros personales y áreas de descanso." },
  ]


  return (
    <>
      <HeroImage bgImage="bg-our-gym" title="Nuestro Gimnasio" />

      <div className="bg-black">

        <div className=" grid grid-cols-1 md:grid-cols-2 justify-center items-center mx-auto container">

          <OurGymCard title="Instalaciones" items={instalaciones} />



        </div>
      </div>
    </>

  )

}
