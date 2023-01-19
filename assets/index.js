// (async () => {
//     const stream = await fetch("https://fakestoreapi.com/products/");
//     for await (const chunk of stream) {
//       console.log({ chunk });
//     }
//   })();

//   const getFileStream = async (url) => {
//     // implementation
//     let a = await fetch(url);
//     // console.log("run")
//     return a;
//   };
  
//   (async () => {
//     const stream = await getFileStream("https://fakestoreapi.com/products/");
//     let d = await stream.json();
//     for await (const chunk of d) {
//       console.log({ chunk });
//     }
//   })();

// const person = {
//     human:false,
//     printIntro:function(){
//         console.log(`${this.name} and is human ${this.human}`)
//     }
// };
// const me = Object.create(person);
// me.name = "Developer";
// me.human = true;
// me.printIntro();
// console.log(me);    

// function BankAccount(name,balance = 0){
//     this.customerName = name;
//     this.accountNumber = Date.now();
//     this.balance = balance;
// }

// let a = new BankAccount("Developer");

// BankAccount.prototype.deposit = function(amount){
//     // this.balance = this.balacne + amount;
//     this.balance = this.balance + amount;
// }
// BankAccount.prototype.widthDraw = function(amount){
//     this.balance = this.balance - amount;
// }
// a.deposit(10);
// console.log(a);


// class BankAccount{
//     #balance;
//     constructor(name,balance=0){
//         this.customerName = name;
//         this.accountNumber = Date.now();
//         this.#balance = balance;
//     }

//     deposit(amount){
//         this.balance += amount;
//     }
//     withdraw(amount){
//         this.balance -= amount;
//     }
//     set balance(amount){
//         this.#balance += amount
//     }

//     get balance(){
//         return this.#balance;
//     }
// }

// class CurrenAccount extends BankAccount{

//     constructor(name,balance=0){
//         super(name,balance);
//         this.transactionLimit = 5000;
//     }

//     #calculatingIntrest(){
//         console.log("Login of calculating interest");
//     }

//     takePersonalLoan(amount){
//         this.#calculatingIntrest();
//         console.log(`Personal Loan of amount ${amount}`);
//     }
// }

// const obj = new CurrenAccount("Developer",1000);
// console.log(obj.takePersonalLoan(40000));


// class User{
//     static id = 0;
//     name;
//     age;
//     constructor(name,age){
//         this.id = User.id++; // Accessins static property using class name
//         this.name = name;
//         this.age = age;
//     }

//     static sortUserByAge(user1,user2){
//         return user1.age - user2.age;
//     }
// }
// let obj0 = new User("Developer0",29)
// let obj1 = new User("Developer1",22)
// let obj2 = new User("Developer2",25)

// let arr = [obj0,obj1,obj2]; // storing user in array

// arr.sort(User.sortUserByAge); // accessing static method with class name not class instance

// console.log(arr);

// function x(){
//     let a = 10;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();


// Register
// Email
// Login
// Get user data

// function register(){
//     return new Promise((resolve,reject)=>{
//         resolve("User register");
//     },5000);
// }
// function sendEmail(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Email sent");
//         });
//     },4000);
// }
// function login(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             // console.log("User is successfully loged in.");
//             reject("User is successfully loged in.");
//         },3000)
//     });
// }
// function getUserData(){
//     new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject("User info");
//         },5000);
//     });
// }
// register()
// .then(()=>sendEmail())
// .then(()=>login())
// .then(()=>getUserData())
// .catch((e)=>console.log(e))

// Promise.all([register(),sendEmail(),getUserData()]).then((values)=>{
//     console.log(values);
// }).catch((e)=>{
//     console.log(e);
// })

// Promise.any([login(),getUserData()]).then((values)=>{
//     console.log(values);
// }).catch((err)=>{
//     console.log(err);
// });
// const addition = (a, b) =>
//   new Promise((resolve, reject) => {
//     if (typeof a == "number" && typeof b == "number") {
//       resolve(a + b);
//     } else {
//       reject("Not a Number");
//     }
//   });

// addition(10, 5)
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Numbers are added");
//   });

// const pro1 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("one reject"));
//   });
  
//   const pro2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("two"), 100);
//   });
//   const pro5 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Five"), 400);
//   });
  
//   Promise.race([pro1, pro2,pro5])
//     .then((response) => {
//       console.log(response); //output: two
//     })
//     .catch((err) => {
//       console.log(err);
//     });


// ================= PROMISES ==========================
// function APIrequest(){
//     const res = fetch("https://fakestoreapi.com/products/");
//     return res;
// }

// APIrequest().then((data)=>{
//     return data.json()
// }).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error)
// })

// =================================================

// ================ ASYNC AWAIT ====================

// async function asyncRequest(){
//     try{
//         const res = await fetch("https://fakestoreapi.com/products/");
//         const data = await res.json();
//         console.log(data);
//     } catch(error){
//         console.log(error)
//     }
// }

// ================================================

const url = "https://jsonplaceholder.typicode.com/users";
let body = {
    name:"Developer",
    age:23
}
const xhr = new XMLHttpRequest();

xhr.open("POST",url);

xhr.responseType = 'json';
xhr.setRequestHeader('Content-Type','application/json');
xhr.onload = ()=>{
    console.log(xhr.response);
}
xhr.onerror = () => {
    console.log("errror")
}
xhr.send(JSON.stringify(body));