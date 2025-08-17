import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function ModalJoinUs() {



    return (
        <>

            <Transition appear show={false} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => { }}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/30" />
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
                                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <form action="">
                                        <div>
                                            <label className="text-gray-800 "
                                                htmlFor="name">Nombre</label>
                                            <input className="w-full outline-amber-400 rounded-lg p-2 bg-gray-400/30 text-sm"
                                                type="text"
                                                placeholder="Ej. Andy"
                                                id="name"

                                            />
                                        </div>

                                        <div>
                                            <label className="text-gray-800 "
                                                htmlFor="age">Edad</label>

                                            <input className="w-full outline-amber-400 rounded-lg p-2 bg-gray-400/30 text-sm"
                                                type="number"
                                                placeholder="Ej. 27"
                                                id="age"
                                                min="1"
                                                max="120"
                                                step="1"
                                            />
                                        </div>

                                        <div>
                                            <label className="text-gray-800 "
                                                htmlFor="phone">Telefono</label>
                                            <input className="w-full outline-amber-400 rounded-lg p-2 bg-gray-400/30 text-sm"
                                                type="tel"
                                                maxLength={10}
                                                placeholder="Ej. 3312839670"
                                                id="phone"
                                            />
                                        </div>

                                        <div>
                                            <label className="text-gray-800 "
                                                htmlFor="email">Email</label>
                                            <input className="w-full outline-amber-400 rounded-lg p-2 bg-gray-400/30 text-sm"
                                                type="email"
                                                placeholder="Ej. user@correo.com"
                                                id="email"
                                            />
                                        </div>

                                        <input className="bg-yellow-400 p-2 rounded-lg uppercase hover:bg-yellow-500 cursor-pointer hover:font-semibold active:bg-yellow-400 mt-3 w-full lg:w-50"
                                            value={"Contactame"}
                                            type="submit" />
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