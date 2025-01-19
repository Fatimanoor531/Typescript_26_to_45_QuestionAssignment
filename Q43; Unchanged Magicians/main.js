"use strict";
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
let magician_names = ["Brad", "Harry Poter", "ainak wala jin"];
let copy_magicians_names = magician_names.slice();
let copy_great_magicians = make_great(copy_magicians_names);
console.log("orginal Array\n");
show_magicians(magician_names);
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);
