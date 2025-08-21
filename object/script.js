let student = {
  id: 101,
  name: "Sakshi",
  course: "Computer Science",
  year: 4,
  hobbies: ["Dancing", "Singing", "Reading"],
  address: {
    city: "Nagpur",
    state: "Maharashtra"
  },
  details: function() {
    return `${this.name} is studying ${this.course}`;
  }
};

console.log(student.name);         
console.log(student.hobbies[1]);   
console.log(student.address.city); 
console.log(student.details()); 
