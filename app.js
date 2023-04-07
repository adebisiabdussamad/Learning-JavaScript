//VARIABLES
let greetingText = 'Hi my name is Bisi!';
let age = 32;
//alert(greetingText);
greetingText = 'Yoo, Whats up!!';
//alert(greetingText);
//alert(age);

//arrays
let hobbies = ['Sports', 'Cooking', 'Reading'];

//objects
let job = {
  title: 'Developer',
  places: 'Abuja',
  salary: 50000
};

//Accessing the Arrays
//alert(hobbies[0]);
//alert(hobbies[1]);
//alert(hobbies[2]);

//Accessing the Objects
//alert(job.title);

//functions
let totalAdultYears;

function calculateAdultYears(userAge) {
  return userAge - 18;
}

//performing Operations
totalAdultYears = calculateAdultYears(age);
alert(totalAdultYears);

age = 45;
totalAdultYears = calculateAdultYears(age);

alert(totalAdultYears);

