
// const greet= function(name){
// return `Hello ${name}`;
// }

// console.log(greet("Naira"));


// function as an arguments
// return function as an argument.
// 1. 
// function sayhello(){
//  console.log("Hello")
// }
// setTimeout(sayhello,1000);

//2.
// let arr=[1,2,3,4,5,6];
// arr.forEach(function(num){
//  console.log(num*2);
// })

//3. Higher-Order Function, Function as Argument,functions as first-class citizens in JavaScript
// function performOperation(a, b, operation){
//   return operation(a,b);
// }
// let add= (x,y)=>x+y;
// let subtract= (x,y)=>x-y;
// console.log(performOperation(10,5,add));//15
// console.log(performOperation(20,10, subtract));//10

//4.sort the array of objects
// const people = [
//   { name: "Alice", age: 15 },
//   { name: "Bob", age: 13 },
//   { name: "Charlie", age: 30 }
// ];
// people.sort((a,b)=>a.age-b.age);
// console.log(people);

//5. getting even value from array.
//  function getFilter(arr, callback){
//   const result=[];
//   for(let i=0; i<= arr.length; i++){
//            if(callback(arr[i])){//checking even value and
//               result.push(arr[i]);//pushing into result array
//            }
//   }
//   return result;
// }
//  let numbers =[1,2,3,4,5,6,7,8]
//  let isEven= (num)=>num%2===0;
//  console.log(getFilter(numbers,isEven));

//6. HOF, Callback, FAAP(fn as a parameter) and compose function example
// const double= (x)=> x*2;
// const increment= (x) => x+2;
// function compose(incr, doub){
//   return function(x){
//     return incr(doub(x));
//   }

// }

// const doublethenincrement= compose(increment, double);
// console.log(doublethenincrement(5));

//7. trust issue with setTimeout
// console.log("start");
// setTimeout(function(){
//   console.log("callback");
// },1110);
// console.log("end");

// let startTime= new Date().getTime();
// let endTime= startTime;
// while(endTime<startTime+5000){
//   endTime= new Date().getTime();
// }
// console.log("end program")

//Higher order function.
//8.calculate the area, circumference and diameter of a given radiuses
//const radius= [2,3,4,5];
//  const area= function(radius){
//   return Math.PI*radius*radius;
//  }
//  const circumference= function(radius){
//   return 2*Math.PI*radius;
//  }
//  const diameter= function(radius){
//   return 2*radius;
//  }

//   Array.prototype.calculate=function(logic){
//  const result=[];
//   for(let i=0; i<this.length; i++){
//         result.push(logic(this[i]))
//   }
//   return result;

//  }

//  console.log(radius.map(area));

//  console.log(radius.calculate(area));
//  console.log(calculate(radius,circumference));
//  console.log(calculate(radius,diameter));

//Map, filter and reduce.
//9. const arr= [2,3,5,78,8,9];
// // const output= arr.map((x)=>x*2);
// // console.log(output);
// //custom map
// const double= function(arr){
//   return arr*2;
// }

//  Array.prototype.calculate= function(logic){
//   const output_arr= [];
//   for(let i=0; i<this.length; i++){
//     output_arr.push(logic(this[i]));
//   }
//   return output_arr;
// }
// console.log(arr.calculate(double));

