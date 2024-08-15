//? task 1 - sum of two nums
// function sumNumbers(num1,num2){
//     return num1+num2;
// }
// console.log(sumNumbers(10,20))
// console.log(sumNumbers(-10,20))
// console.log(sumNumbers(15.0,35))

//? task2 - even or odd
// function evenOdd(num){
//     if(num%2===0)
//         console.log("Even")
//     else if(num%2 === 1 )
//         console.log("Odd")
//     else
//         console.log("Invalid input")
// }
// evenOdd("prachi")
// evenOdd(10)
// evenOdd(35)

//? task 3 - reverse a string
// let result = function reverseString(str){
//     let nstr = ""
//     for (let i =str.length - 1;i>=0;i--) {
//         let ch = str.charAt(i)
//         nstr +=ch
//     }
//     return nstr
// }
// console.log(result("prachi"))
// console.log(result(""))
// console.log(result("R"))
// console.log(result("naman"))

//? task 4 - factorial calculate
// function calculateFactorial(num){
//     if(num>=0){
//         if(num===0)
//             return 1
//         else{
//             let fact=1;
//             for(let i=num;i>0;i--){
//                 fact *= i
//             }
//             return fact
//         }
//     }else{
//         console.log("Wrong input.Please enter a non-negative number")
//     }
// }
// console.log(calculateFactorial(5))
// console.log(calculateFactorial(0))
// console.log(calculateFactorial("prachi"))

//? task 5 - uppercase string
// function toUpperCaseString(str) {
//     return str.toUpperCase();
// }
// console.log(toUpperCaseString("prachi"))
// console.log(toUpperCaseString("pRaChI"))
// console.log(toUpperCaseString("PRACHI"))

//? task 6 - first n ele of arr
// function getFirstNElements(arr,n){
//     if(n>arr.length)
//         return arr
//     else{
//         for(let i=0;i<n;i++){
//             console.log(arr[i])
//         }
//     }
// }
// let output = getFirstNElements([1,2,3,4,5,6,7,8,9,10],5)
// console.log(output)

//? task 7 - Apply funct twice
let applyTwice = (num,result)=> {
}

//? task 15 - slice 
// function sliceStr(str,start,end){
//     return str.slice(start,end)
// }
// let str = "Hello"
// let result = sliceStr(str,1,3)
// // let result = sliceStr(str,1,5)
// // let result = sliceStr(str,-5,3)
// // let result = sliceStr(str,3,0)
// console.log(result)

//? task 16 - last 5 chars
// function getLastFiveChars(str) {
//     if(str.length < 5)
//         return str
//     else{
//         return str.substring(str.length,str.length-5)
//     }
// }
// let result = getLastFiveChars("HelloWorld")
// // let result = getLastFiveChars("Bye")
// // let result = getLastFiveChars("GoodMorning")
// console.log(result)

// ?task 17 - first 3 chars
// function getFirstThreeChars(str) {
//     return str.substr(0,3)
// }
// // let result = getFirstThreeChars("HelloWorld")
// // let result = getFirstThreeChars("Bye")
// let result = getFirstThreeChars("GoodMorning")
// console.log(result)

//? task 18 - replace 
// function replaceWord(str,word,nword){
//     let nWord = str.replace(word,nword)
//     return nWord;
// }
// console.log(replaceWord("HelloWorld","World","JS"))

//? task 19 - trim
// function trimWhiteSpaces(str) {
//     let nstr= str.trim();
//     return nstr
// }
// // let result = trimWhiteSpaces("  Hello World  ")
// // let result = trimWhiteSpaces("")
// let result = trimWhiteSpaces("  HelloWorld")
// console.log(result)

//? task 20 - concat
// function conateStr(str1,str2) {
//     let nstr = str1.concat(str2)
//     return nstr
// }
// // let result = conateStr("Hello" ,"World")
// // let result = conateStr(""+"")
// let result = conateStr("Hello","JS")
// console.log(result)

//? task 21 - startsWith
// function startsWithChar(str,ch,pos) {
//     if(str.startsWith(ch,pos))
//         return true
//     else return false
// }
// console.log(startsWithChar("Hello","H",0))
// console.log(startsWithChar("Hello","h",0))
// console.log(startsWithChar("Hello","He"))

