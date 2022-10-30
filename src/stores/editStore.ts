import create from "zustand";
import { persist } from "zustand/middleware";
import { EDIT_STORAGE } from "../constants";

interface IEditStore {
  categories: { current: number; available: string[] };
  setCategory: (index: number) => void;
}

const useEditStore = create(
  persist(
    (set) => ({
      categories: {
        current: 0,
        available: [
          "NONE",
          "NAME",
          "SUMMARY",
          "LINK",
          "SKILL",
          "STACK",
          "WORK",
        ],
      },
      setCategory(index) {
        set((state) => ({
          categories: {
            ...state.categories,
            current: index,
          },
        }));
      },
    }),
    { name: EDIT_STORAGE }
  )
);

export default useEditStore;