// 10.const users = [{ firsName: "Naiyer", secondName: "Kalum", age: 32 },
//     { firsName: "Khushbu", secondName: "Khatoon", age: 26 },
//     { firsName: "Nahida", secondName: "Parween", age: 26 }];
    
    //show the fullname of user
    // const fullname=user.map(x=>(x.firsName+" "+x.secondName))
    // console.log(fullname);
    // const getuser = function (x) {
    //   return x.firsName + " " + x.secondName
    // }
    // Array.prototype.getFulName = function (getuser) {
    //   const result = [];
    //   for (let i = 0; i < this.length; i++) {
    //     result.push(getuser(this[i]))
    //   }
    //   return result;
    // }
    // console.log(users.getFulName(getuser));
    
    //user age less than 30 years
    // const output=users.filter((x)=>x.age<30);
    // console.log(output);
    
    //number user with same age
    
    // const output= users.reduce((acc,curr)=>{
    //   if(acc[curr.age]){
    //            acc[curr.age]= ++acc[curr.age];
    //   }else{
    //     acc[curr.age]= 1;
    //   }
    //   return acc;
    // },{});
    // console.log(output)
    
    
    // function mainFunction(calledFunction){
    //   const name="Kalim";
    //   calledFunction(name);
    // }
    
    // mainFunction(greet);
    
    
    //11. closures
    // function x(){
    //  var a=10;
    //   function y(){
    //     console.log(a)
    //  }
    // y();
    // }
    // x();
    // let z= x();
    // z();
    
    
    //12.Hoisting
    //problem: 01
    // var x = "kalim";
    // function getName(){
    //     console.log("testing hoist in js")
    // }
    
    // // var getName=()=>{
    // //     console.log("testing hoist in js")
    // // }
    // getName();
    // console.log(x);
    // console.log(getName);
    
    //13. problem: 02
    // var x=1;
    // a();
    // b();
    // console.log(x);
    // function a(){
    //     var x=10;
    //     console.log(x);
    // }
    
    // function b(){
    //     var x=20;
    //     console.log(x);
    // }
    
    //problem:scope and lexical environment.
    
    // function a(){
    //     var x=10;
    //     function b(){
    //         console.log(x)
    //     }
    //     b();
    // }
    // a();
    
    
    // 14.const cart= ["Shoes", "Pant", "Kurta"]
    //    //Consumer part
    //     creatOrder(cart)
    //      .then(function(orderId){
    //     console.log(orderId)
    //     return orderId;
    //    })
    //    .then(function(orderId){
    //     return  proceedToPayment(orderId)
        
    //    })
    //    .then(function(paymentInfo){
    //       console.log(paymentInfo);
    //    })
    //     .catch(function(err){
    //     console.log(err.message);
    //    })
    
    //    //producer part
    //    function creatOrder(cart){
    //    const pr= new Promise(function(resolve, reject){
      
    //       if(!validateCart(cart)){
    //         const err= new Error("Cart is not valid");
    //         reject(err);
    //       }
    //       //logic for createorder.
    //       const orderId= "12345";
    //       if(orderId){
    //        // resolve(orderId);
    //         setTimeout(function(){
    //           resolve(orderId)
    //         },5000);
    //       }
          
    //    });
    //    return pr;
    //   }
    // function proceedToPayment(orderId){
    //  return new Promise(function(resolve,reject){
    //   resolve("payment successful");
    //  })
    // }
    //    function validateCart(cart){
    //     return false;
    //    }
    
    
    //promise.all
    // const p1 =new Promise((resolve, reject)=>{
    //   setTimeout(()=>reject("p1 success"),2000);
    // });
    
    // const p2 =new Promise((resolve, reject)=>{
    //   //setTimeout(()=>reject("p2 success"),2000);
    //   setTimeout(()=>reject("p2 fail"),1000);
    // });
    
    // const p3 =new Promise((resolve, reject)=>{
    //   setTimeout(()=>reject("p3 success"),2000);
    // });
    
    // Promise.any([p1,p2,p3])
    // .then((res)=>{
    //   console.log(res);
    // })
    // .catch((err)=>{
    //   console.error(err);
    //   //console.log(err.errors)//incase of any
    // })
    
    //async
    //async is a keyword, and is use to create a async function.
    //async method always return promise
    //  async function getData(){
    //   return "Kalim";
    //  }
    //  const datapromise= getData();//this will return promise data
    //  datapromise.then((res)=>console.log(res));
     //console.log(datapromise);
    
     //create promise and send resolve data
    // const p= new Promise((resolv, reject)=>{
    // resolv("promise data");
    // })
    // async function getData(){
    //   return p;
    //  }
    //  const datapromise= getData();
    //  datapromise.then((res)=>console.log(res));
    
    //async with await
    //async and await combo is use to handle promise
     //await is a keyword that always use inside async function
    // const p= new Promise((resolv, reject)=>{
    //   resolv("promise dataa");
    //   })
    
    //   async function handlePromise(){
    //     const val= await p;
    //     console.log(val);
    //   }
    //   handlePromise();
    
    // const p1= new Promise((resolv, reject)=>{
    //   setTimeout(()=>{
    //     resolv("promise data1");
    //   },5000)
      
    //   })
    
    //   const p2= new Promise((resolv, reject)=>{
    //     setTimeout(()=>{
    //       resolv("promise data2");
    //     },10000)
        
    //     })
    
    //   async function handlePromise(){
    //     console.log("hello world!");
    //         const val= await p1;
    //         console.log("inside async1")
    //         console.log(val);
    
    //         const val2= await p2;
    //         console.log("inside async2")
    //         console.log(val2);
    //       }
    //       handlePromise();
    
    //fetch Api
    // const API_URL= "https://jsonplaceholder.typicode.com/users/1";
    
    //  async function handlePromise(){
    //   try{
    //     const data= await fetch(API_URL);
    //     const jsonvalue= await data.json();
    //     console.log(jsonvalue.name);
    //   }catch(err){
    // console.log(err)
    //   }
        
    //  }
    //  handlePromise();
    //  //handlePromise().catch((err)=>console.log(err));//if we are not using try
    
    //this
    // console.log(this);
    // ////this keyword value depends on how the function is called (window)
    // function x(){
    //   //value of this depends on strict or non strict.
    //   console.log(this);
    // }
    // x();
    // window.x();
    
    //15.this inside object's method
    // const obj={
    //   a:10,
    //   x: function(){
    //     console.log(this)
    //   }
    // }
    // obj.x();
    
    //this inside call apply and bind method
    // const student1={
    //   name:"kalim"
      
    // }
    // const student2={
    //   name:"Khushbu"
    // }
    
    //  const getName= function(town, state){
    //   console.log(this.name+" "+town+" "+state)
    // }
    // //getName();
    // getName.call(student1, "Nirsa", "Jharkhand");
    // getName.apply(student2,["Tolichowki", "Hyderabad"]);
    
    // const studentName= getName.bind(student1, "Nirsa", "Jharkhand");
    // studentName();
    
    //16.this inside arrow function.
    
    // const obj={
    //   a:10,
    //   x:()=>{
    //     console.log(this);
    //   }
    // }
    // obj.x();
    
    //this inside nested arrow function.
    
    // const obj={
    //   a:10,
    //   x:function(){
    //     //enclosing lexical context
    //     const y=()=>{
    //       console.log(this);
    //     }
    //     y();
    //   }
    // }
    // obj.x();
    
    // let arr = [1,2,[3,4,[5,6,7,[8,9]]]];
    
    // let output=[];
    
    // function flattenArray(arr){
    //     for(let i=0; i<arr.length;i++){
    //         if(Array.isArray(arr[i])){
    //             flattenArray(arr[i])
    //         }else{
    //             output+=arr[i];
    //         }
    //     }
    //     return output;
    // }
    // console.log(flattenArray(arr))
    


