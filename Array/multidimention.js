//2D Array Example

let marks = [
  [85, 90, 78],  
  [88, 76, 92],  
  [90, 85, 88]   
];


console.log("Student 1 - Math Marks:", marks[0][0]);
console.log("Student 2 - Science Marks:", marks[1][2]); 
console.log("Student 3 - English Marks:", marks[2][1]); 


//Traversing a 2D Array Row × Column

let arr = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(`arr[${i}][${j}] = ${arr[i][j]}`);
  }
}

