function makeAlbum(artisName: string , albumTitle: string){
    return {artisName, albumTitle}
}

let album1 = makeAlbum("ali", "Rang-e-mohabat");
let album2 = makeAlbum("Madad", "roshan andhera");
let album3 = makeAlbum("Ayaz", "Mausam-e-Dil");

console.log(album1);
console.log(album2);
console.log(album3);


function makeAlbum2(artisName: string , albumTitle: string, numberOfTracks?: number){
    return {artisName, albumTitle, numberOfTracks}
}

let album4 = makeAlbum2("ali", "Dil hai", 30);
let album5 = makeAlbum2("Madad", "Ajeeb Kahani", 55);
let album6 = makeAlbum2("babar", "Typescript ki coding", 70);

console.log(album4);
console.log(album5);
console.log(album6);
