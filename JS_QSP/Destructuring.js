//! Destructuring of obj
// let bagPack = {
//     item1:"Torch",
//     item2:"Bottle",
//     item3:"Charger",
//     item4:"Camera",
//     item5:"wallet"
// }
// let {item1,item2,item4} = bagPack
// console.log(item4)

//! Destructuring of array - in this we annot break the flow becoz arr uses indexing
// let arr = ["torch","tiffin","camera","charger","wallet"]
// let [item1,item2,item4] = arr
// console.log(item4)

//! Destructuring of console obj 
// let {log} = console
// log(10)

//! Destructuring of string
// let str = "Ramesh"
// let [a,b,c,d,e,f]= str
// console.log(d)

//! rest [...new_var_name]
// let arr = ["torch","tiffin","camera","charger","wallet"]
// let [item1,item2,...c] = arr
// console.log(c)

//! spread [...original_var_name]
// let arr = ["torch","tiffin","camera","charger","wallet"]
// let newArr = [...arr]
    // console.log(arr)
// console.log(newArr)
// console.log(...arr)     //? spread

// let arr = [10,20,30]
// let func = (a,b,c)=>{
//     console.log(a+b+c)
// }
// func(...arr)

// let arr = [10,20,30]
// let func = (...a)=>{
//     console.log(a)
// }
// func(...arr)

