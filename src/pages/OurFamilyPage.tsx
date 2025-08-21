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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 m-2">
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

          <div className=" grid grid-cols-1 justify-center items-center mx-auto container">
            <div className="mx-5 xl:m-0">
              <h2 className="text-yellow-400 text-5xl font-semibold text-center py-10 xl:my-0">Nuestros Medicos Deportivos</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-2 my-5">
            <OurFamilyCard
              image="https://img.freepik.com/foto-gratis/vista-delantera-enfermero-hospital_23-2150796810.jpg"
              name="Juan Carlos Ramírez"
              age="40"
              specialty="Médico deportivo"
              description="Doctor con más de 10 años de experiencia en medicina aplicada al deporte. Se especializa en la prevención y tratamiento de lesiones musculares y articulares, garantizando que los atletas puedan entrenar de forma segura y sostenida en el tiempo."
            />

            <OurFamilyCard
              image="https://img.freepik.com/foto-gratis/enfermera-tiro-medio-hospital_23-2150796754.jpg"
              name="Mariana Torres"
              age="30"
              specialty="Nutrióloga deportiva"
              description="Experta en planes alimenticios para deportistas y personas activas. Diseña programas de nutrición personalizados que maximizan energía, fuerza y recuperación, adaptados tanto a principiantes como a atletas de alto rendimiento."
            />

            <OurFamilyCard
              image="https://img.freepik.com/foto-gratis/vista-delantera-enfermero-hospital_23-2150796730.jpg"
              name="Alejandro Díaz"
              age="45"
              specialty="Fisioterapeuta deportivo."
              description="Especialista en rehabilitación y recuperación física. Ha trabajado con atletas profesionales en procesos de recuperación post-lesión y en programas de movilidad, fortalecimiento y prevención de recaídas."
            />

            <OurFamilyCard
              image="https://img.freepik.com/foto-gratis/enfermera-tiro-medio-hospital_23-2150796726.jpg"
              name="Laura Packers"
              age="41"
              specialty="Cardióloga deportiva"
              description="Doctora especializada en la salud cardiovascular de atletas y personas físicamente activas. Realiza evaluaciones médicas y pruebas de esfuerzo para optimizar el rendimiento, mejorar la resistencia y garantizar entrenamientos seguros."
            />
          </div>
        </div>



      </div>


    </>
  )
}
