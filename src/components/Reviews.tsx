import ContactoHomePage from "./ContactoHomePage";
import UserCard from "./UserCard";

export default function Reviews() {
    return (
        <>
            <div className="bg-black" id="users">

                <div className=" grid grid-cols-1 xl:h-screen justify-center items-center mx-auto container">
                    <div className="mx-5 xl:m-0">
                        <h2 className="text-yellow-400 text-5xl font-semibold text-center my-10 xl:my-0">Comentarios de nuestro usuarios</h2>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-center items-center gap-5 md:gap-10 xl:gap-5 mx-3 my-5">
                        <UserCard image={"/atleta2.webp"} name={"Priya Packers"} age={"27"} comment={"Excelente ambiente y entrenadores muy atentos. He visto resultados en pocas semanas."} />
                        <UserCard image={"/atleta1.webp"} name={"Chuy Garcia"} age={"33"} comment={"Instalaciones modernas y limpias. Me encanta la variedad de clases que ofrecen."} />
                        <UserCard image={"/atleta3.webp"} name={"Maria Cena"} age={"31"} comment={"El personal es súper motivador y siempre dispuesto a ayudar. ¡Recomendado al 100%!"} />
                    </div>

                </div>
            </div>
            <ContactoHomePage />
        </>
    )
}
