import { atom, selector } from "recoil";
import { Music } from "./assets/sounds";

export const musicAtom = atom({
  key: "music",
  default: new Audio(Music),
});

export const messageAtom = atom<boolean>({
  key: "message",
  default: false,
});
