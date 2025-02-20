import { atom } from "jotai";

type Navigating = {
  // TODO these should be the type-safe routes
  to: string;
  from: string;
  started: Date;
};

export const navigatingAtom = atom<Navigating | undefined>(undefined);
