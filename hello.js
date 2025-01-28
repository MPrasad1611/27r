// // // // // // const arr = [1, 2, 3, 4];
// // // // // // const result = arr.map((num, index, array) => array[index] * 2);
// // // // // // console.log(result);

// // // // // const arr = [10, 20, 30];
// // // // // const result = arr.map((num) => num.toString());
// // // // // console.log(result);

// // // // const arr = [1, 2, 3];
// // // // const result = arr.map((num) => {
// // // //   console.log(num);
// // // // });
// // // // console.log(result);

// // // const arr = [10, 20, 30];
// // // arr.forEach(num => console.log(num * 2));
// // const arr = [1, 2, 3];
// // arr.forEach((num, index) => {
// //   if (index === 1) return;
// //   console.log(num);
// // });
// const arr = ['a', 'b', 'c'];
// const result = arr.map((char, index) => index + char);
// console.log(result);
// const arr = [[1, 2], [3, 4]];
// const result = arr.map(subArr => subArr.map(num => num * 2));
// console.log(result);

let ar = ["apple", "banana", "cherry"];
let op = ar.map((v) => v.charAt(0));
console.log(`Outputs For Given Questions`)
console.log(`------------------`)
console.log(op);
console.log(`------------------`)

let a1 = ["dog", "cat", "bird"];
let r = a1.map((a) => a.charCodeAt(a1.length - 1));
console.log(`------------------`)
console.log(r);
console.log(`------------------`)

let s = ["frog", "duck", "goose"];
let r2 = s.map((word) => {
  const nextChar = String.fromCharCode(word.charCodeAt(0) + 1);
  return nextChar + word.slice(1);
});
console.log(`------------------`)
console.log(r2);
console.log(`------------------`)

let s2 = ["zebra", "lion", "tiger"];
let r3 = s2.map(function (s) {
  let transformedWord = s
    .split("")
    .map((char) => {
      return char.charCodeAt(0) % 2 === 0 ? char.toUpperCase() : char;
    })
    .join("");
  return transformedWord;
});
console.log(`------------------`)
console.log(r3);
console.log(`------------------`)

let words = ["bat", "cat", "hat"];
let reversedWords = words.map(word =>word.split('').reverse().join(''));
console.log(`------------------`)
console.log(reversedWords);
console.log(`------------------`)
