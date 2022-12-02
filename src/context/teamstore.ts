import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const teamStore = (set: any) => ({
  team: {
    name: "",
    sports: "",
    description: "",
    mascot: "",
  },
  players: [
    {
      name: "",
      age: 0,
      designation: "",
      profile: "",
    },
  ],
  addTeam: (payload: any) => {
    set((state: any) => ({
      team: {
        name: payload.name,
        sports: payload.sports,
        description: payload.description,
        mascot: payload.mascot,
      },
    }));
  },
  cleanTeam: () => {
    set(() => ({
      team: {
        name: "",
        sports: "",
        description: "",
        mascot: "",
      },
    }));
    set(() => ({
      players: [],
    }));
  },

  addPlayer: (payload: any) => {
    set((state: any) => ({
      players: [
        {
          name: payload.name,
          age: payload.age,
          designation: payload.designation,
          profile: payload.profile,
        },
        ...state.players,
      ],
    }));
  },
});

const useTeamStore = create(
  devtools(
    persist(teamStore, {
      name: "teams",
    }),
  ),
);

export default useTeamStore;
