// Import the 'cities' package, which provides functions to look up city data based on ZIP codes.
const cities = require("cities");

// Use the 'zip_lookup' function from the 'cities' package to get city details for the ZIP code 10016.
var myCity = cities.zip_lookup("38047");

// Output the details of the city to the console.
console.log(myCity);