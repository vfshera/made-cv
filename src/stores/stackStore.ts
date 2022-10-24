import create from "zustand";

interface IStackStore {
  stacks: string[];
  addStacks: (stack: string) => void;
}

const useStackStore = create<IStackStore>((set) => ({
  stacks: [],
  addStacks(stack: string) {
    set((state) => ({
      stacks: [stack, ...state.stacks],
    }));
  },
}));

export default useStackStore;
