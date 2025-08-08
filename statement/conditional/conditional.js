
// for 4 Number 
let a = 25;
let b = 12;
let c = 78;
let d = 56;

let greatest;

if (a > b) {
    if (a > c) {
        if (a > d) {
            greatest = a;
        } else {
            greatest = d;
        }
    } else {
        if (c > d) {
            greatest = c;
        } else {
            greatest = d;
        }
    }
} else {
    if (b > c) {
        if (b > d) {
            greatest = b;
        } else {
            greatest = d;
        }
    } else {
        if (c > d) {
            greatest = c;
        } else {
            greatest = d;
        }
    }
}

console.log("Greatest number is " + greatest);

// for 5 Number
let num1 = 12;
let num2 = 45;
let num3 = 23;
let num4 = 67;
let num5 = 34;

let maxNum;

if (num1 > num2) {
    if (num1 > num3) {
        if (num1 > num4) {
            if (num1 > num5) {
                maxNum = num1;
            } else {
                maxNum = num5;
            }
        } else {
            if (num4 > num5) {
                maxNum = num4;
            } else {
                maxNum = num5;
            }
        }
    } else {
        if (num3 > num4) {
            if (num3 > num5) {
                maxNum = num3;
            } else {
                maxNum = num5;
            }
        } else {
            if (num4 > num5) {
                maxNum = num4;
            } else {
                maxNum = num5;
            }
        }
    }
} else {
    if (num2 > num3) {
        if (num2 > num4) {
            if (num2 > num5) {
                maxNum = num2;
            } else {
                maxNum = num5;
            }
        } else {
            if (num4 > num5) {
                maxNum = num4;
            } else {
                maxNum = num5;
            }
        }
    } else {
        if (num3 > num4) {
            if (num3 > num5) {
                maxNum = num3;
            } else {
                maxNum = num5;
            }
        } else {
            if (num4 > num5) {
                maxNum = num4;
            } else {
                maxNum = num5;
            }
        }
    }
}

console.log("Greatest number is " + maxNum);


// for positive and nagative 

let num = parseFloat(prompt("Enter a number:"));

if (num > 0) {
    console.log(num + " is Positive");
} else if (num < 0) {
    console.log(num + " is Negative");
} else {
    console.log("The number is Zero");
}

// for odd and even

if (Number.isInteger(num)) {
    if (num % 2 === 0) {
        console.log(num + " is Even");
    } else {
        console.log(num + " is Odd");
    }
} else {
    console.log(num + " is not an integer, so it can't be classified as Even or Odd.");
}