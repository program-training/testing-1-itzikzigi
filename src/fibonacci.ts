export const fibonacciFunc = (arr: number[]) => {
  for (let i = arr.length - 1; i > 1; i--) {
    if (arr[i] - arr[i - 1] !== arr[i - 2]) return "not a fibonacci sequence";
  }
  return arr[arr.length - 2] + arr[arr.length - 1];
};