//Factorial of a Number̵
// function getFacto(num){
//     if(num==0 || num==1){
//         return 1;
//     }
//     return num* getFacto(num-1)
// }
//  console.log(getFacto(4))

// //palindrom
// let str = 'abc'
// //3*2*1
// let permutation = function (str, result) {
//     if (str.length == 0) {
//         console.log(result)
//     }
//     for (let i = 0; i < str.length; i++) {
//         let res = str.substring(0, i) + str.substring(i + 1)
//         permutation(res, result + str[i])
//     }
// }
// permutation(str, '');

//adding all given number
// let num=2786;
// function addSum(num){
//     let numtostr= ""+num
// let result= numtostr.split('').map((num)=>{
//     return parseInt(num)
// })
// let finalResult= result.reduce((a,b)=>a+b)
// console.log(finalResult)
// }
// addSum(num)

//Fibonacci
// function fibo(n){
//     if(n<2){
//         return n
//     }
//     return fibo(n-1) + fibo(n-2)
// }
//     function printFibo(n){
// for(let i=0; i<n; i++ ){
// console.log(fibo(i))
// }
//     }
// printFibo(7)

//Given two numbers min and max, find all the prime numbers in the range of min to max. (min and max included)

// function isPrime(n){
//     let primeFlag= true;

//     for(let i=2; i<=n/2;i++){
//         if(n%i==0){
//             primeFlag= false
//             break
//         }
//     }
//     if(primeFlag){
//         console.log(n)
//     }
// }
// function printPrime(min, max){

//     for(let i=min; i<max; i++){

//         if(i==0 ||i==1){
//             continue
//         }
//         isPrime(i)
//     }
// }
// printPrime(0,10)

//Anagram
// let str= 'racecar'
// function sortString (str) {
//     if (!str) {
//       return
//     }
//     return str
//       .split('')
//       .sort()
//       .join('')
//   }

  //console.log
  
//   function isAnagram (str1, str2) {
//     if (str1.length !== str2.length) {
//       return false
//     }
//     return sortString(str1.toLowerCase()) === sortString(str2.toLowerCase())
//   }
  
