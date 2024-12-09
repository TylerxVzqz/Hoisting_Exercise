/* Task 1: Declare a Destination Variable */
// TODO: Use `let` to declare a variable named `destination` and assign it the value `"Ancient Egypt"`. Print the destination to the console.
let destination = "Ancient Egypt";
console.log(destination);

/* Task 2: Change the Destination */
// TODO: Now, change the `destination` variable to `"Medieval Europe"`. Print the new destination to the console.
destination = "Medieval Europe";
console.log(destination);
/* Task 3: Declare a Constant Travel Date */
// TODO: Use `const` to declare a variable named `travelDate` and set it to `"2024-03-15"`. Try to change the `travelDate` to another value and observe and explain what happens as a comment.
/*
 * Observations:
 * TODO: Explain here.
 */
const travelDate = "2024-03-15";
travelDate = "2024-12-8";
//The Travel date cannot be changed as it was assigned to a constant variable.

/* Task 4: Experiment with Variable Hoisting */
// TODO: Before declaring any variable, try to print a variable named `timeMachineModel` to the console. Then, declare `timeMachineModel` using `var` and assign it the value `"T-800"`. Observe and explain what happens as a comment.
/*
 * Observations:
 * TODO: Explain here.
 */
console.log(timeMachineModel); //Trying to print a variable named 'timeMachineModel' to the console before declaring it results in an error as the variable has yet to be defined.
var timeMachineModel; //The console now prints out 'undefined' due to variable hoisiting the variable declaration is lifted up to its scope.
timeMachineModel = "T-800"; //The assignment of 'timeMachineModel' is made after the console.log statement resulting in the log still showing undefined.
