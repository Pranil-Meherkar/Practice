// // 1 2 3 4 5
// // 1 2 3 4
// // 1 2 3
// // 1 2
// // 1
// // 1 2
// // 1 2 3
// // 1 2 3 4
// // 1 2 3 4 5

// const n = 5;
// let str = "";
// for (let i = 1; i < 2 * n; i++) {
//   for (let j = 1; j <= (i > n ? i - n + 1 : n - i + 1); j++) {
//     str += j + " ";
//   }
//   str += "\n";
// }

// console.log(str);

///////////////////////////////////////////////////////////////

const n = 5;
let str = "";
for (let i = 0; i < n * 2 - 1; i++) {
  for (let j = 0; j < (i >= n ? i - n + 1 : n - i - 1); j++) {
    str += " ";
  }
  for (let k = 0; k <= (i >= n ? (2 * n - i - 2) * 2 : i * 2); k++) {
    str += "*";
  }
  str += "\n";
}

console.log(str);
