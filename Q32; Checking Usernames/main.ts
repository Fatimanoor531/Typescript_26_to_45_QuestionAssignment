let current_users:string [] = ["jahan", "admin","faris", "umer", "salar","yaram"];
let new_users:string[] = ["sadi", "hashim", "adam", "admin", "zaamin shah"];

new_users.forEach((newUser) => {
    if(
    current_users.some(
    (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
    )

){
    console.log (`${newUser} will need to enter a new username.`);
}else{
    console.log (`${newUser}is available`);
}
});