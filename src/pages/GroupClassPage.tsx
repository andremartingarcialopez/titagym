import { v4 } from "uuid";
import GroupClassCard from "../components/GroupClassCard";
import HeroImage from "../components/HeroImage";

export default function GroupClassPage() {
  return (
    <div>
      <HeroImage bgImage="bg-group-class" title="Clases en grupos" />

      <div className="bg-black">

        <div className="mx-2">
          <h2 className="text-yellow-400 text-5xl font-semibold text-center pt-10 pb-5 xl:my-0">¿Por qué clases en grupos?</h2>

          <p className="text-white text-center pb-5 md:text-lg font-light">Las clases en grupo son una excelente manera de mantenerse motivado, constante y disfrutar del entrenamiento. A diferencia de ejercitarse solo, el ambiente colectivo genera energía positiva, fomenta la disciplina y convierte cada sesión en una experiencia divertida y social. Además, están guiadas por instructores especializados que adaptan los ejercicios a distintos niveles, lo que garantiza seguridad y resultados efectivos. Entrenar en grupo no solo mejora tu condición física, también fortalece el compromiso y crea un sentido de comunidad dentro del gimnasio.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 mx-auto container pb-5 ">

          <GroupClassCard idCard={v4()} title="Clases de Cardio en grupo" img="https://img.freepik.com/foto-gratis/personas-que-hacen-ciclismo-interiores_23-2149270265.jpg"/>
          <GroupClassCard idCard={v4()} title="Clases de Fuerza y Tonificación" img="https://img.freepik.com/foto-gratis/mujeres-trabajando-entrenador_23-2148371748.jpg"/>
          <GroupClassCard idCard={v4()} title="Clases de Bienestar y Relajación" img="https://img.freepik.com/foto-gratis/concepto-clase-yoga_53876-47114.jpg"/>
          <GroupClassCard idCard={v4()} title="Clases de Alta Intensidad" img="https://img.freepik.com/foto-gratis/hombres-mujeres-gimnasio-montando-bicicleta-juntos-generados-felizmente-ia_188544-10868.jpg"/>
          <GroupClassCard idCard={v4()} title="Clases Especializadas" img="https://img.freepik.com/foto-gratis/entrenamiento-adultos-pesas_23-2151717275.jpg"/>

        </div>
      </div>
    </div>
  )
}
