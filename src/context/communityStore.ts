import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const communityStore = (set: any) => ({
  allCommunities: [],
});

const useCommunityStore = create(
  devtools(
    persist(communityStore, {
      name: "communities",
    }),
  ),
);

export default useCommunityStore;
