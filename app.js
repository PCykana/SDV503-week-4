// const firstName = 'Peter';
// const lastName = 'Cykana';
// camelcase naming
// const classCode = 'SDV503'

//Invalid vars
// first-name
// 1_num
// num_#_1

// Declaring different variables of different data types

let firstName = 'Peter';
let lastName = 'Cykana';
let country = "United States";
let age;
let isStudent = true;

console.log(firstName, lastName, country, age,
     isStudent
);

// declaring variable with number values

const gravity = 9.81;
const boilingPoint = 100;
const PI = 3.14;
console.log(gravity, boilingPoint, PI);

// Variable can also be declared in one line separated by comma

let name = 'Peter', job = "Student and kiosk monkey", live = 'stoke';
console.log(name, job, live);

/**
 * Exercise - 1 : Variables
 *  1- declare four variables withouth asigning values
 * 
 *  let littleFoot, petri, ducky, spike;
 * 
 *  2 declare four variables with assigning values
 * 
 *  let scientest = "Egon", occultist = 'Ray', quack = 'Peter', everyman = 'Winston';
 * 
 *  3 a. delcare variable to store first name, last name, student status, country, and age in multiple lines
 * 
 * let nameFirst = "first name";
 * let nameLast = "last name";
 * let studentStatus = true;
 * let actualAge = 41
 * 
 * 3 b. delcare variable to store first name, last name, student status, country, and age in a single line
 * 
 *  let givenName = "Peter", surname = 'Cykana', currentCountry = 'New Zealand', toManyAgeVariables = '42'
 * 
 * 4 declare two variables myAge and yourAge and assign them initial valuse and log to browser console
 * let myAge = 25, yourAge = 30'
 * 
 * console.log('I am ', myAge,' years old');
 * console.log('You are ', yourAge, ' years old');
 * 
 * I am  25  years old
 * You are  30  years old
 * 
 */
let littleFoot, petri, ducky, spike;
let scientest = "Egon", occultist = 'Ray', quack = 'Peter', everyman = 'Winston';
let nameFirst = "first name";
let nameLast = "last name";
let studentStatus = true;
let actualAge = 41;
let givenName = "Peter", surname = 'Cykana', currentCountry = 'New Zealand', toManyAgeVariables = '42';
let myAge = 25, yourAge = 30;
console.log('I am ', myAge,' years old');
console.log('You are ', yourAge, ' years old');

// TODO
/*
 Data types
 
 1- Primitive data types
 2- non-primitive data types (Object References)


 //SECTION - Primitive Data Types
Primitive data types are immutable data types.
 1- numbers
        integers - 7
        floats - 7.1
 2- Strings - essentialy text, any data under single or double quotes is considered a string
 3- Booleans (true or false)
 4- Null -empty value or no value
 5- Undefined - a declared variable withouth an assigned value

 //SECTION - Object References (non-primitive data types)
 object references are mutable data types.
 1- Objects
 2- Functions
 3- Arrays - let nums = [1,2,3]
 console.log(nums)
 nums[2] = 10
 console.log(nums) 
 */
 let nums = [1,2,3];
 console.log(nums);
 nums[2] = 10;
 console.log(nums); 