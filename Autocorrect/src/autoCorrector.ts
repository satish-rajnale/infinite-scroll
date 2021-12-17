const universeOfDiscourse: string[] = [
  'google',
  'alphabet',
  'facebook',
  'amazon',
  'weird',
  'apple',
  'really',
  'microsoft',
];

function getwordArr(word: string): string[] {
  let result: string[] = [];

  for (let i = 0; i < word.length - 1; i++) {
    result.push(word[i] + word[i + 1]);
  }

  return result;
}

function getSimilarity(word1: string, word2: string) {
  word1 = word1.toLowerCase();
  word2 = word2.toLowerCase();
  const wordSplit1 = getwordArr(word1),
    wordSplit2 = getwordArr(word2);
  let similar = [];

  for (let i = 0; i < wordSplit1.length; i++) {
    if (wordSplit2.indexOf(wordSplit1[i]) > -1) {
      similar.push(wordSplit1[i]);
    }
  }

  return similar.length / Math.max(wordSplit1.length, wordSplit2.length);
}

function autoCorrect(
  word: string,
  knownWords = universeOfDiscourse,
  similarityThreshold = 0.5
) {
  let maxSimilarity = 0;
  let mostSimilar = word;

  for (let i = 0; i < knownWords.length; i++) {
    let similarity = getSimilarity(knownWords[i], word);
    if (similarity > maxSimilarity) {
      maxSimilarity = similarity;
      mostSimilar = knownWords[i];
    }
  }

  return maxSimilarity > similarityThreshold ? mostSimilar : word;
}

export default function submit(val, setText: (val: string) => void): void {
  let text = val;
  if (val.length > 0) {
    const lastChar = text[text.length - 1];

    if (lastChar === ' ') {
      text = text.split(' ');
      const lastWord = text[text.length - 2];
      text[text.length - 2] = autoCorrect(lastWord);
      text = text.join(' ');
    }

    setText(text);
  }
}

// // Input
// const optionRule =
//   '{1069} AND ({1070} OR {1071} OR {1072}) AND {1244} AND ({1245} OR {1339})';

// // Output Example
// /* const output = {
//   and: [
//     1069,
//     { or: [1070, 1071, 1072] },
//     1244,
//     { or: [1245, 1339] },
//   ]
// }; */

// function oeratorSplitter(str) {
//   const newstr = str.split('AND');
//   for (let i = 0; i <= newstr.length - 1; i++) {
//     if (newstr[i].includes('OR')) {
//       let val = newstr[i].split('OR');
//       val.forEach((v, i) => {
//         return (val[i] = +v.trim().replace(/\{|\(|\)|\}+/g, ''));
//       });
//       let orStr = { or: val };
//       newstr[i] = orStr;
//     } else {
//       newstr[i] = +newstr[i].trim().replace(/^\{+|\}+$/g, '');
//     }
//   }

//   return { and: newstr };
// }

// console.log(oeratorSplitter(optionRule));
