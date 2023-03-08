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

export const dateAtom = atom<string>({
  key: "date",
  default: "",
});

export const reviewAtom = atom<boolean>({
  key: "review",
  default: false,
});

export const noteAtom = atom<boolean>({
  key: "note",
  default: false,
});
