import FooterDetails from "./FooterDetails";

export default function Footer() {
  return (
    <div className='bg-yellow-400  w-full p-5'>

      <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center text-center gap-5">

        <FooterDetails label="Direccion" value="Calle Vallarta, 25, Lazaro Cardenas, CP 448080"/>
        <FooterDetails label="Correo" value="titangym@hotmail.com"/>
        <FooterDetails label="Telefono" value="3312404590"/>
      </div>
    </div>
  )
}
