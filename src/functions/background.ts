import {
  WallPaper1,
  WallPaper2,
  WallPaper3,
  WallPaper4,
  WallPaper5,
  WallPaper6,
} from "../assets/images";

export const images: string[] = [
  WallPaper1,
  WallPaper2,
  WallPaper3,
  WallPaper4,
  WallPaper5,
  WallPaper6,
];

const pickedImageNumber = Math.floor(Math.random() * images.length);
export const randomImage = images[pickedImageNumber];
