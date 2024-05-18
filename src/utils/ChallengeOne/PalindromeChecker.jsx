export const findIndexToRemove = (str) => {
  const isPalindrome = (s) => s === s.split("").reverse().join("");

  if (isPalindrome(str)) {
    return -1;
  }

  for (let i = 0; i < str.length; i++) {
    const newStr = str.slice(0, i) + str.slice(i + 1);
    if (isPalindrome(newStr)) {
      return i;
    }
  }
  return -1;
};
