import HeroImage from "../components/HeroImage";
import OurGymCard from "../components/OurGymCard";

export default function OurGymPage() {

  const instalaciones = [
    { label: "Área de Pesas Libres:", value: "Con barras olímpicas, mancuernas y discos de distintos pesos para entrenamientos de fuerza:" },
    { label: "Zona de Máquinas de Musculación:", value: "Equipos de última generación diseñados para trabajar cada grupo muscular de forma segura." },
    { label: "Área de Cardio:", value: "Cintas de correr, bicicletas estáticas, elípticas y máquinas de remo con tecnología avanzada." },
    { label: "Salones para Clases Grupales:", value: "Espacios amplios y climatizados para yoga, spinning, HIIT, baile fitness, pilates, etc." },
    { label: "Área de Artes Marciales y Boxeo:", value: "Ring, sacos de boxeo y tatamis para kickboxing, MMA o defensa personal." },
    { label: "Locker Rooms:", value: "Vestidores cómodos con duchas, casilleros personales y áreas de descanso." },
  ]

  const equipamiento = [
    { label: "Máquinas de última tecnología:", value: "Life Fitness, Technogym o similares, con monitoreo digital y ajustes ergonómicos." },
    { label: "Pesas y accesorios:", value: "Mancuernas desde 1 kg hasta 50 kg, bandas de resistencia, balones medicinales, foam rollers." },
    { label: "Tecnología deportiva:", value: "Monitores de ritmo cardíaco, aplicaciones móviles integradas para seguimiento de entrenamientos y calorías." },
    { label: "Equipos especializados:", value: "Prensa de pierna, multipower, poleas ajustables, bancos ajustables, rack olímpico." },
    { label: "Accesorios de entrenamiento funcional:", value: "Cuerdas, escalera de agilidad, trineos de empuje y neumáticos de gran tamaño para entrenamientos explosivos." }
  ]


  return (
    <>
      <HeroImage bgImage="bg-our-gym" title="Nuestro Gimnasio" />

      <div className="bg-black">



        <div className=" grid grid-cols-1 md:grid-cols-2 justify-center items-center mx-auto container">
          <OurGymCard title="Instalaciones" items={instalaciones} />
          <OurGymCard title="Equipamiento" items={equipamiento} />
        </div>

        <h2 className="text-yellow-400 text-5xl font-semibold text-center mb-5">Nuestras Instalaciones</h2>
        <div className="md:grid grid-cols-2">

          <img className="w-full" src="https://img.freepik.com/foto-gratis/gimnasio-equipo-ciclismo-interiores_23-2149270210.jpg" alt="" />
          <img className="w-full" src="https://img.freepik.com/foto-gratis/interior-equipamiento-gimnasio-moderno-vista-primer-plano-correas-suspension-deporte-fitness-salud_613910-20264.jpg" alt="" />
          <img className="w-full" src="https://img.freepik.com/foto-gratis/equipos-gimnasio_93675-129485.jpg" alt="" />
          <img className="w-full" src="https://img.freepik.com/foto-gratis/sacos-arena-cuerda-gimnasio_107420-65064.jpg" alt="" />

        </div>
      </div>
    </>

  )

}
