import HeroImage from "../components/HeroImage";
import OurFamilyCard from "../components/OurFamilyCard";

export default function OurFamilyPage() {
  return (
    <>
      <HeroImage bgImage="bg-ourFamily" title="Nuestra Familia" />

      <div className="bg-black">

        <div className=" grid grid-cols-1 justify-center items-center mx-auto container">
          <div className="mx-5 xl:m-0">
            <h2 className="text-yellow-400 text-5xl font-semibold text-center py-10 xl:my-0">Nuestros Entrenadores</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5 mx-2">
            <OurFamilyCard
              image="https://img.freepik.com/foto-gratis/hombre-atletico-practicando-gimnasia-mantenerse-forma_23-2150989961.jpg"
              name="Felix Pakers"
              age="35"
              specialty="Halterofilia y powerlifting"
              description="Campeón mundial en levantamiento de pesas estilo libre, con más de 12 años de experiencia entrenando atletas de alto rendimiento. Su enfoque está en la fuerza, la técnica y la disciplina."
            />

            <OurFamilyCard
              image="https://img.freepik.com/foto-gratis/mujer-atletica-haciendo-ejercicio-gimnasio-mantenerse-forma_23-2150989815.jpg"
              name="Jasmin Lopez"
              age="29"
              specialty="Programas de alta intensidad (HIIT) y resistencia."
              description="Certificada en CrossFit Level 2, ha participado en competencias nacionales de fitness funcional. Su método busca mejorar agilidad, coordinación y resistencia cardiovascular."
            />

            <OurFamilyCard
              image="https://img.freepik.com/foto-gratis/hombre-atletico-practicando-gimnasia-mantenerse-forma_23-2150989957.jpg"
              name="Alexander Ruiz"
              age="30"
              specialty="Yoga integral, respiración y movilidad"
              description="Instructor internacional de yoga con certificación RYT-500, experto en meditación guiada y control de estrés. Ayuda a sus alumnos a alcanzar un equilibrio físico y mental."
            />

            <OurFamilyCard
              image="https://img.freepik.com/foto-gratis/mujer-atletica-haciendo-ejercicio-gimnasio-mantenerse-forma_23-2150989969.jpg"
              name="Sofia Martinez"
              age="31"
              specialty="Boxeo, kickboxing y defensa personal."
              description="Excompetidora de artes marciales mixtas con trayectoria en torneos internacionales. Su entrenamiento combina fuerza explosiva, velocidad y confianza personal."
            />
          </div>
        </div>
      </div>
    </>
  )
}
