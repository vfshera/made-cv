import create from "zustand";

interface IEditStore {
  categories: { current: number; available: string[] };
  setCategory: (index: number) => void;
}

const useEditStore = create<IEditStore>((set) => ({
  categories: {
    current: 0,
    available: ["NONE", "NAME", "SUMMARY", "LINK", "SKILL", "STACK", "WORK"],
  },
  setCategory(index) {
    set((state) => ({
      categories: {
        ...state.categories,
        current: index,
      },
    }));
  },
}));

export default useEditStore;
