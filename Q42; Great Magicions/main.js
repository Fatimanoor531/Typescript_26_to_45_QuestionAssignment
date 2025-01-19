"use strict";
// let magicians: string[] = ["brad", "Rmeez", "ainak wala jin"];
// function make_great(magicians: string[]){
//     for(let i = 0; 1 < magicians.length; i++){
//         magicians[i] = magicians[i] + "the Great";
//     }
// }
// make_great(magicians);
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
let magician_names = ["Brad", "Harry Poter", "ainak wala jin"];
let great_magicians = make_great(magician_names);
show_magicians(great_magicians);
