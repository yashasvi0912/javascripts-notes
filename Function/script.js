// Function with while loop

function print_numbers() {
    let num = 1;
    while (num <= 10) {
        console.log(num);
        num++;
    }
}
print_numbers();

//function do while loop with palindrome

function palindrome(num) {
    let original = num;
    let reversed = 0;

    do {
        let digit = num % 10;    
        reversed = reversed * 10 + digit;
       num = parseInt(num / 10);
    } while (num > 0);

    if (original === reversed) {
        console.log(original + " is a Palindrome");
    } else {
        console.log(original + " is NOT a Palindrome");
    }
}
palindrome(121);   // Palindrome
palindrome(123);   // Not Palindrome

// leep year using function 

function Leap(year) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        return true;
    } else {
        return false;
    }
}
let year = 2024;
if (Leap(year)) {
    console.log(year + " is a Leap Year");
} else {
    console.log(year + " is NOT a Leap Year");
}

