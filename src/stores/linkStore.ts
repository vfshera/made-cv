import create from "zustand";

interface ILinkStore {
  links: UserLinks[];
  addLink: (link: UserLinks) => void;
}

const useLinkStore = create<ILinkStore>((set) => ({
  links: [],
  addLink(link) {
    set((state) => ({
      links: [link, ...state.links],
    }));
  },
}));

export default useLinkStore;
