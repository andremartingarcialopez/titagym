import React, { useMemo, useState } from 'react'
import { Slide, toast } from 'react-toastify';
import { useAppStore } from '../stores/useAppStore';

export default function Formulary() {

    const { closeModal } = useAppStore();

    const isJoinUs = useMemo(() => {
        return location.pathname == "/joinUs"
    }, [location.pathname]);

    const [form, setForm] = useState({
        name: "",
        age: "",
        phone: "",
        email: ""
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({
            ...form,
            [e.target.id]: e.target.value
        })
    }

    function validateEmail(email: string) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        const result = regex.test(email);
        return result
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (Object.values(form).some(value => value.trim() == "")) {
            toast.error('Todos los campos son obligatorios', {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Slide,
            });
            return
        }
        if (!validateEmail(form.email)) {
            toast.error('Email no valido', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Slide,
            });
            return
        }

        if (form.phone.length < 10) {
            toast.error('Numero telefonico no valido', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Slide,
            });
            return
        }

        setForm({
            name: "",
            age: "",
            phone: "",
            email: ""
        })
        toast.success('¡Te contactaremos pronto!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Slide,

        });
    }

    return (
        <form className={`bg-white/90 rounded-xl p-5 w-full  ${isJoinUs ? "w-full" : "xl:w-100"} flex flex-col justify-center items-stretch space-y-3`}
            onSubmit={handleSubmit}>
            <div>
                <label className="text-gray-800 "
                    htmlFor="name">Nombre</label>
                <input className="w-full outline-amber-400 rounded-lg p-2 bg-gray-400/30 text-sm"
                    type="text"
                    placeholder="Ej. Andy"
                    id="name"
                    value={form.name}
                    onChange={handleChange} />
            </div>

            <div>
                <label className="text-gray-800 "
                    htmlFor="age">Edad</label>

                <input className="w-full outline-amber-400 rounded-lg p-2 bg-gray-400/30 text-sm"
                    type="number"
                    placeholder="Ej. 27"
                    id="age"
                    value={form.age}
                    min="1"
                    max="120"
                    step="1"
                    onChange={handleChange} />
            </div>

            <div>
                <label className="text-gray-800 "
                    htmlFor="phone">Telefono</label>
                <input className="w-full outline-amber-400 rounded-lg p-2 bg-gray-400/30 text-sm"
                    type="tel"
                    maxLength={10}
                    placeholder="Ej. 3312839670"
                    id="phone"
                    value={form.phone}
                    onChange={handleChange} />
            </div>

            <div>
                <label className="text-gray-800 "
                    htmlFor="email">Email</label>
                <input className="w-full outline-amber-400 rounded-lg p-2 bg-gray-400/30 text-sm"
                    type="email"
                    placeholder="Ej. user@correo.com"
                    id="email"
                    value={form.email}
                    onChange={handleChange} />
            </div>

            <div className='flex flex-col lg:flex-row justify-between items-stretch gap-1 mt-3'>
                <input className="bg-yellow-400 p-2 rounded-lg uppercase hover:bg-yellow-500 cursor-pointer hover:font-semibold active:bg-yellow-400 mt-3 w-full lg:w-50"
                    value={"Contactame"}
                    type="submit" />

                <button type='button' onClick={() => closeModal()} className={`bg-gray-400 p-2 rounded-lg uppercase hover:bg-gray-500 cursor-pointer hover:font-semibold active:bg-yellow-400 mt-3 w-full lg:w-50 ${!isJoinUs && "hidden"}`}>Cerrar</button>
            </div>
        </form>
    )
}
