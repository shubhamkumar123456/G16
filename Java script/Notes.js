// Javascript --> it is used to write logic and functionality in website. dicovered by Brandon Eich. firstly it was name as MOCHA. later it was named as live script and then currently it is named as Echma script( java script). current version of javascript is Echma script 6 ( ES6)

// With the help of javascript you can create Dynamic website. with html and css you can create only static website

// How to write Js --> internal  and external

// before Node js Browser was the only place javascript could live (run) . because Browsers have javascript engine which run your js code
// example --> Chrome has V8 engine, mozilla firefox has spider mokey

// Topics -->
// Variable --> done
// Datatypes  --> Primitive , Non Primitive 
// String and its method --> done
// loops --> for , while, do while --> done
// Array and its methods --> done
// Object and its method --> done
// function
// call back functions
// Promises
// Async/ await
// DOM
// project



// Variable --> Variable are used to store the value

// How to declare a variable --> using let , var and const keyword

// example of difference between let var and const 
    // a)
        // let x = 10;
        // let x = 5;
        // console.log(x)  // redecleration is not possible in case of let

    // b 
            // let x = 10;
            //     x= 5;
            //     console.log(x) //reassign is possible in case of let

    // c) 
            // var x = 10;
            // var x = 5;
            // console.log(x)  //redecleration is possible

    // d)
            // var x = 10;
            //    x = 15;
            //    console.log(x) //reassign is 
            
    // e)  
            // const x = 10;
            // const x = 5;
            // console.log(x) // can not redeclare in case of const

    // f)

            // const x = 10;
            //     x = 66;
            //     console.log(x) //can not reassign in const



//DataType --> 
// a) Primitive Datatype -->  datatype that can store only single values are known as primitive datatype;
// example  --> number, string, boolean , undefined , null

// Example --> 
        //     let x = 10; // example of number
        //     console.log(x)  // correct --> store single value primitive data type

            // let y = 10, 20, 30, 40;
            // console.log(y)// incorrect

        //     let y = "hello how are you";  //example of string
        //     console.log(y)


        //     let a = true; //example of boolean
        //     console.log(a)



        // Undefined --> it is a default value used by Javascript, when a variable is declared but its value is not assigned javascript gives undefined
        //     let z;
        //     console.log(z)


        // Null -->  it is a user defined value that is equal to nothing;

        //     let name = null //

//************************** Lecture Date (20-07-2026) ******************************/ 

// b) Non primitive Datatype --> can store collection of Data --> 
// example --> array , object

// array --> can store collection of data in indexing form
//         let arr = [10, 20, 50, "hello", true];
//         console.log(arr)
// // access any value --> using index
// console.log(arr[0] ) // 10
// console.log(arr[1] ) // 20
// console.log(arr[2] ) // 50
// console.log(arr[3] ) // hello
// console.log(arr[4] ) // true


// 0075
// 0352
// 0641
// 


// Object --> objects are used to store collection of data in key and value form

// let data = {
//         name:"one",
//         age:23,
//         languages:["hindi", "english","spanish"],
//         details:{
//                 houseNo:22,
//                 city:"lucknow"
//         }
// }
// console.log(data.name)  // one
// console.log(data['name'])  // one
// console.log(data.age)  //23
// console.log(data.languages) // ["hindi", "english","spanish"]
// console.log(data.languages[1]) // english
// console.log(data.details) //{houseNo:22,city:"lucknow"}
// console.log(data.details.city) //lucknow




// Some String methods --> 
// a) length method --> 
        // let name = "john"  //string
        // console.log(name.length)  // 4
        // console.log(name[2])  // h

// b) split method --> convert string into an array -->
// let text = "hello how are you" // 
//                 // ["hello how are you"]
//                 // ["hello","how","are","you"]
//                 // ["h","e","l","l","o","","h"....]

//         let ans = text.split() // ["hello how are you"]
//         let ans1 = text.split(" ")//["hello","how","are","you"]
//         let ans2 = text.split("") // ["h","e","l","l","o","","h"....]

//         console.log(ans)
//         console.log(ans1)
//         console.log(ans2)

// c)slice method --> can copy or cut a portion from a string

// let text = "hello how are you" //  slice(startIndex , EndIndex) end will always cut 1 less
// let ans = text.slice(0, 13)
// console.log(ans)

//d) includes --> can check value is present or not
//  let text = "hello how are you"
//  console.log(text.includes('aree'))  //true or false

