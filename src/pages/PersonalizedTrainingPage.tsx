import HeroImage from "../components/HeroImage";
import PersonalizedTrainingCard from "../components/PersonalizedTrainingCard";

export default function PersonalizedTrainingPage() {

  const personalizedTrainingDetailsStrength = [
    { name: "Rutinas con pesas libres (mancuernas, barras)" },
    { name: "Ejercicios con peso corporal (push-ups, dominadas, sentadillas)" },
    { name: "Enfoque en hipertrofia y aumento de masa muscular" },
    { name: "Entrenamientos de resistencia muscular progresivos" },
    { name: "Técnicas de levantamiento seguro para evitar lesiones" },
    { name: "Adaptación para principiantes, intermedios y avanzados" },
  ]

  const personalizedTrainingDetailsFunctional = [
    { name: "Ejercicios con kettlebells, balones medicinales y cuerdas" },
    { name: "Trabajo de core para mejorar estabilidad" },
    { name: "Ejercicios multiarticulares que simulan movimientos diarios" },
    { name: "Rutinas de coordinación y equilibrio" },
    { name: "Entrenamientos dinámicos con intervalos" },
    { name: "Trabajo con TRX o ligas de resistencia" },
    { name: "Sesiones diseñadas para mejorar movilidad articular" },
    { name: "Planes enfocados en rendimiento y funcionalidad" },
  ]

  const personalizedTrainingDetailsCardio = [
    { name: "Rutinas de quema de grasa de baja y alta intensidad" },
    { name: "Entrenamiento HIIT (intervalos de alta intensidad)" },
    { name: "Sesiones de resistencia prolongada (caminadora, bicicleta, remo)" },
    { name: "Cardio con movimientos funcionales y dinámicos" },
    { name: "Entrenamientos cardiovasculares adaptados a cada nivel" },
    { name: "Uso de tecnología para medir frecuencia cardiaca y progreso" },
    { name: "Clases de cardio grupales personalizadas (zumba, step, etc.)" },
    { name: "Seguimiento para mejorar capacidad pulmonar y resistencia" },
  ]

  const personalizedTrainingDetailsSpecificGoals = [
    { name: "Programas de pérdida de peso saludable" },
    { name: "Planes de definición muscular (tonificación)" },
    { name: "Rutinas para ganar masa muscular (bulking)" },
    { name: "Preparación física para competencias deportivas" },
    { name: "Entrenamiento para mejorar velocidad y agilidad" },
    { name: "Rutinas específicas para rehabilitación y recuperación" },
    { name: "Planes de acondicionamiento para adultos mayores" },
    { name: "Entrenamiento especializado en deportes (fútbol, crossfit, running)" },
  ]

  const personalizedTrainingDetailsBox = [
    { name: "Técnicas básicas de golpeo: jab, cross, uppercut y ganchos" },
    { name: "Defensa y desplazamientos en el ring" },
    { name: "Trabajo con costal pesado para potencia y resistencia)" },
    { name: "Entrenamiento con manoplas para mejorar precisión y reflejos" },
    { name: "Rutinas de cardio con cuerda y circuitos de agilidad" },
    { name: "Ejercicios de coordinación mano-ojo y pies-manos" },
    { name: "Sesiones de sparring controlado para niveles avanzados" },
    { name: "Enfoque en disciplina, concentración y confianza" },
  ]

  return (
    <div>
      <HeroImage bgImage="bg-personalized-class" title="Clases Personalizadas" />

      <div className="bg-black">


        <div className="grid grid-cols-1">

          <PersonalizedTrainingCard title="Entrenamiento de Fuerza"
            img="https://img.freepik.com/foto-gratis/pareja-forma-levantando-barras-gimnasio_329181-19979.jpg"
            details={personalizedTrainingDetailsStrength} />

          <PersonalizedTrainingCard title="Entrenamiento Funcional"
            img="https://img.freepik.com/foto-gratis/personas-que-trabajan-interior-junto-pesas_23-2149175410.jpg"
            details={personalizedTrainingDetailsFunctional} />

          <PersonalizedTrainingCard title="Cardio Personalizado"
            img="https://img.freepik.com/foto-gratis/equipo-joven-aptitud-que-espin_1139-688.jpg"
            details={personalizedTrainingDetailsCardio} />

          <PersonalizedTrainingCard title="Entrenamiento para Objetivos Específicos"
            img="https://img.freepik.com/foto-gratis/primer-plano-mujer-haciendo-ejercicios-crossfit_23-2149080423.jpg"
            details={personalizedTrainingDetailsSpecificGoals} />

          <PersonalizedTrainingCard title="Entrenamiento de Box"
            img="https://img.freepik.com/foto-gratis/vista-lateral-entrenamiento-boxeador-masculino-camisa_23-2148615065.jpg"
            details={personalizedTrainingDetailsBox} />



        </div>
      </div>
    </div>
  )
}
