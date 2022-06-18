const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]


// Exercise: Level 1

// Declare an empty array;
let arr = [];
// Declare an array with more than 5 number of elements
let arrMoreThan5 = [10];
// Find the length of your array
console.log(arrMoreThan5.length);

// Get the first item, the middle item and the last item of the array
let firstItem = countries[0];
let lastItem = countries[countries.length-1];
let midItem = countries[Math.floor(countries.length/2)];

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] },
  ];

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// Print the array using console.log()
// Print the number of companies in the array
// Print the first company, middle and last company
// Print out each company
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies); 
console.log(itCompanies.length);
console.log(Math.floor(itCompanies.length/2));
console.log(itCompanies[itCompanies.length-1]);
console.log(itCompanies.join(","));

// Change each company name to uppercase one by one and print them out
itCompanies.forEach((country, i, arr) => {
  arr[i] = country.toUpperCase();
  console.log(country.toUpperCase());
});

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
itCompanies.pop();
console.log(itCompanies.join(",") + " and " + itCompanies[itCompanies.length-1] + " are big IT companies");

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let check = itCompanies.indexOf("Microsoft");
console.log(check != -1 ? "Microsoft" : "not found");

// Filter out companies which have more than one 'o' without the filter method
itCompanies.forEach((company) => {
  if(company.split('o').length > 1 ? console.log(country) : null);
});

// Sort the array using sort() method
console.log(itCompanies.sort());

// Reverse the array using reverse() method
console.log(itCompanies.reverse());

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,2));

// Slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompanies.length-3,itCompanies.length));

// Slice out the middle IT company or companies from the array
let startIndex = Math.floor(itCompanies.length/2);
console.log(itCompanies.slice(startIndex, ++startIndex));

// Remove the first IT company from the array
console.log(itCompanies.shift());

// Remove the middle IT company or companies from the array
// Remove the last IT company from the array
// I got that point ;-)

// Remove all IT companies
console.log(itCompanies.splice(0,itCompanies.length));

console.log('lvl1.js loaded');