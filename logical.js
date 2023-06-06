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

let str = "maharashtra"
str = str.split("") // expected op: "{ m: 1, a: 4, h: 2, r: 2, s: 1, t: 1 }"

const temp = [... new Set(str)]
const op = temp.reduce((acc, i) => {
    acc[i] = str.filter(letter => letter === i).length
    return acc
}, {})

console.log(op)