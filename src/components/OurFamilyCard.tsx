
type OurFamilyCardProps = {
  image: string
  name: string
  age: string
  specialty: string
  description: string
}

export default function OurFamilyCard({ image, name, age, specialty, description }: OurFamilyCardProps) {


  return (
    <div className=" flex flex-col md:flex-row bg-yellow-400 rounded-lg p-2 justify-center items-center">
      
      <div className="">
        <p className="text-center md:text-left font-semibold py-2 text-xl md:text-3xl">{name}</p>
        <img className=" rounded-lg bg-yellow-400 " src={image} alt="Imagen de Felix" />
      </div>

      <div className="py-2 md:text-xl">
        <p className="font-semibold px-3">Edad: <span className="font-light">{age}</span></p>
        <p className="font-semibold px-3">Especialidad: <span className="font-light">{specialty}</span></p>
        <p className="font-semibold px-3">Descripcion: <span className="font-light">{description}</span></p>
      </div>

    </div>


  )
}
