

function two(){
    console.log("i am running")
}

function one(a , b){
    console.log("hello")
    b();
}

// console.log(one)
one(10 , two)