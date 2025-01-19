"use strict";
let users = ["saadi", "noor", "haadi", "umer", "admin"];
for (let user of users) {
    if (user === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`hello ${user},Thank you for logging in again.`);
    }
}
