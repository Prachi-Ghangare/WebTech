//! Task 1 - forEach()
// let num= [2,4,6,8,10]
// num.forEach((val,ind)=>{
//     console.log("Index:",ind,"Value:",val)
// })

// let fruits = ["apple","cherry","mango","Kiwi","gauva"]
// fruits.forEach((val)=>{
//     console.log("I like",val)
// })

//! Task2 - forIn()
// let colors = ["red","pink","orange","green","violet"]
// for(const val in colors) {
//     console.log("Index:",val,"Color:",colors[val])
// }

// let num = [1,2,3,4,5]
// let newArr = []
// let i=0
// for (const val in num) {
//     newArr[i++]  = num[val]*2
// }
// console.log(newArr)
// console.log(num)

//! Task 3 - forOf()
// let country = ["India","China","Iran","USA"]
// for (const val of country) {
//     console.log(val)
// }

// let phrases = ["Good Morning","Good Night","Hello","GoodBye"]
// for (const val of phrases) {
//     console.log(val.concat('!'))
// }

//! Task 4 - sort()
// let nums = [15,3,9,25,7]
// let sortedArr = nums.sort((a,b)=>{
//     return a-b
// })
// console.log(sortedArr)

// let city = ["Pune","Mumbai","Kolkata","Delhi","Nashik"]
// let sortedArr = city.sort((a,b)=>{
//     return a.charCodeAt(0)-b.charCodeAt(0)
// })
// console.log(sortedArr)

//Task 5 - find()
// let arr = [3,10,18,20,25]
// let narr = arr.find((val)=>{
//     return val>15
// })
// console.log(narr)

// let animals = ["cat","dog","lion","tiger","parrot","peacock"]
// let find = animals.find((val)=>{
//     if(val.length>5)
//         return val
// })
// console.log(find)

//! Task 6 - map()
// let arr = [1,2,3,4,5]
// let narr = arr.map((val)=>{
//     return val*val
// }) 
// console.log(narr)

// let fruits = ["apple","banana","cherry"]
// let nfruits = fruits.map((val)=>{
//     return val.toUpperCase()
// })
// console.log(nfruits)

//! Task 7 - filter
// let numbers = [5,8,13,21,34]
// let filtered = numbers.filter((val)=>{
//     return val>10
// })
// console.log(filtered)

// let names = ["Tinku","Ramesh","Prachi","esha"]
// let filtered = names.filter((val)=>{
//     return val.includes("e")
// })
// console.log(filtered)

//! Task 8 - reduce()
// let arr = [4,7,12,19]
// let sum = arr.reduce((acc,val)=>{
//     return acc+val
// })
// console.log(sum)

// let string = ["I","Love","Coding"]
// let newStr = string.reduce((acc,val)=>{
//     return acc.concat(val)
// })
// console.log(newStr)

//! Task 9 - combining methods
// let nums = [2,5,8,11,14]
// let doubled = nums.map((val)=>{
//     return val*val
// })
// let filtered = doubled.filter((val)=>{
//     return val>10
// })
// console.log(filtered)

// let nums = [3,6,9,12]
// let add = nums.map((val)=>{
//     return val+2
// })
// let product = add.reduce((acc,val)=>{
//     return acc*val
// })
// console.log(product)

//! Task 10 - chaining methods
// let arr = [8,3,12,1,7]
// arr.sort((a,b)=>{return a-b})
// let narr = arr.map((val)=>{
//     return val-1
// })
// console.log(arr)
// console.log(narr)

// let arr = [2,4,6,8,10,1,3,5]
// let narr = arr.filter((val)=>{
//     return (val%2!=0)
// })
// let result = narr.reduce((acc,val)=>{return acc+val})
// console.log(result)

