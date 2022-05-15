"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 12] = "ADMIN";
    Role[Role["USER"] = 13] = "USER";
    Role[Role["AUTHOR"] = 14] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    //     name: string;
    //     age: number;
    // } = {
    name: "Edwin",
    age: 32,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
};
const ADMIN = "ADMIN";
const USER = "USER";
let favoriteActivities;
favoriteActivities = ["hello"];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby);
}
if (person.role === Role.ADMIN)
    console.log("Is Admin");
