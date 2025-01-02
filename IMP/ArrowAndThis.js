// const user = {
//     username: "Omkumar",
//     price: 500,

//     welcomeMessage : function() {
//         console.log(`${this.username} welcome to website`);
//         console.log(this);
//     }
// }
// user.welcomeMessage()
// user.username = "Sam"
// user.price = 333
// user.welcomeMessage()


console.log(this);      // in [Node environment] it will give empty object [ {} ]
// but in [browser environment] it will give window object which is [global object]

// function chai(){
//     let username = "Om"
//     console.log(this.username);         // in output it will show "undefined".
//     // context can only be used within the objects and not withing the functions
// }
// chai()

// const chai = ()=> {
//     let username = "Ram"
//     let city = "Bharuch"
//     console.log(this);
// } 
// chai()

// const AddTwo = (num1,num2) =>{
//     return num1+num2
// }
// normal way to write arrow fun()

// const AddTwo = (num1, num2) => num1 + num2
// in this we don't need to type return as it takes it implicitly

// console.log(AddTwo(2,3));

const AddTwo = (num1, num2) => ({username:"Omkumar"})

console.log(AddTwo(2,3));

