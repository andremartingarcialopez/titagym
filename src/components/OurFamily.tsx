import OurServices from "./OurServices";

export default function OurFamily() {
  return (
    <>
      <div className="bg-black">
        <div className=" grid grid-cols-1 xl:h-screen md:grid-cols-2 justify-center items-center mx-auto container gap-15">
          <div className="m-5 xl:m-0">
            <h2 className="text-yellow-400 text-5xl font-semibold">Sobre nuestra <span className="block">Familia Deportiva</span></h2>
            <p className="text-white my-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo vel magni vero aperiam veritatis sit quas soluta praesentium velit architecto. Rem nihil dolor, fugit distinctio nesciunt in repudiandae obcaecati aliquam! Eligendi expedita repudiandae ullam possimus aliquam tenetur ut, praesentium vero.</p>

            <p className="text-white hover:underline cursor-pointer">Mas Informacion</p>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center  ">
            <img className="lg:w-60 xl:w-85" src="/public/vertical1.jpg" alt="" />
            <img className="lg:w-60 xl:w-85" src="/public/vertical2.jpg" alt="" />
          </div>
        </div>
      </div>

      <OurServices/>
    </>
  )
}