//e) replace , replace all , trim method 


// Array methods -->
// a) length --> 
// let arr = ["apple" , "kiwi" , "banana" , "orange"];
// console.log(arr.length)  //4

//b) slice method --> 
// let arr = ["apple" , "kiwi" , "banana" , "orange"];
// let ans = arr.slice(0 ,3) // ['kiwi', 'banana']

//c) join method --> can convert an array into an string
// let arr = ["apple" , "kiwi" , "banana" , "orange"];
//  "apple kiwi banana orange"
// "apple,kiwi,banana,orange"

// let ans = arr.join()
// console.log(ans)  //"apple,kiwi,banana,orange"

// let ans1 = arr.join(" ")
// console.log(ans1)  //"apple kiwi banana orange"

//d) push method --> can add an element at the last of array
// let arr = ["apple" , "kiwi" , "banana" , "orange"];
// arr.push(true);
// arr.push(10);
// console.log(arr)

// e) pop() --> can remove an element at the last

// let arr = ["apple" , "kiwi" , "banana" , "orange"];
// arr.pop()
// console.log(arr)

// Ushift --> can add an element at the start
// shift --> can add an remove at the start

//**important */
// Splice method--> can add or remove an element at any place in array ;
// Syntax --> splice(startIndex , no of element you want to remove , element you want to add)


// let arr = ["apple" , "kiwi" , "banana" , "orange"];

// add element at any place
// arr.splice(2,0,10);
// console.log(arr)

// remove element at any place
// arr.splice(2,1)
// console.log(arr)

// mix case add or remove both or update any value
// arr.splice(1,1,true)
// console.log(arr)


// Loops example --> 
// let arr = ["apple", "kiwi", "banana",true ,"john"];
// method 1 -->
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

// method 2 using loop --> for loop , while loop , do while loop
//  for(let i=0; i<arr.length; i++){
//         console.log(arr[i])
//  }

// forEach , map method , filter method --> 

// *****************************21-07-2026**********************

// Object methods -->

// let data = {
//         name:"john",
//         age:34
// }

// data.course = "fullstack"; //add new key value
// data.age = 45;  //update any value
// console.log(data)

// Convert object into an String --> JSON.stringify() or JSON.parse()


// let data ={
//         name:"one",
//         age:33,
//         course:"fullstack"
// }

// let ans = JSON.stringify(data); //covert object into string 
// console.log(ans)
// console.log(typeof ans)
// console.log(ans[0])

// let ans2 = JSON.parse(ans)// convert string object into real object
// console.log(ans2)


// Functions --> functions are reusable piece of code design to perform a specific task . a function only runs when something invokes it (calls it)

        // let a = 10;
        // let b = 5;
        // console.log(a+b);

        // let c = 1;
        // let d = 2;
        // console.log(c+d)

        // let e = 10;
        // let f = 10;
        // console.log(e+f)


        // data recieved in function decleration is known as parameters. a and b  are parameters
        
        // example of normal function -->
        // function sum(a , b){  //function decleration  
        //         console.log(a+b)      
        // }

        // sum(10 ,5)  // function calling
        // // data passed inside function calling is known as arguments
        // sum(1,2);
        // sum(11,21);


// Arrow function (introduced in ES6 version) -->

// let x = 10;
// let y = "hello";

// let z = function(){
//         console.log("all good")
// }
// z();

// // example of arraow function. in arrow function we do not use function key word we use arrows;
// let print = ()=>{
//         console.log("running")
// }

// print() //function calling


// Callback function (important) -->  functions that are passed into another function as an argument are known as callback function

// 
// 
// because it is passed as argument in  another function (two).

//

// console.log(one)
// one()


// Timer function --> setTimeOut , setInterval

// syntax --> setTimeout(cb function , time in ms)

// function run(){
//         console.log("hello")
// }

// setTimeout(run, 3000);

// setInterval(function(){
//         console.log("all is well")
// }  , 1000)


// forEach , map method , filter method -->

// a) forEach method --> used to iterate throuh an array

// let arr = [10, 20, 30, 40, 50];

// arr.forEach((val , i)=> {
//         console.log(val)
// })
// map method --> used to traverse through an array and can also return a new array
// 
// let ans = arr.map((val , i)=> {
//          return val+1
// })

// console.log(ans)


// filter method --> 
let arr = [10, 20, 30, 40, 50];
let ans = arr.filter((val)=> val!= 40);
console.log(ans)