//   console.log(isAnagram('racecar', 'carrace'))

//reverse the word

// function reverseString(str){
//     return str.trim().split(/\s+/).reverse().join(' ')
// }
// console.log(reverseString("Naiyer Kalim"));


///1.problem: count the duplicates
//steps:
//1. On each iteration, increment the count for the value by 1 or initialize it to 1.
//2. The function we passed to the Array.forEach method gets called with each element in the array.
//3.On each iteration, we check if the current value is already present as a key in the count object. 
//If it is present, we increment it by 1 If the value is not present, we initialize it to 1
//4.We used the logical OR (||) operator to check if the key has not been initialized in the array. 
//If the accessor returns undefined, we initialize the value for the key to 0 + 1.
//5. After the last iteration, the count object contains the elements of 
//the array as keys and the number of their occurrences in the array as values.

// const a = ['a', 'b', 'c', 'd', 'a', 'a', 'b', 'c'];
// const count = {}

// a.forEach(element => {
//   count[element] = count[element] + 1 || 1;
// });
// console.log(count);

///2.show all possible combine collections from these strings.
// let str="abc"
// function perm(str, result){
//     if(str===""){
//         console.log(result)
//     }

//     for(let i=0; i<str.length;i++){
//         let res= str.substring(0,i)+ str.substring(i+1)
//         perm(res, result+str[i])
//     }
// }
// perm(str, "")


//3.Give an integer (num), find the factorial of that integer.
// function factorialn(num){
//     if(num===0||num===1){
//         return 1;
//     }else{
//         return num * factorialn(num-1)
//     }
// }
//// console.log(factorialN(1))'

//4.Give a number n, find the first n elements of the fibonacci seriies.
//Now what is fibonacci series? Well it is a series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers.
//method: 01
// function fibo(num){
//         let a, b, res;
//         a = 0;
//         b = 1;
//         for (var i = 2; i <= num; i++) {
//           res = a + b;
//           a = b;
//           b = res;
//         }  
//         return res
// }
// console.log(fibo(4));

//5. get only Number from array
//for removing special character : item.replace(/[^0-9]/g, '')
// var inputText = ["123f", "1dsa12", "1212ds", "65fd", "sadfa", "asdasd"];
//  let arr=['123abc','3c4c5fd','', '34','wer','23e']
//  let arr1=arr.map((item)=>{
//      return item.replace(/[a-z]/g, '')
//  }).filter((n)=n=>{
//      return n;
//  })
//  console.log(arr1)

//6.Flattern the array
// let arr=[1,2,[3,4],5,6,[7,8,9,10,11],12]
// let output= [];

// function flattenArray(arr){
//     for(let i=0;i<arr.length; i++){
//         if(Array.isArray(arr[i])){
//            flattenArray(arr[i])
//         }else{
//          output.push(arr[i])
//         }
//     }
//   return output;
// }
// console.log(flattenArray(arr))

//7. get sum of all number
// let data = 123456;
// //1234=> 1+2+3+4=> 10=>
// //4328= 4+3+2+8= 17=> 1+7=>8
// function addata(data) {
//   let convertToString = "" + data;
//   let convertToArray = convertToString.split('').map((ndata) => {
//     return parseInt(ndata)
//   })

//   let finaloutput = convertToArray.reduce((a, b) => { return a + b })
//   //console.log(finaloutput);
//   if (finaloutput > 9) {
//     addata(finaloutput)
//   } else {
//     console.log(finaloutput);
//   }
// }
// addata(data)

//8. arrow function should only be used in 
// let user={
//      uName: "kalim",
//      displyName1: ()=>{
//      console.log("from Arrow Function: "+ this.uName)
//      },

//      displyName2(){
//         console.log("from Arrow Function: "+ this.uName)
//      }

// }

// user.displyName1();
// user.displyName2();

//9. Currying
///Function Currying sum(1)(2)(3)(4).....()//
// let x= function(a){
//     return function(b){
//         if(b){
//             return x(a+b);
//         }
//         return a
        
//     }
// }
// console.log(x(1)(2)(3)(4)())

// ///Function Currying using ternary operator sum(1)(2)(3)(4).....()//
// let y= a=> b=> b? y(a+b):a;
// console.log(x(10)(20)(3)(4)())

