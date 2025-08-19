//splice example Remove elements
let fruits = ["Apple", "Banana", "Mango", "Orange"];
fruits.splice(1, 2);  
console.log(fruits); 

//splice example Add elements

let colors = ["Red", "Blue", "Green"];
colors.splice(1, 0, "Yellow", "Pink");  
console.log(colors);

//splice example Replace elements

let numbers = [10, 20, 30, 40];
numbers.splice(1, 2, 99, 100);  
console.log(numbers);

//above all example conver into function 
//1

function Items() {
  let fruits = ["Apple", "Banana", "Mango", "Orange"];
  fruits.splice(1, 2); 
  console.log(fruits);
}
Items();  

//2

function Items1() {
  let colors = ["Red", "Blue", "Green"];
  colors.splice(1, 0, "Yellow", "Pink");  
  console.log(colors);
}
Items1();

//3

function Items2() {
  let numbers = [10, 20, 30, 40];
  numbers.splice(1, 2, 99, 100);  
  console.log(numbers);
}
Items2();






