import PackagesCard from "../components/PackagesCard";

export default function JoinUsPage() {
  return (
    <>
      <div className="bg-img-join-us  xl:h-screen">
        <div className="bg-black/50 h-screen ">

          <div className="flex flex-col justify-center items-center h-screen pb-20 px-2">
            <h1 className="text-yellow-400 text-center text-4xl md:text-8xl font-bold uppercase border-b-4 pb-3">Llego la hora de cambiar tu vida</h1>
          </div>
        </div>
      </div>

      <div className="bg-black p-2 scroll-mt-30 ">
        <div className="mx-auto container">
          <h2 className="text-yellow-400 text-5xl font-semibold py-10">Nuestros Paquetes</h2>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
            <PackagesCard
              pack="Titan"
              subtitle="Plan completo para entrenar sin límites"
              totalPrice="$599.00"
              duration="12 meses"
              benefits={[
                { text: "Acceso ilimitado a + 1.700 gimnasios de la red", included: true },
                { text: "Entrena hasta con 5 amigos al mes", included: true },
                { text: "Sillones de masaje", included: true },
                { text: "Smart Fit App - Tu plan de entrenamiento personalizado", included: true },
                { text: "Clases grupales con profesores*", included: true },
                { text: "Smart Fit GO (entrenamientos en línea)", included: true },
                { text: "Acceso a todas las áreas de peso libre e integrado", included: true },
              ]}
            />

            <PackagesCard
              pack="Guerrero"
              subtitle="Plan completo para entrenar sin límites"
              totalPrice="$399.00"
              duration="12 meses de fidelidad"
              benefits={[
                { text: "Acceso ilimitado a + 1.700 gimnasios de la red", included: false },
                { text: "Entrena hasta con 5 amigos al mes", included: false },
                { text: "Sillones de masaje", included: false },
                { text: "Smart Fit App - Tu plan de entrenamiento personalizado", included: true },
                { text: "Clases grupales con profesores*", included: true },
                { text: "Smart Fit GO (entrenamientos en línea)", included: true },
                { text: "Acceso a todas las áreas de peso libre e integrado", included: true },
              ]}
            />

            <PackagesCard
              pack="Aldeano"
              subtitle="Entrena cuando quieras en tu gimnasio de elección"
              totalPrice="$399.00"
              duration="Sin fidelidad"
              benefits={[
                { text: "Acceso ilimitado a + 1.700 gimnasios de la red", included: false },
                { text: "Entrena hasta con 5 amigos al mes", included: false },
                { text: "Sillones de masaje", included: false },
                { text: "Smart Fit App - Tu plan de entrenamiento personalizado", included: true },
                { text: "Clases grupales con profesores*", included: true },
                { text: "Smart Fit GO (entrenamientos en línea)", included: true },
                { text: "Acceso a todas las áreas de peso libre e integrado", included: false },
              ]}
            />



          </div>

        </div>

      </div>



    </>

  )
}
