import create from "zustand";

interface ISkillStore {
  skills: string[];
  addSkills: (skill: string) => void;
}

const useSkillStore = create<ISkillStore>((set) => ({
  skills: [],
  addSkills(skill: string) {
    set((state) => ({
      skills: [skill, ...state.skills],
    }));
  },
}));

export default useSkillStore;
