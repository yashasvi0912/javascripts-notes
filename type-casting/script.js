// Number → String
let num = 123;

let value1 = String(num);       
let value2 = num.toString();    

console.log(value1, typeof value1); 
console.log(value2, typeof value2); 


//  number -> boolean 
let num1 = 0;   // false (0 is treated as false)
let num2 = 45;  // true (non-zero numbers are true)

console.log(Boolean(num1)); 
console.log(Boolean(num2)); 


//  string -> number
let strNum1 = "456";
let strNum2 = "78.9";

console.log(Number(strNum1));    
console.log(parseFloat(strNum2)); 


// string -> boolean
let str1 = "";         // empty string → false
let str2 = "Hello";    // non-empty string → true

console.log(Boolean(str1)); 
console.log(Boolean(str2)); 


// boolean -> number 
let boolTrue = true;
let boolFalse = false;

console.log(Number(boolTrue)); 
console.log(Number(boolFalse)); 

// boolean -> string 
let bool1 = true;
let bool2 = false;

console.log(String(bool1));
console.log(String(bool2)); 
