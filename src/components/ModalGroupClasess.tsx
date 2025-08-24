
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, } from 'react';
import { useAppStore } from '../stores/useAppStore';

export default function ModalGroupClasess() {

    const { modalGroupClass, closeModalGroupClass, selectedGroupClass } = useAppStore()

    if (!selectedGroupClass) {
        return null
    }

    return (
        <>
            <Transition appear show={modalGroupClass} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => closeModalGroupClass()}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/70" />
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
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-yellow-400 px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6" >
                                    <Dialog.Title as="h3" className="text-black uppercase text-2xl md:text-4xl font-extrabold my-5 text-center">
                                        {selectedGroupClass.title}
                                        <img className='rounded-lg mt-5' src={selectedGroupClass.img} alt="" />
                                    </Dialog.Title>

                                    <Dialog.Title as="h3" className="text-black md:text-2xl font-light my-5">
                                        {selectedGroupClass.details}
                                    </Dialog.Title>
                                    <button type='button' onClick={() => closeModalGroupClass()} className='bg-black text-yellow-400 w-full p-2 rounded-lg hover:font-bold cursor-pointer uppercase'>Cerrar</button>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}