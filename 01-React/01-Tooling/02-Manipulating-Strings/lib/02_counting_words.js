function occurrences(text, word) {
  // return null;
  // 1. breakworn text ito words
  // 2. save into array
  // loop comparator with 'keyword'
  // counter for occurance +=
  console.log("....starting...");
  let wordsArray = 0;
  wordsArray = text.split(' ');
  console.log(wordsArray);
  let counter = 0;
  for (const i of wordsArray) {
    if (i.toLowerCase() === word.toLowerCase()) {
      counter += 1;
    }
  }
  return counter;
}

module.exports = occurrences;
