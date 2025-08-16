import { Bars4Icon } from "@heroicons/react/16/solid";
import { XCircle } from "lucide-react";
import { useState } from "react"

export default function Menu() {

    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

  return (
    <div className="relative">
      <Bars4Icon onClick={() => toggleMenu()} className={`w-10 h-10 hover:cursor-pointer text-white ${isOpen && "hidden"}`}/>

      <div className={`fixed top-0 right-0 w-50 h-auto rounded-lg  bg-black/70 shadow-lg transform ${isOpen? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-50`}>

      <div className="flex justify-end p-4">
        <XCircle onClick={() => toggleMenu()} 
        className="w-10 h-10 hover:cursor-pointer text-white"/>
      </div>
      <ul className="text-white flex flex-col justify-center items-center space-y-3 pb-5">
        <li><a href="#ourFamily">Nuestra Familia</a></li>
        <li><a href="#ourServices">Nuestros Servicios</a></li>
        <li><a href="#contact">Contacto</a></li>

      </ul>
      </div>
    </div>
  )
}
