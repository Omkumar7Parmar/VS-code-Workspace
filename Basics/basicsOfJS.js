// console.log("Hello world")

// const accountId = 353434          // Cannot be change
// let accountName = "Omkumar"
// var password = "3131"  
// let accountState    //Undefined
// /**
//  Prefer not to use var 
//  because of the issue in block scope and functional scope 
//  */

// // accountId = 4242     // gives error (TypeError: Assignment to constant variable.)
// accountName = "Om"
// password = "dgdgd"
// console.log(accountId)
// console.log(accountName)
// console.log(password)
// console.table([accountId,accountName,password,accountState])
// console.log();

let Person = {
    name: "omkumar",
    roll_no: 70,
    age: 20,
    city: "Bharuch"
}
// normal way to access object properties
console.log(Person.roll_no);


// by using de-structuring
const {roll_no: no} = Person
console.log(no);
function HelloUser(Username){
    if(!Username){          // Username === undefined is equal to !Username 
        console.log("Please Enter the username");
        return
    }
    return `Hello ${Username}`
}
// we can add default value to the parameter
function HelloUser2(Username = "Default User"){
    // now if statement will never be true
    if(!Username){          
        console.log("Please Enter the username");
        return
    }
    return `Hello ${Username}`
}
console.log(HelloUser2());