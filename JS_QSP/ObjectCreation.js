// !OBJECT CREATION

//? 1.using object literal
// let obj = new Object()
// console.log(obj)
// obj.name="Ramesh"
// console.log(obj)
// obj.name="suresh"
// console.log(obj)

//? 1.using object literal
// let person = {
//     name : "Ramesh",
//     age : 22,
//     designation : null,
//     isMale : true,
//     gfName : undefined,
//     contact : 9876543210,
//     hobbies : ["Singing","Playing games"],
//     driving : ()=>{
//         console.log("ramesh knows driving")
//     }
// }
// console.log(person)
// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.entries(person))

// let jsonObj = JSON.stringify(person)
// console.log(jsonObj)

// let originalObj = JSON.parse(jsonObj)
// console.log(originalObj)

//? 2.using constructor and new keyword
// let obj = new Object()
// console.log(obj)

//? 3.using factory function
// let obj = (name,age,contact)=>{
//     let person = {
//         name:name,
//         age:age,
//         contact:contact
//     }
//     return person
// }
// let object = obj("ramesh",18,9876)
// console.log(object)

//? 4. creating an object using class 
// class person{
//     constructor(name,cont){
//         this.name = name,
//         this.cont = cont
//     }
// }
// let person1 = new person("Tinku",35467890);
// let person2 = new person("Pinku",35467890);
// let person3 = new person("Rinku",35467890);
// console.log(person1);
// console.log(person2);
// console.log(person3);


//? manupulation with object
// let obj1 = {
//     name:"Tinku",
//     addr : "pune"
// }
// let obj2 = {
//     contact : 9876543210,
// }
// let obj3 = {
//     isGraduate : true
// }
// let obj4 = {}
// Object.assign(obj1,obj2,obj3)
// Object.assign(obj4,obj1,obj2,obj3)
// console.log(obj1)

// ? Shallow & deep copy of object
//! 1.Shallow copy
// let obj1 ={
//     name:"tinku",
//     addr : "pune"
// }
// let obj2 = obj1
// obj2.contact = 9876543210
// console.log(obj1)
// console.log(obj2)

//! 2.Deep copy
// let obj1 ={
//     name:"tinku",
//     addr : "pune"
// }
// let obj2 = obj1
// let jsonObj = JSON.stringify(obj2)
// let newObj = JSON.parse(jsonObj)
// newObj.contact=9876543210
// console.log(newObj)
// console.log(obj1)

//! Delete Object property

// let obj = {
//     name:"Tinku",
//     add:"Pune"
// } 
// delete obj.add      //delete is a operator
// console.log(obj)

//? if we don't want someone to perform any operation use freeze()
let obj = {
    name:"Tinku",
    add:"Pune"
}
//-------freeze()------
// Object.freeze(obj)  
// obj.contact = 98765432      //will not affect any changes to obj
// console.log(obj) 

// delete obj.add          //will not affect any changes to obj
// console.log(obj)  

// obj.name = "Pinku"      //will not affect any changes to obj
// console.log(obj)

// console.log(Object.isFrozen(obj))   //check whether oj is freeze or not

//-----seal()---------
Object.seal(obj)
obj.contact = 98765432      //will not affect any changes to obj
console.log(obj) 

delete obj.add          //will not affect any changes to obj
console.log(obj)  

obj.name = "Pinku"      //it will change to pinku
console.log(obj)

console.log(Object.isFrozen(obj))   //check whether oj is freeze or not