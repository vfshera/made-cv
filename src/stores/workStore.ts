import create from "zustand";

interface IWorkStore {
  work: Work[];
  addWorks: (work: Work) => void;
}

const useWorkStore = create<IWorkStore>((set) => ({
  work: [],
  addWorks(newWork) {
    set((state) => ({
      work: [newWork, ...state.work],
    }));
  },
}));

export default useWorkStore;
