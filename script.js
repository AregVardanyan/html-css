// let arr = [8,0,1,'hey',12,5,'2',null,7,3]
// let arr2 = []
// for(let x = 0; x < arr.length; x++){
//     if (typeof arr[x] == "number"){
//       arr2.push(arr[x])
//     }

// }
// console.log(arr2)

// let arr=[8,8,'meh',6]
// let arr1=[]
// for(let x = 0; x < arr.lenght; x++){
//   if(typeof arr[x] == "number"){
//     arr1.push(arr[x])
//   }
// }
// console.log(arr1)

// let arr = [1,'10','hi',2,3]
// num = 0
// str = 0
// for(let i = 0; i < arr.length; i++){
//   if (typeof arr[i] == "number"){
//     num++
//   }
//   else if(typeof arr[i] == "string"){
//     str++
//   }
// }
// console.log("Numbers", num, "Strings", str)

// const person = {
// firstName: "Hrayr",
// lastName: "Ghukasyan",
// age: 19,
// hasWife:false,
// };
// console.log("Hello my name is", person.firstName, person.lastName, "i'm", person.age)



// const users = [
//   {
//   username: "Yuri Gagarin",
//   lang: "ru",
//   },
//   {
//   username: "Nil Armstrong",
//   lang: "ENG",
//   },
//   ];

// function user(a){
//   n = users[a].username
//   l = users[a].username.length
//   console.log(n, l)
// }

// user(0)
// user(1)

const arr1 = ["a","b","c"]
const arr2 = [1,2]

let obj = {};
arr1.forEach(function(item, index) {
  obj[item] = arr2[index]

});
console.log(obj)






