// function checkSpeed(speed){
//     if(speed <= 74){
//         console.log("ok");
//         return
//     }
//     let points = Math.floor((speed-70) / 5);
//     if (points >= 12){
//         console.log("Suspended");
//         return
//     }
    
//     console.log(`Points: ${points}`);
// }

// checkSpeed(129);

////////////////////////////////////////////

// function sum(limit) {
//     let firstFactor = 3;
//     let secondFactor = 5;
//     let sum = 0;

//     for (let index = 1; index <= limit ; index++) {
//         if(index % firstFactor === 0 || index % secondFactor === 0)
//             sum += index;       
//     }
//     return sum;
// }

// console.log(sum(10));

//////////////////////////////////////////////

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

//////////////////////////////////////////////

// function arrayFromRange(min,max) {
//     let arr = [];
//     for(let i = min;i<=max;i++) arr.push(i) 
//     return arr
// }

// console.log(arrayFromRange(-10,3));

/////////////////////////////////////////////////////

// function removeItem(arr, itemToRemove){
//     return arr.filter(item => item!== itemToRemove)
// }

// function except(arr, excluded) {
    
//     // return excluded.reduce((finalArray,item) => {
//     //     return removeItem(finalArray,item)
//     // },arr);

//     excluded.forEach(element => {
//         arr = removeItem(arr,element);
//     });
//     return arr;
    
// }

// console.log(except([1,2,2,3,3,2,4],[2,3]));

//////////////////////////////////////////////////////


// function move(arr,index,offset) {
//     const newIndex = index + offset;
//     let newArray = [...arr];

//     if(newIndex < 0 || newIndex >= arr.length){
//         console.error("Invalid offset");
//         return
//     }

//     const value = newArray.splice(index,1)[0];
//     newArray.splice(newIndex,0,value);

//     return newArray
// }

// console.log(move([1,2,3,4],2,1));


//////////////////////////////////////////////////


// function countOccurences(arr, element) {
//     // for (let item of arr){
//     //     if(item === element)
//     //         count++;
//     // }

//     const count = arr.reduce((count,item) => {
//         (item === element) && count++;
//         return count;
//     },0)
//     return count;
// }

// console.log(countOccurences([1,2,3,2,1,1,4,2,1],1));

///////////////////////////////////////////////////////////

// function getMax(arr) {
//     // let highest = -Infinity;
//     // for (item of arr){
//     //     if(item > highest) highest = item;
//     // }

//     const highest = arr.reduce((highest,item) => {
//         return (item > highest)? item: highest;
//     })


//     return highest;
// }

// console.log(getMax([1,2,54,2,33]));

//////////////////////////////////////////////////////////

// const movies = [
//     {title: "a", year : 2018, rating : 4.5},
//     {title: "b", year : 2018, rating : 4.7},
//     {title: "c", year : 2018, rating : 3},
//     {title: "d", year : 2017, rating : 4.5}
// ]

// const titles = movies
//     .filter((movieEntry) => movieEntry.year === 2018 && movieEntry.rating >= 4 )
//     .sort((a,b) => b.rating - a.rating)
//     .map(m => m.title)

// console.log(titles)

/////////////////////////////////////////////////////////////////////////////////////////

// factorial using recursion

const factorial = (num) => {
    if(num <= 1)
    return 1
    
    return num * factorial(num - 1)
}

console.log(factorial(5))