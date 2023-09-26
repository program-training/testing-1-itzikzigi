export const sqrt = (num: number) => {
  if (num <= 0) return new Error("num must be greater then 0");
  return Math.sqrt(num);
};
