import { lenCheck } from "./lengthCheck";
import { palindromeCheck } from "./palindromeCheck";
import sortArrFunc from "./sortArrOfNumbs";
import { fetchUserData } from "./fetchUserdata";
import { fibonacciFunc } from "./fibonacci";
import { sqrt } from "./sqrt";

const str = "hello world";
const lengthCheck = lenCheck(str);
// console.log(lengthCheck);

const palindromeCheckFunc = palindromeCheck("No lemon no melon");
// console.log(palindromeCheckFunc);

const arr = [4, 567, 9, 563, 23, 74, 21];
const sort = sortArrFunc(arr);
// console.log(sort);

const squireRoot = sqrt(-9);
// console.log(squireRoot);

const checkFetch = async () => {
  const user = await fetchUserData(1);
  return user;
};
// checkFetch()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err.message));

const array = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
const fibonacci = fibonacciFunc(array);
console.log(fibonacci);
