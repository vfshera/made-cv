import create from "zustand";
import { persist } from "zustand/middleware";
import { HEADER_STORAGE } from "../constants";

interface IHeaderStore {
  header: { name: string; summary: string };
  setName: (name: string) => void;
  setSummary: (name: string) => void;
}

const useHeaderStore = create(
  persist(
    (set) => ({
      header: {
        name: "",
        summary: "",
      },
      setName(name) {
        set((state) => ({
          header: {
            ...state.header,
            name,
          },
        }));
      },
      setSummary(summary) {
        set((state) => ({
          header: {
            ...state.header,
            summary,
          },
        }));
      },
    }),
    { name: HEADER_STORAGE }
  )
);

export default useHeaderStore;
