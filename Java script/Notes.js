// Javascript --> it is used to write logic and functionality in website. dicovered by Brandon Eich. firstly it was name as MOCHA. later it was named as live script and then currently it is named as Echma script( java script). current version of javascript is Echma script 6 ( ES6)

// With the help of javascript you can create Dynamic website. with html and css you can create only static website

// How to write Js --> internal  and external

// before Node js Browser was the only place javascript could live (run) . because Browsers have javascript engine which run your js code
// example --> Chrome has V8 engine, mozilla firefox has spider mokey

// Topics -->
// Variable
// Datatypes  --> Primitive , Non Primitive
// String and its method
// loops --> for , while, do while
// Array and its methods
// Object and its methos
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
            let x = 10; // example of number
            console.log(x)  // correct --> store single value primitive data type

            // let y = 10, 20, 30, 40;
            // console.log(y)// incorrect

            let y = "hello how are you";  //example of string
            console.log(y)


            let a = true; //example of boolean
            console.log(a)



        // Undefined --> it is a default value used by Javascript, when a variable is declared but its value is not assigned javascript gives undefined
            let z;
            console.log(z)


        // Null -->  it is a user defined value that is equal to nothing;

            let name = null //



// b) Non primitive Datatype --> can store collection of Data --> 
// example --> array , object

// array --> can store collection of data in indexing form
        let arr = [10, 20, 50, "hello", true];
        console.log(arr)
// access any value --> using index
console.log(arr[0] ) // 10
console.log(arr[1] ) // 20
console.log(arr[2] ) // 50
console.log(arr[3] ) // hello
console.log(arr[4] ) // true

