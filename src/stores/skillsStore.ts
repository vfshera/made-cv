import create from "zustand";
import { persist } from "zustand/middleware";
import { SKILL_STORAGE } from "../constants";

interface ISkillStore {
  skills: string[];
  addSkills: (skill: string) => void;
}

const useSkillStore = create(
  persist(
    (set) => ({
      skills: [],
      addSkills(skill: string) {
        set((state) => ({
          skills: [skill, ...state.skills],
        }));
      },
    }),
    { name: SKILL_STORAGE }
  )
);

export default useSkillStore;
