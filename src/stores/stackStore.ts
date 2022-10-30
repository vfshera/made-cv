import create from "zustand";
import { persist } from "zustand/middleware";
import { STACK_STORAGE } from "../constants";

interface IStackStore {
  stacks: string[];
  addStacks: (stack: string) => void;
}

const useStackStore = create(
  persist(
    (set) => ({
      stacks: [],
      addStacks(stack: string) {
        set((state) => ({
          stacks: [stack, ...state.stacks],
        }));
      },
    }),
    { name: STACK_STORAGE }
  )
);

export default useStackStore;
