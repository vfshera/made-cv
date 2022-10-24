import create from "zustand";

interface IHeaderStore {
  header: { name: string; summary: string };
  setName: (name: string) => void;
  setSummary: (name: string) => void;
}

const useHeaderStore = create<IHeaderStore>((set) => ({
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
}));

export default useHeaderStore;
