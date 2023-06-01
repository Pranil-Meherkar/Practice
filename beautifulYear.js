const year = 1498;

function isUnique(num) {
  let numArray = num.toString().split("");
  let unique = [];
  for (let i of numArray) {
    if (!unique.includes(i)) unique.push(i);
    else return false;
  }
  return true;
}

function nextUniqueYear(num) {
  while (true) {
    num++;
    if (isUnique(num)) return num;
  }
}
const output = nextUniqueYear(year);
console.log(output);
