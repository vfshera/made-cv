import create from "zustand";
import { persist } from "zustand/middleware";
import { LINK_STORAGE } from "../constants";

interface ILinkStore {
  links: UserLinks[];
  addLink: (link: UserLinks) => void;
}

const useLinkStore = create(
  persist(
    (set) => ({
      links: [],
      addLink(link) {
        set((state) => ({
          links: [link, ...state.links],
        }));
      },
    }),
    { name: LINK_STORAGE }
  )
);

export default useLinkStore;
