// IIFE = Immediately Invoked Function Expressions

function Chai() {
    console.log(`Executed`);
    
}
Chai();
// executing the function normally

// in order to use IIFE we have to end the line before the function declaration with   ;

(function Chai1() {
    console.log(`Executed 2nd`);
    
})();  // <-- see ended with ; 
// name IIFE way to execute function

((name) => {
    console.log(`right ${name}`);
})("Omkumar")
// IIFE way