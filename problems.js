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

/////////////////////////////// 9

//same as 1


/////////////////////////////// 10

// const list = [1,2,12,11,121,44,5,47,74,48,98,6,78]

// console.log(list.filter(item => !(item % 2)))

/////////////////////////////// 11

// function isPrime(num) {
//     for(let j = 2; j <= Math.floor(num/2);j++){
//         if (num % j === 0){
//             return false;
//         }
//     }
//     return true;
// }

// function showPrime(limit){
    
//     for(let i = 2;i<= limit;i++){
//         isPrime(i) && console.log(i);
//     }
// }
// console.log(isPrime(4));
// showPrime(20);

/////////////////////////////// 12

// const squareRoot = (num) => {
//     for(let i = 1; i <= num/2; i++){
//         if(i*i === num){
//             return i
//         }
//     }
//     return "Enter perfect square numbers only, for non perfect square numbers use 'Math.sqrt()' instead"
// }
// console.log(squareRoot(143))

/////////////////////////////// 13

// const arr = [1, 3, 4, 4, 7, 3, 8]

// console.log("Duplicate items:")
// const newArr = []
// arr.forEach(item => {
//     if (!newArr.includes(item)) newArr.push(item)
//     else console.log(item)
// })

// console.log(`Unique array: ${newArr}`)

/////////////////////////////// 14

// const arr = [80, 60, 10, 50, 30, 100, 0, 50]

// const pairs = []
// arr.forEach((item, index) => {
//     if(index === arr.length - 1) return
//     const temp = arr.slice(index+1).filter(i => i === 100 - item)
//     if(temp.length){
//         pairs.push(...temp.map(i => [item, i]))
//     }
// })

// console.log(pairs)

/////////////////////////////// 16

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

let op = strs.reduce((acc, i) => {
    const temp = i.split("").sort().join("")
    if(acc[temp]) acc[temp].push(i)
    else acc[temp] = [i]
    return acc
}, {})

console.log(Object.values(op))

/////////////////////////////// 17

// let str = "maharashtra" // expected op: "{ m: 1, a: 4, h: 2, r: 2, s: 1, t: 1 }"

// str = str.split("") 
// const op = [... new Set(str)].reduce((acc, i) => {
//     acc[i] = str.filter(letter => letter === i).length
//     return acc
// }, {})

// console.log(op)