//10. call, apply and bind
// let obj1={
//     displayName: "Kalim",
//     battery: 60,
//     boostBatteryCharge: function(a, b){
//         this.battery= 100 +a+b;
//     }

// }

// let obj2={
//     displayName: "Naiyer",
//     battery: 30
// }
// //obj1.boostBatteryCharge.bind(obj2,[20,3])
// let latestCharge= obj1.boostBatteryCharge.bind(obj2,20,3)
// latestCharge()
// console.log(obj1)
// console.log(obj2)

//11.
//swap two variables without using third variable.
//  let a= 10;
//  let b= 20;
// // console.log(`Before a is ${a} and b is ${b}`)
//  [a,b]=[b,a]
//  console.log(`After a is ${a} and b is ${b}`)

//12
//object destructuring
//  let myBio={
// uName: "Naiyer Kalim",
// age: 30,
// Degree: 'B.Tech',
// hobby:{
//     game:'BallyBall'
// }
// }
 //let {uName,age, Degree}= myBio;
 //let {uName:userName,age, Degree}= myBio;//renameing
//  let {uName:userName,age, Degree, hobby}= myBio;//nested object
//  console.log(`Hello, I am ${userName}, My age is ${age},  I have done my ${Degree} and my hobby is ${hobby.game}`);

//13
///Explicit call, apply and bind function
// let person={
//     name: "kalim"
// }
// function sayMyName(hobby1, hobby2){
//     console.log(`My Name is  ${this.name} and my Hobbies are ${hobby1 } ${hobby2}`)
// }
// sayMyName.call(person, "Reading", "Cooking");

//14.
// const person={
//   name: "kalim",
//   age: 30
// };
// const getObjectEntries=(person)=>{
//   const objkey= Object.keys(person)
//  // console.log(objkey);

//   const result= objkey.map((key)=>{
//      // console.log(key);
//       const value= person[key]
      
//       return[key, value]
//   })
// return result
// }
// const res= getObjectEntries(person)
// console.log(res)

//15. get sum of values
// function sum(...values){
//   let add=0;
//   values.map(ele=>add+=ele)
//   console.log(`sum: ${add}`)
// }
// sum(3,4,5,67,6);


//timeouts with var 
// function x(){
//     for(var i=1; i<=5;i++){
//         function close(s){
//             setTimeout(function(){
//                 console.log(s)
//                 },i*1000);
//         }
// close(i)
//     }

    
// }
// x()

// timeouts with let

// function x(){
//     for(let i=1; i<=5;i++){
        
//             setTimeout(function(){
//                 console.log(i)
//                 },i*1000);
//     }
// }
// x()
//Closures

// let c=6;
// function outest(b){
//     var d=7;
//     function outer(){
//         let a=10
//         function inner(){
//             console.log(a, b,c, d)
//         }
//         inner()
//     }
//     outer()
// }
// outest("kalim")

//Data hiding and encapsulation
// function counter(){
// var a=0;
// return function increament(){
//     a++;
//     console.log(a)
// }
// }

// var count = counter()
// count()

//make scalable

// function counter(){
//     var a=0;
//     this.increment=  function(){
//         a++;
//         console.log(a)
//     }
//     this.decrement=  function (){
//         a--;
//         console.log(a) 
//     }
//     }
    
//     var count = new counter()
//     count.increment();
//     count.decrement();




////Interview:01
//hoisting
// function x(){
//     console.log(a,c)
//     var a=10;
//     // const b=10
//      //let c=10
// }

// x();

//get another object data using bind method
// let obj1={
//     uName: "Naiyer",
//     lName: "Kalim",
//     getName(){
// console.log(this.uName+" "+ this.lName)
//     }
// }

// let obj2={
//     uName: "Nazir",
//     lName: "Kalim",
//     age:36
// }
// const res= obj1.getName.bind( obj2);
// res();


///var, let and const
/// shadowing..
// let a = "hello"
// function fn(){
//     if(true){
//        let a= "Hi"
//       console.log(a)
//     }
//     console.log(a)
// }
// fn()

////Live Interview Question answer
//Cannot access 'obj1' before initialization at interview01.js:17:5

// const obj1={a:10}
// const obj2= obj1;
// obj2.a=20;
// console.log(obj1)
// console.log(obj2)

// //console.log(mul(2)(3)(4))
// // let mul= a=> b=> b?mul(a*b):a
// // console.log(mul(2)(3)(4)());

