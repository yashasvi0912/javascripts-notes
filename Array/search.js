//there are tow types 1] linear , 2] binary
// linear search algoritham 

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;  
    }
  }
  return -1; 
}

let num = [10, 25, 30, 45, 50];
let find = 25;

let search = linearSearch(num, find);
if (search !== -1) {
  console.log(`Element found at index ${search}`);
} else {
  console.log("Element not found");
}

// binary search algoritham 

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = parseInt((low + high) / 2);

    if (arr[mid] === target) {
      return mid;

    } else if (arr[mid] < target) {
      low = mid + 1; // search right half
    } else {
      high = mid - 1; // search left half
    }
  }

  return -1; 
}

let arr = [10, 20, 30, 40, 50, 60];
let target = 40;

let result = binarySearch(arr, target);
if (result !== -1) {
  console.log(`Element found at index ${result}`);
} else {
  console.log("Element not found");
}
