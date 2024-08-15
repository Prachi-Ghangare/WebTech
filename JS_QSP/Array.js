//! Array declaration

//? 1.using array literal

// let arr = [123,"Tinku",undefined,null,{name:"Ramesh"},true,()=>{console.log("executed")},[100,200,300]]
// console.log(arr)
// console.log(arr[0])
// console.log(arr[6]())
// console.log(arr[arr.length-1])
// console.log(arr[-2])
// let func = arr[6]
// func()
// console.log(arr[4].name)
// console.log(arr[arr.length-1][2])

//? 2.using new keyword
// let arr = new Array(10,20,30)
// console.log(arr)

//? manupulation with arr
// let nums = [1,54,999,23464,987654321]
// nums[nums.length]=243567
// nums.push(8976543)               //add element at end

// console.log(nums.pop())          //remove last element
// console.log(nums)

// nums.shift()                        //removes 1st element

// nums.unshift(-42)                    //add element at start (0th index)

// let newArr = nums.slice(2,3)         //returns an sliced arr but doesn't change original arr
// console.log(newArr)

// nums.splice(1,3);       //removes element from specified 1st arg upto no. of element specified as 2nd arg and will modify orig arr
// console.log(nums)

// console.log(nums.splice(1,2))
// console.log(nums)

// nums.splice(2,2,200,200)
// console.log(nums)

// console.log(nums.includes(17))      //retrun true if ele present else false

// console.log(nums.indexOf(999))          //returns index of ele if ele present else -1

//! Iteration on array
// let numsArr = [1,54,999,23464,987654321,0]
// for(let i=0;i<numsArr.length;i++){
//     console.log(numsArr[i]);
// }

// let i=0;
// while(i<numsArr.length){
//     console.log(numsArr[i++])
//     // i++;
// }

// let i=0;
// do{
//     console.log(numsArr[i++])
//     // i++;
// }while(i<numsArr.length);

// numsArr.forEach(element => {
//     console.log(element)
// });

// let numsArr = [1,54,555,23464,555,987654321,555,0]
// for(let i=0;i<numsArr.length;i++){
//     if(numsArr[i]==555)
//         console.log(i)
// }

//? forEach() not return anything and will not modify orgi arr
// let data = numsArr.forEach((val,ind,arr)=>{
//     console.log(val,ind,arr)
//     return val+100          //can't return new arr
// })
// console.log(data)       //undefined
// console.log(numsArr)

//?to work with indexes
// for (const val in numsArr) {
//     console.log(val)
// }

//?to work with elements of arr
// for (const val of numsArr) {
//     console.log(val)
// }

//? map() retrun new arr and will modify orgi arr
// numsArr.map((val,ind,arr)=>{
//      console.log(val,ind,arr)
// })

// let data = numsArr.map((val)=>{
//     return val+100
// })
// console.log("Original" -> data)
// console.log("Returned" -> numsArr)


//? sort()
// let data = [1,7,5,9,4,0,3,9,8,2,6]
// let sortedArr1 = data.sort()
// console.log(sortedArr1)
// console.log(data)
// let num = [190,380,220,301,870,667,70]
// let sortedArr2 = num.sort()   //sort() only sorts acc to 1st digits only
// let sortedArr2 = num.sort((a,b)=>{
//     return a-b          //asc order for desc (b-a)
// })
// console.log(sortedArr2)

//? without sort()
// let nums = [190,380,220,301,870,667,70]
// for(let i=0;i<nums.length;i++){
//     let temp = nums[i]
//     for(let j=i+1;j<nums.length;j++){
//         if(nums[i]>nums[j]){
//             temp=nums[i]
//             nums[i]=nums[j]
//             nums[j]=temp
//         }
        
//     }
// }
// console.log(nums)

//? practice of map() and filter()
// let nums = [190,380,220,301,870,667,70]
// let newArr =  nums.reverse()
// console.log("Original Array ->",nums)
// console.log("Reversed array ->",newArr)

// let nums = [190,380,220,301,870,667,70]
// let a =nums.filter((val,i)=>{
//     return val != 220
// })
// console.log(a)
// console.log(nums)

// let users = [
//     {
//         name:"Tinku",
//         age:22,
//         add:"Pune",
//         phone:9876543210,
//         id:1,
//         hobbies:["Swimming","Dancing","Cricket"],
//         percentage:{ssc:84,hsc:70,graduate:7.6}
//     },
//     {
//         name:"Pinku",
//         age:25,
//         add:"Mumbai",
//         phone:789065432,
//         id:2,
//         hobbies:["Cricket","Swimming",,"Acting"],
//         percentage:{ssc:90,hsc:95,graduate:9.8}
//     },
//     {
//         name:"Minku",
//         age:18,
//         add:"Pune",
//         phone:897654321,
//         id:3,
//         hobbies:["Singing","Reading books"],
//         percentage:{ssc:97,hsc:98,graduate:9.9}
//     },
//     {
//         name:"Rinku",
//         age:30,
//         add:"Delhi",
//         phone:987654123,
//         id:4,
//         hobbies:["watching anime","Dancing","Trekking"],
//         percentage:{ssc:92,hsc:78,graduate:8.9}
//     }
// ]
// users.map((val,ind)=>{
//     // console.log("Name:",val.name)
//     // console.log("age:",val.age)
//     // console.log("ssc:",val.percentage.ssc)
//     // val.hobbies.map((h)=>{
//     //     console.log(h)
//     // })
// })

// let updatedUsers = users.filter((val)=>{
//     return val.id !=4
// })
// console.log(users)
// console.log(updatedUsers)

//? how to prove everything in JS is object ->
// let obj = {
//     name:"Tinku"
// }
// //use to console prototype of object
// // prototype - itself a blueprint and __proto__ is a keyword which is a prototype also
// console.log(obj.__proto__)

// let num=10;
// console.log(num.__proto__)
// let arr=[]
// console.log(arr.__proto__)
// let name="Tinku"
// console.log(name.__proto__)
// let bool = true
// console.log(bool.__proto__)
// let func=()=>{}
// console.log(func.__proto__)
// let val= null                //means nothing but can change
// console.log(val.__proto__)   //error it does not have any method
// let val = undefined      // means nothing and can never change
// console.log(val.__proto__)      //error it does not have any method

//! Inheritance
let obj1 = {
    name:"tinku",
    age:22,
    add:"Pune"
}
let obj2 = {
    name:"Pinku"
}
console.log(obj2.__proto__)
obj2.__proto__ = obj1           // inheritance achieved using __proto__
console.log(obj2.__proto__)
console.log(obj2.name)
console.log(obj2.age) 
console.log(obj2.add)

