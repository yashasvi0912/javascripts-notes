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

// create password checking regex 
// true password

const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])\S{8,60}$/

let passwords = ["Abcd@123", "Sakshi@789"];

passwords.forEach(password => {
  console.log(password, "=>", regex.test(password));
});

// false password

const regex1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])\S{8,50}$/

let passwords1 = [ "abcdefg", "Abcd1234"];

passwords1.forEach(string => {
  console.log(string, "=>", regex1.test(string));
});
