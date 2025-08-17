import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useAppStore } from '../stores/useAppStore'

export default function ModalJoinUs() {

    const { modal, closeModal } = useAppStore();

    return (
        <>
            <Transition appear show={modal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => closeModal()}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-900/20" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-black/70 border m-2 border-yellow-400 p-6 text-left align-middle shadow-xl transition-all">
                                    <form action="">
                                        <div>
                                            <label className="text-white "
                                                htmlFor="name">Nombre</label>
                                            <input className="w-full outline-amber-400 rounded-lg p-2 bg-white/90 text-sm"
                                                type="text"
                                                placeholder="Ej. Andy"
                                                id="name"

                                            />
                                        </div>

                                        <div>
                                            <label className="text-white "
                                                htmlFor="age">Edad</label>

                                            <input className="w-full outline-amber-400 rounded-lg p-2 bg-white/90 text-sm"
                                                type="number"
                                                placeholder="Ej. 27"
                                                id="age"
                                                min="1"
                                                max="120"
                                                step="1"
                                            />
                                        </div>

                                        <div>
                                            <label className="text-white "
                                                htmlFor="phone">Telefono</label>
                                            <input className="w-full outline-amber-400 rounded-lg p-2 bg-white/90 text-sm"
                                                type="tel"
                                                maxLength={10}
                                                placeholder="Ej. 3312839670"
                                                id="phone"
                                            />
                                        </div>

                                        <div>
                                            <label className="text-white "
                                                htmlFor="email">Email</label>
                                            <input className="w-full outline-amber-400 rounded-lg p-2 bg-white/90 text-sm"
                                                type="email"
                                                placeholder="Ej. user@correo.com"
                                                id="email"
                                            />
                                        </div>

                                        <div className='flex flex-col lg:flex-row justify-between items-stretch gap-1 mt-3'>
                                            <input className="bg-yellow-400 p-2 rounded-lg uppercase hover:bg-yellow-500 cursor-pointer hover:font-semibold active:bg-yellow-400 mt-3 w-full lg:w-50"
                                                value={"Contactame"}
                                                type="submit" />

                                            <button type='button' onClick={() => closeModal()} className="bg-gray-400 p-2 rounded-lg uppercase hover:bg-gray-500 cursor-pointer hover:font-semibold active:bg-yellow-400 mt-3 w-full lg:w-50">Cerrar</button>
                                        </div>
                                    </form>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}