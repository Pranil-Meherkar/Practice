/////////////////////////////// 1

// const arr = [12, 35, 1, 10, 34, 1, 35]
// let [first, second] = [arr[0], -Infinity]

// for(let i = 1; i < arr.length; i++){
//     if(arr[i] > first){
//         second = first
//         first = arr[i]
//     }else if(arr[i] > second){
//         second = arr[i]
//     }
// }

// console.log(second)

/////////////////////////////// 2

// let integerNum = 1234

// let op = 0
// while(integerNum > 0){
//     op = op * 10 + integerNum % 10
//     integerNum = Math.floor(integerNum/10)
// }

// console.log(op)

/////////////////////////////// 3

// let a = 10, b = 12

// a = a + b
// b = a - b
// a = a - b

// console.log(a,b)

/////////////////////////////// 4

// let str = "pranil"

// //method 1 : the js way
// console.log(str.split("").reverse().join(""))

// //method 2
// let op = ""
// for(let i = 0; i < str.length; i++){
//     op = str[i] + op
// }
// console.log(op)

/////////////////////////////// 5

// const arr = [1, 4, 5, 7, 8, 10]

// for(let i = 1; i < arr.slice(-1)[0]; i++){
//     if(!arr.includes(i))
//     console.log(i)
// }

/////////////////////////////// 6

// run "node anagram" in terminal, to check code, view the anagram.js file

/////////////////////////////// 8

// const fibonacciSeries = (n) => {
//     let current = 1, next = 1
//     for(let i = 1; i < n-1; i++){
//         let temp = next
//         next = current + next
//         current = temp
//         console.log(current)
//     }
// }

// fibonacciSeries(10)

/////////////////////////////// 8

//same as 1