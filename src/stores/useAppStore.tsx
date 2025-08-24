import { create } from "zustand";
import type { GroupClassCard } from "../pages/GroupClassPage";

type UseAppStoreTypes = {
    modalJoinUs: boolean;
    opeanModalJoinUs: () => void;
    closeModalJoinUs: () => void;
    modalGroupClass: boolean;
    openModalGroupClass: (cards: GroupClassCard) => void
    closeModalGroupClass: () => void;
    selectedGroupClass: GroupClassCard | null

}

export const useAppStore = create<UseAppStoreTypes>((set) => ({
    modalJoinUs: false,
    selectedGroupClass: null,
    modalGroupClass: false,
    opeanModalJoinUs: () => {
        set((state) => ({
            ...state,
            modalJoinUs: true
        }))
    },
    closeModalJoinUs: () => {
        set((state) => ({
            ...state,
            modalJoinUs: false
        }))
    },
    openModalGroupClass: (card) => {
        set((state) => ({
            ...state,
            modalGroupClass: true,
            selectedGroupClass: card,
        }))
    },
    closeModalGroupClass: () => {
        set((state) => ({
            ...state,
            modalGroupClass: false,
            selectedGroupClass: null,
        }))
    }

}))