// ///currying 
// function mul(a){
//  return function(b){
// if(b){
//     return mul(a*b)
// }return a
//  }
// }
// console.log(mul(2)(3)(4)(0)());


///filter
// var arr=[1,0,0,2,0,1,0,3,1,0]

// var zero= arr.filter(val=>{
//     return val===1
// })
// console.log(zero.length)



// const user={
//   name:'kalim',
//   age:'30'
// }
// ///output:
// // [
// //     ["name", "kalim"],
// //     ["age", 30]
// // ]
// //console.log(user[0]);
// function getResult(user){
//   const objKeys= Object.keys(user);
//   console.log(objKeys)
//   const result= objKeys.map((key)=>{
//     console.log(key);
//     const value= user[key]
//     console.log(value);
//     return[key, value]
//   })
//   return result;
// }
// const r= getResult(user)
// console.log(r)

//  

// let data= "size";
// const bird={
//   size: "small"
// }
// console.log(bird[data])
// console.log(bird["size"])
// console.log(bird.size)
// console.log(bird.data)




// function addToCart(){
//   this.productName= 'mobile';
//   this.getProduct= function(){
//     const that= this;
//     console.log(this.productName);
//      setTimeout(function(){
//       console.log(this.productName);
//      })
//   }
  
// }

// const obj= new addToCart()

// obj.getProduct();


// let userDetail={
//   uname: 'kalim',
//   getUser: function(){
//     return this.uname;
//   }
// }
// console.log(userDetail.getUser());

//sum(3,4,5,67,6)

// function sum(...values){
//   let add=0;
//   values.map(ele=>add+=ele)
//   console.log(`sum: ${add}`)
// }
// sum(3,4,5,67,6);

//let arr= [10,90,70,50]
// // const result= arr.filter(ele=>ele>50);
// // console.log(result);
// const result= arr.reduce((a,b)=>a+b)
// console.log(result);

// let add=0;
// arr.map(ele=>add+=ele)
// console.log(`sum: ${add}`)

//HOF

//addingbyten

// function addByTen(x){
// return x+1;
// }

// function getSquare(x){
//   return x*2;
//   }

// function calCulate(data, fun){
//   const output= []
// for(let i=0; i<arr.length; i++){
// output.push(fun(data[i]))
// }
// return output;
// }

// console.log(calCulate(arr, getSquare))
// console.log(calCulate(arr, addByTen))

// let fArray= [4,5,[[5,2], 8,9]]

// let output=[]

// function flateenArray(data){
//   for(let i=0; i<data.length; i++){
//     if(Array.isArray(data[i])){
//  flateenArray(data[i])
//     }else{
//       output.push(data[i])
//     }
//   }
//   return output;
// }

// console.log(flateenArray(fArray))


// var str = "jhkj7682834";
//             var matches = str.match(/\d+/);

// console.log(matches)

// const sumArr = (arr) => {
//     const result =arr.map(item=>{
//        return  item.match(/\d+/)});
//     console.log(result);
// };


// var inputText = ["123f", "1dsa12", "1212ds", "65fd", "sadfa", "asdasd"];
// let flatArray=[];


// function getNumber(arr){
//     let arrayItem=[];
//     arr.forEach(function(item){
//         if(typeof(item)==='number'){
//             arrayItem.push(item)
            
//         }
//     })
    
// }
// function getFlatArray(arr){
//     for(let i= 0; i< arr.length;i++){
//        if(Array.isArray(arr[i])){
//         getFlatArray(arr[i])
//        }else{
//         flatArray.push(arr[i])
//        }
//     }
//     console.log('flattenArray: ' + flatArray)
// //getNumber(flatArray)
//     return flatArray;
// }

// function processText(inputText) {
//     var output = [];
//     var json = inputText;
//     json.forEach(function (item) {
//         output.push(item.split(/(\d+)/).filter(Boolean));
       
//     });
//     console.log('flattenArray: ' + getFlatArray(output))
//     return output;
// }



//console.log(JSON.stringify(processText(inputText)));


//console.log(sumArr(["123f", "1dsa12", "1212ds", "65fd", "sadfa", "asdasd"])); 

//custom reduce method
// Array.prototype.myReduce = function(callback){
//      var a =0;                              
//      for(let i=0; i<this.length; i++)       
//      {
//          callback(a = a+this[i])           
//      }
//      return a;                              
// }

