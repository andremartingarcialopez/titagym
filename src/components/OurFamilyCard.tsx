
type OurFamilyCardProps = {
  name:string
  age:string
  specialty:string
  description:string
}

export default function OurFamilyCard({name,age,specialty,description} : OurFamilyCardProps) {


  return (
      <div className="lg:w-100 shadow">
        <img className=" rounded-t-lg shadow shadow-amber-400 p-5 bg-yellow-400 " src="https://img.freepik.com/foto-gratis/hombre-atletico-practicando-gimnasia-mantenerse-forma_23-2150989961.jpg" alt="Imagen de Felix" />
        <div className="bg-yellow-400 shadow shadow-amber-400 px-3 pb-4 rounded-b-2xl flex flex-col justify-center items-stretch space-y-1">
          <p className="font-semibold px-3">Nombre: <span className="font-light">{name}</span></p>
          <p className="font-semibold px-3">Edad: <span className="font-light">{age}</span></p>
          <p className="font-semibold px-3">Especialidad: <span className="font-light">{specialty}</span></p>
          <p className="font-semibold px-3">Descripcion: <span className="font-light">{description}</span></p>

        </div>
      </div>
    
  )
}
