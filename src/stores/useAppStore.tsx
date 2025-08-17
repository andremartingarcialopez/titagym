import { create } from "zustand";

type UseAppStoreTypes = {
    modal: boolean;
    opeanModal: () => void
    closeModal: () => void
}

export const useAppStore = create<UseAppStoreTypes>((set) => ({
    modal: false,
    opeanModal: () => {
        set((state) => ({
            ...state,
            modal: true
        }))
    },
    closeModal: () => {
        set((state) => ({
            ...state,
            modal: false
        }))
    }

}))