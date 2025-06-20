const tests = [
  `The fox'es run over to the fences, but don't jump.`,
  `olleH cirE, epoh uoy evah a taerg yad! tI saw a erusaelp gniod siht llams tset :)`,
  `Will add another sentence - just because I can. Why not!`,
];

const reverseString = (input: string): string => {
  if (!input || !input.length) {
    // NOTE: Might as well throw here but for the test will just return empty string
    return "";
  }
  const regex = /[a-zA-Z]/g;
  return input
    .split(" ")
    .map((word) => {
      // Exclude punctuation from the words
      const letters = word.match(regex) || [];
      const reversed = letters.reverse();
      let index = 0;

      // Bada bing bada boom and we have a reversed string
      return word.replace(regex, () => {
        return reversed[index++];
      });
    })
    .join(" ");
};

const runTests = () => {
  tests.forEach((test) => {
    console.log(reverseString(test));
  });
};

runTests();
