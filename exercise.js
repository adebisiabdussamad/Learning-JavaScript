// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

// 1) Create three new variables:

//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course

// let onlineCourseName = '100 Days Of Code - 2023 Web Development Bootcamp';
// let onlineCoursePrice = '$400';
// let onlineCourseMainGoals = [
//   'Learn Web Development', ' Enjoy the course', ' Becoming a better Web developer'
// ];

// 2) Output ("alert") the three variable values

// alert(onlineCourseName);
// alert(onlineCoursePrice);
// alert(onlineCourseMainGoals);

// 3) Try "grouping" the three variables together and still output their values thereafter

let onlineCourse = {
  name: '100 Days Of Code - 2023 Web Development Bootcamp',
  price: '$400',
  mainGoals: [
    'Learn Web Development', ' Enjoy the course', ' Becoming a better Web developer']
};

// alert(onlineCourse.name);
// alert(onlineCourse.price);
// alert(onlineCourse.mainGoals);

// 4) Also output the second element in your "main goals" variable

// alert(onlineCourse.mainGoals[1]);

// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)

function getMainGoals(array, arrayIndex) {
  let arrayElement = array[arrayIndex];
  return arrayElement;

}
// 6) Execute your custom command from (5) and output ("alert") the result

let thirdGoal = getMainGoals(onlineCourse.mainGoals, 2);
alert(thirdGoal);

let firstGoal = getMainGoals(onlineCourse.mainGoals, 0);
alert(firstGoal);