function describe_city(nameOfCity: string , country : string = "pakistan"){
    return `${nameOfCity} is in ${country}`;
};

let city1 = describe_city("Karachi", "pakistan");
let city2 = describe_city("dehli", "india");
let city3 = describe_city("Istanbol", "turkey");
let city4 = describe_city("UAE", "Dubai");

console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);