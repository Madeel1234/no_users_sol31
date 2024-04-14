#! /usr/bin/env node
// Task # 31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// If the list is empty, print the message we need to find some users!
// Remove all of the users names from your array, and make sure the correct message is printed.
let users = ["Admin", "Eric", "Aiza", "Fatima", "Ali"];
users = [];
if (users.length === 0) {
    console.log("we need to find some users!");
}
export {};