//? task 22 - endsWith
// function endsWithChar(str,ch) {
//     if(str.endsWith(ch))
//         return true
//     else return false
// }
// console.log(endsWithChar("Hello",'o'))
// console.log(endsWithChar("Hello",'H'))
// console.log(endsWithChar("Hello","llo"))

//? task 23 - padStart
// function padStrWithZeros(str,len){
//     return str.padStart(len,"0")
// }
// console.log(padStrWithZeros("Hello",10))

// //? task 24 - padEnd
// function padStrWithAsterisk(str,len){
//     return str.padEnd(len,"*")
// }
// console.log(padStrWithAsterisk("JS",20))

//? task 25 - toUpperCase
// function convertToUpperCase(str) {
//     let nstr = str.toUpperCase()
//     return nstr
// }
// console.log(convertToUpperCase("Hello"))
// console.log(convertToUpperCase("bYe"))
// console.log(convertToUpperCase("@prachiGhangare123"))


//? task 25 - toLowerCase
// function convertToLowerCase(str) {
//     let nstr = str.toLowerCase()
//     return nstr
// }
// console.log(convertToLowerCase("HELLO"))
// console.log(convertToLowerCase("goodMORNING"))
// console.log(convertToLowerCase("Prachi@GhAnGaRe123"))

//? tast 26 - ASCII Value
// function getAsciiValue(str) {
//     return str.charCodeAt(0)
// } 
// console.log(getAsciiValue("Hello"))
// console.log(getAsciiValue("apple"))
// console.log(getAsciiValue("@"))
// console.log(getAsciiValue("123"))
// console.log(getAsciiValue(" "))

//task 28 - keys of obj
// function getKeys(obj) {
//     return Object.keys(obj)
// }
// let obj = {
//     name : "Tinku",
//     age : 22,
// }
// console.log(getKeys(obj))

//? task 29 - values of obj
// function getValues(product) {
//     return Object.values(product)
// }
// let product = {
//     name : "iPhone15",
//     rating: 3.5,
//     price : 60000,
// }
// console.log(getValues(product))

//? task 30 - freeze an obj
// function freezeObject(product) {
//     Object.freeze(product)
// }
// let product = {
//     name : "iPhone15",
//     rating: 3.5,
//     price : 60000,
// }
// freezeObject(product)
// product.name = "samsung" 
// console.log(product)
// product.offer=20
// console.log(product)
// delete product.price
// console.log(product)

//? task 31 - seal an obj
// function sealObject(product) {
//     Object.seal(product)
// }
// let product = {
//     name : "iPhone15",
//     rating: 3.5,
//     price : 60000,
// }
// console.log(product)
// sealObject(product)
// product.name = "samsung" 
// console.log(product)
// product.offer=20
// console.log(product)
// delete product.price
// console.log(product)

//? task 32 - isFrozen()
// function isObjectFrozen(product) {
//     return Object.isFrozen(product)
// }
// let product = {
//     name : "iPhone15",
//     rating: 3.5,
//     price : 60000,
// }
// // Object.freeze(product)
// console.log(isObjectFrozen(product))

//? task 33 - isSealed()
// function isObjectSealed(product) {
//     return Object.isSealed(product)
// }
// let product = {
//     name : "iPhone15",
//     rating: 3.5,
//     price : 60000,
// }
// // Object.seal(product)
// console.log(isObjectSealed(product))

//? task 34 - for loop
// for(let i=1,j=10;i<=10,j>=1;i++,j--){
//     // console.log(i)
//     console.log(j)
//     // if(i%2===0)
//     //     console.log(i)
// }

//? task 35 - while loop first 5 even no.
// let i=1
// let count=1
// while(i<=20){
//     if(i%2===0 && count<=5)
//         console.log(i)
//     i++
//     count++
// }

//? task 36 - do - while print hello 3 times
// let i=1;
// do{
//     console.log("Hello")
//     i++
// }while(i<=3);

//? task 37 - nested for loop