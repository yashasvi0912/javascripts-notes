// example with setTimeout
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let dataFound = true;

            if (dataFound) {
                resolve(" Data fetched successfully!");
            } else {
                reject(" Data not found.");
            }
        }, 2000); 
    });
}

fetchData()
    .then(data => console.log(data))
    .catch(err => console.log(err))
    .finally(() => console.log("Fetching complete!"));

    // example with setinterval

    setInterval(() => {
    console.log("This runs every 1 second");
}, 1000); 

// using promise example

// Promise create
let myPromise = new Promise((resolve, reject) => {
    let success = true; 
    
    if (success) {
        resolve("Promise fulfilled! Data received.");
    } else {
        reject(" Promise rejected! Something went wrong.");
    }
});

// Promise use
myPromise
    .then(result => {
        // agar resolve hua to ye chalega
        console.log(result);  
    })
    .catch(error => {
         // agar reject hua to ye chalega
        console.log(error);  
    })
    .finally(() => {
        console.log("Promise execution finished.");
    });

