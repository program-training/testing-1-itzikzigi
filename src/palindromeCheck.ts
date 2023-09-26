export const palindromeCheck = (str: string) => {
  str = str.trim().toLowerCase();
  const strToCompare = str.split("").join("");
  return str === strToCompare;
};
