//! global scope -> Window
// console.log(this)

//! local scope ->Window
// let funct = function(){
//     console.log(this)
// }
// console.log(funct())
// funct()

//! arrow function  -> Window 
// let funct = ()=>{
//     console.log(this)
// }
// console.log(funct())

//! normal funct inside obj ->current object
// let obj = {
//     name : "Tinku",
//     age:22,
//     funct : function(){
//         console.log(this)
//         console.log(this.function())
//     }
// }
// obj.funct()

//! arrow funct inside obj ->Window
// let obj = {
//     name : "Tinku",
//     age:22,
//     funct : ()=>{
//         console.log(this)
//     }
// }
// obj.funct()

//! call(where this should point,arg of funct)
// let obj1={
//     name:"Tinku"
// }
// let func = function(age){
//     console.log(this)
//     console.log(age)
// }
// funct.call(obj1,23)

// let obj1 ={}
// class func {
//     constructor(name, age, add, cont) {
//         this.name = name
//         this.age = age
//         this.add = add
//         this.cont = cont
//     }
// }
// let func = function(name,age,add,cont){
//     this.name = name 
//     this.age = age
//     this.add = add
//     this.cont = cont
// }
// func.call(obj1,"tinku",23,"pune",9876543210)
// console.log(obj1)

//! apply()
// let obj1 ={}
// let func = function(name,age,add,cont){
//     this.name = name 
//     this.age = age
//     this.add = add
//     this.cont = cont
// }
// func.apply(obj1,["tinku",23,"pune",9876543210])
// console.log(obj1)

//! bind()
// let obj1 ={}
// let func = function(name,age,add,cont){
//     this.name = name 
//     this.age = age
//     this.add = add
//     this.cont = cont
//     console.log(this)
// }
// let updated = func.bind(obj1,"tinku",23,"pune",9876543210)
// updated()