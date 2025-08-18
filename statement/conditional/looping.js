// while loop
let start = 1500
let org_start = start
let end = 2025

let count = 0

while (start <= end) {
    let year = start
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            count++
            console.log(year)
        }
    } else if (year % 4 == 0) {
        count++
        console.log(year)
    }
    start++
}

console.log("their are total " + count + " leap year in range of " + org_start + " to " + end + " !")



// do while loop
//make similar palindrome as of leap year using do while

let choice = false;

do {
    let number = org_number = Number(window.prompt("Enter number to check palindrome!"));

    let rev = 0;
    let d = 0;

    do {
        d = number % 10;               
        rev = rev * 10 + d;            
        number = parseInt(number / 10);
    } while (number != 0);

    console.log(rev);

    if (org_number == rev) {
        console.log(org_number + " is palindrome !");
    } else {
        console.log(org_number + " is not a palindrome !");
    }

    choice = window.confirm("Do you want to check again?");
} while (choice);


// for loop

// Find leap years between 2000 and 2024
for (let year = 2000; year <= 2024; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year);
    }
}

// palindrome using for loop

let num = parseInt(prompt("Enter a number:"));
let rev = 0;
let temp = num;

for (; temp > 0; temp = parseInt(temp / 10)) { 
    let d = temp % 10;  
    rev = rev * 10 + d;  
}

if (num === rev) {
    console.log(num + " is a Palindrome");
} else {
    console.log(num + " is not a Palindrome");
}
//  factorial using for loop

let num1 = 5; 
let fact = 1;

for (let value = 1; value <= num1; value++) {
    fact = fact * value;
}

console.log(fact); 

// factorial using function

function factorial(n) {
    let result = 1;
    while (n > 0) {
        result *= n;
        n--;
    }
    return result;
}
console.log("Factorial of 5 is: " + factorial(5)); 

