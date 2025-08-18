import HeroImage from "../components/HeroImage";
import OurFamilyCard from "../components/OurFamilyCard";

export default function OurFamilyPage() {
  return (
    <>
      <HeroImage bgImage="bg-ourFamily" title="Nuestra Familia" />

      <div className="bg-black" id="users">

        <div className=" grid grid-cols-1  justify-center items-center mx-auto container">
          <div className="mx-5 xl:m-0">
            <h2 className="text-yellow-400 text-5xl font-semibold text-center py-10 xl:my-0">Nutros Entrenadores</h2>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-10 xl:gap-5 m-3">
            <OurFamilyCard name="Felix Pakers" age="35" specialty="Halterofilia y powerlifting" description="Campeón mundial en levantamiento de pesas estilo libre, con más de 12 años de experiencia entrenando atletas de alto rendimiento. Su enfoque está en la fuerza, la técnica y la disciplina"  />
          </div>
        </div>
      </div>
    </>
  )
}
