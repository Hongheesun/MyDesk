export const images: string[] = [
  "Don't dream, Be it !",
  "Be brave !",
  "Today is a Gift !",
  "Love yourself !",
  "Don't waste youth !",
];

const pickedLifeQuotesNumber = Math.floor(Math.random() * images.length);
export const randomLifeQuotes = images[pickedLifeQuotesNumber];
