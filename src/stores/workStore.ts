import create from "zustand";
import { persist } from "zustand/middleware";
import { WORK_HISTORY_STORAGE } from "../constants";

interface IWorkStore {
  work: Work[];
  addWorks: (work: Work) => void;
}

const useWorkStore = create(
  persist(
    (set) => ({
      work: [],
      addWorks(newWork) {
        set((state) => ({
          work: [newWork, ...state.work],
        }));
      },
    }),
    {
      name: WORK_HISTORY_STORAGE,
    }
  )
);

export default useWorkStore;
