"use strict"
// task 1

let admin,name;
name = "John";
admin = name;
console.log(admin);

// task 2

let login, password;
login = "admin";
password = "TheMaster";
if(login == "admin") {
    if (password == "TheMaster") {
        console.log("Welcome!")
    } else {
        console.log("wrong password");
    }
} else {
    console.log("I don`t now you");
}

// task 3

password = "password";

switch (login) {
    case "admin" : 
    switch (password) {
        case "TheMaster" : console.log("Welcome!");
        break;
        default : console.log("Wrong password!");
        break
    }
    break;
    default : console.log("I don`t now you");
}
