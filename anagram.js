function arrayEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

function anagram(str1, str2) {
  let strArr1 = str1.split("");
  let strArr2 = str2.split("");
  strArr1.sort();
  strArr2.sort();

  return arrayEqual(strArr1, strArr2);
}

console.log(anagram("spine", "pines"));
