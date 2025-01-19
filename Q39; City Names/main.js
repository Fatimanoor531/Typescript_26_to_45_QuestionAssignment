"use strict";
function city_country(city, country) {
    return `"${city}, ${country}"`;
    console.log(`"${city}, ${country}"`);
}
city_country("karachi", "Pakistan");
let myCities = city_country("karachi", "Pakistan");
console.log(myCities);
console.log(city_country("Dubai", "UAE"));
console.log(city_country("London", "United kingdom"));
console.log(city_country("Riyaz", "Saudi Aarbia"));
