// wap in js to reverse a string
// hint : indexes and concatenation

let name = "hello world";
console.log(name);

let reversed = "";
let char = name.length; 

while (char--) { 
    reversed += name[char];
}

console.log(reversed);

