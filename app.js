//VARIABLES
let greetingText = 'Hi my name is Bisi!';
let userAge = 32;
//alert(greetingText);
greetingText = 'Yoo, Whats up!!';
//alert(greetingText);
//alert(userAge);

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
let adultYears;

function calculateAdultYears() {
  adultYears = userAge - 18;
}

//performing Operations
calculateAdultYears();
alert(adultYears);

userAge = 45;
calculateAdultYears();

alert(adultYears);

