import { atom, selector } from "recoil";
import { Music } from "./assets/sounds";

interface IMessage {
  avatar?: string;
  name?: string;
  text?: string;
  uid?: string;
  createdAt?: Date;
  id: string;
}

export const musicAtom = atom({
  key: "music",
  default: new Audio(Music),
});

export const openMessageAtom = atom<boolean>({
  key: "openMessage",
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
