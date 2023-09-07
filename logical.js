// // input

// const data={
//     name:'datta',
//     page:1,
//     size:0,
//     search:'',
//     abc:'abc'
// }

// // expected output =>  ?name=datta&page=1&size=0&abc=abc


// let queryStr = Object.entries(data).reduce((acc,[key,value],index) => {
//     if(value || value === false || value === 0){
//         acc += (index ? "&": "?") + `${key}=${value}`
//     }
//     return acc
// }, "")


// console.log(queryStr)

/////////////////////////////////////////////

// const myTrim = (str) => {
//     let op = ""
//     str.trim().split("").forEach((i, index) => {
//         if(index === 0) op+= i
//         else{
//             if(str.trim().split("")[index-1] === " ")
//                 op+= str.trim()[index] === " " ? "" : i
//             else
//                 op+= i
//         }
//     })
//     return op
// }

// console.log(myTrim("          Pranil          Meherkar             ")); // Expected output: "Pranil Meherkar"

//////////////////////////////////////////////////////

// // Reverse inplace

// let name = "pranil meherkar abcd jjjjl"
// console.log(name.split(" ").reverse().join(" ").split("").reverse().join(""))

//////////////////////////////////////////////////////

// let input = "mY-naMe-IS-pRanIl"      //Expected op: "My Name Is Pranil"

// console.log(input.toLowerCase().split("-").map(item => item[0].toUpperCase() + item.slice(1)).join(" "))

/////////////////////////////////////////////////////

// // rotation of letters

// let input = "pranil"
// let n = 3  // expected op: "ilpran"

// n = input.length - n % input.length 
// console.log(input.slice(n) + input.slice(0,n))

/////////////////////////////////////////////////////

// let str = "maharashtra" // expected op: "{ m: 1, a: 4, h: 2, r: 2, s: 1, t: 1 }"

// str = str.split("") 
// const op = [... new Set(str)].reduce((acc, i) => {
//     acc[i] = str.filter(letter => letter === i).length
//     return acc
// }, {})

// console.log(op)

////////////////////////////////////////////////////

// // Reverse without using new variable or any functions

// const arr = [1,2,3,4,5,"vikas"]
// const l = arr.length

// for(let i = 0; i < l / 2; i++){
//     [arr[i], arr[l - i - 1]] = [arr[l - i - 1], arr[i]]
// }

// console.log(arr)

///////////////////////////////////////////////////

// // Find if an array contains all elements present in second array

// const arr = [1,2,4,5,6,7,8]
// const small1 = [1,4,6,7]
// const small2 = [4,6,9]

// const isPresent = (first, second) => arr.length === [...new Set([...first, ...second])].length

// console.log(isPresent(arr, small1))
// console.log(isPresent(arr, small2))

//////////////////////////////////////////////////
// Nth root of a number

const findNthRoot = (num, n=1) => {
  let i = 1;
  while(i**n <= num){
    if(i**n === num){
      return i
    }
    i++
  }
  return i**n - num > num - (i-1)**n ? i-1 : i
}

console.log(findNthRoot(50,3))
//////////////////////////////////////////////////
