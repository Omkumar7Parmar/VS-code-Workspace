function CalculateCartPrice(...item){
    return item
}
console.log(CalculateCartPrice(10,20,30,40));

console.log("------------------");

function CalculateCartPrice2(item1, item2, ...item){
    return item
}
console.log(CalculateCartPrice2(10,20,30,40));

const user = {
    username: "omkumar",
    price: 777
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

// handleObject({
//     username: "sam",
//     price: 399
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));