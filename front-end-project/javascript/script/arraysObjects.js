/*
    Array

    Array can group some files becoming one variable. Instead of using many variables just make an array that is containing some values. You can access it with index number starting from 0. You can access the array like this console.log(thisArray[indexNumber])
*/

let thisArray = ["Mobil", 1000, "Bugatti"];
console.log(thisArray);
console.log(thisArray[1]);
// The output will be 1000 based on the array value
// You can define the length of the array using .length()

console.log(thisArray.length)

/*
    Object

    Beside array, you can group some values with object. This will be collecting your values with key-value rules. You can access the key to output the value.

*/

console.log("OBJECT");

let user = {
    username: "dream",
    age: 17,
    socmed: ["instagram", "facebook", "twitter"]
}

console.log("Username: " + user.username + "\n" + "Age: " + user.age + "\n" + "Social Media: " + user.socmed);

console.log("OBJECT INSIDE OBJECT");

let user_second = {
    profile: {
        username: "dream",
        age: 18,
    },
    socmed: ["instagram", "facebook", "twitter"]
}

console.log("Username: " + user_second.profile.username + "\n" + "Age: " + user_second.profile.age + "\n" + "Social Media: " + user.socmed);