"use strict";
function createCar(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
const mycar = createCar("toyoto", "corolla", { "color": "black", year: "2024" });
console.log(mycar);