// let arr=[2,3,4]
// let res= arr.myReduce((acc,next)=>acc+next)
// console.log(res)//9

// let word= 'kalim'
// let revword= word.split('').reverse().join('');
// console.log(revword);

//HoF
//if r=[4,3,6,2], find the area, circumtances and diameter of the circle.

// const radius= [4,3,6,2];
// //find the area of a circle
// const area= function(radius){
//     return Math.PI* radius* radius;
// }

// //find the circumtances of a circle
// const circumtances= function(radius){
//     return 2*Math.PI* radius;
// }

// //find the diameter of a circle
// const diameter= function(radius){
//     return 2 * radius;
// }


// const calculate= function(radius, logic){
//   const output= [];
//   for(let i= 0; i< radius.length;i++){
//     output.push(logic(radius[i]));
//   }
//   return output; 
// }

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumtances));
// console.log(calculate(radius, diameter));


//Debouncing
// let count =0;
// const getData=()=>{
// console.log("Fetching Data...",count++)
// }

// const doSomemagic= function(fn,d){
//     let timer;
//     return function(){
//         let context= this, args=arguments;
//         clearTimeout(timer)
//          timer= setTimeout(()=>{
// getData.apply(context, args)
//         },d)
//     }
// }
// const betterFunction= doSomemagic(getData, 300);

//Throttling
// let count =0;
// const getData=()=>{
// console.log("Fetching Data...",count++)
// }

// const doSomemagic= function(fn,d){
//     let flag= true;
//     //let timer;
//     return function(){
//         if(flag){
//             let context= this, args=arguments;
//             //clearTimeout(timer)
//             fn();
//             flag=false;
//              setTimeout(()=>{
//                 flag=true
//     //getData.apply(context, arguments)
//             },d)
//         }
       
//     }
// }
// const betterFunction= doSomemagic(getData, 300);



// const arr=[1,4];
// function sumArray(array){
//     let temp=0;
//     if(array[1]>array[0]){
// temp=array[0]+1 
// console.log(temp);
//     }else{

//     }
// // for(number of array){
// //     //if()
// //     return console.log(array[0]+ array[1]);
// // }
// }
// sumArray(arr)

//Problem: 
// let data= 5678 
// //=>4+5+6+7=>22=>2+2=>4

// function addData(data){
// let convertToString= ""+data;
// console.log(convertToString);
// let convertToArray= convertToString.split('').map((data)=>{
//     console.log(parseInt(data))
//     return parseInt(data)
// })
// let result= convertToArray.reduce((a,b)=>a+b)
// if(result>9){
//     addData(result)
// }else{
//     console.log(result)
// }
// }
// addData(data)


// //find palindrom of any number

// let str= "madam"
// function checkPalindrom(data){

//     let len= data.length;
//     //for not a palindrom
//     for(let i=0; i<len/2; i++){
//         if(data[i]!==data[len-1-i]){
//              return "not a Palindrom"
//         }

//     }
//     return "Palindrom"
// }

// let finalResult= checkPalindrom(str)
// console.log(finalResult)

// const reverseString = str.split('').reverse().join('');
// if(str===reverseString){
//     console.log("Palindrom")
// }else{
//     console.log("Not a Palindrom")
//}


// let num= 5487
// //5+4+8+7=24=>2+4=6

// function getSingleNumnum(num){

//     let cinverNumtoString= " "+num
//     console.log(cinverNumtoString)
//     let stringtoArray= cinverNumtoString.split('').map((num)=>{
//         return parseInt(stringtoArray)
       
//     })

//     let result= stringtoArray.reduce((a,b)=>a+b)
//     if(result>9){
//     addData(result)
// }else{
//     console.log(result)
// }
   

// }

// getSingleNumnum(num)


////Problem: 01
// var add=    "500"-"10"
// console.log(add);

////problem: 02
//let a=1;
// for(a<5;a++;)
// {
    
// }
// console.log(a)

///

////problem 01: 
// const person={
//     name: "kalim",
//     age: 30
// };
// ///output:
// // [
// //     ["name", "kalim"],
// //     ["age", 30]
// // ]
// //console.log(Object.entries(person));
// const getObjectEntries=(person)=>{
//     const objkey= Object.keys(person)
//     console.log(objkey);

//     const result= objkey.map((key)=>{
//         console.log(key);
//         const value= person[key]
        
//         return[key, value]
//     })
// return result
// }

// const res= getObjectEntries(person)
// console.log(res)