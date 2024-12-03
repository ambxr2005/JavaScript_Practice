// Loops in JS:
// 1. For Loop
console.log("For loop:");
for (let i = 1; i <= 5; i++) {
    console.log("Apna College!");
}

// 2. While Loop
console.log("While loop:");
let i = 1;
while (i <= 5) {
    console.log("Apna College");
    i++;
}

// 3. Do-While Loop
console.log("Do-While loop:");
let j = 1;
do {
    console.log("Apna College");
    j++;
} while (j <= 5);

// For-of Loop
let str = "JavaScript";
let size = 0;
for (let i of str) {
    console.log("i =", i);
    size++;
}
console.log("Size of str =", size);

// For-in Loop: It is used for object variables.
const profile = {
    username : "shradhakhapra",
    posts : 195,
    followers : 569000,
    following : 4,
    isFollowed : false
};

for (let key in profile) {
    console.log("Key =", key, "=", profile[key]);
}

// Strings in JS:
let str1 = "Aman Kumar";
console.log(str1);
console.log("Length of string =", str1.length);
console.log("Third character in string is:", str1[2]);

// Template Literals in JS:
let obj = {
    item : "WinX 10",
    price : 10
}

console.log("The cost of", obj.item, "is", obj.price, "Rupee.");    // Normal expression
console.log(`The cost of ${obj.item} is ${obj.price} Rupee.`);  // Using Template literals

// String Methods in JS:
let str2 = "My name is ";
let fullName = "    Aman Kumar.    ";
fullName = fullName.trim()  // Remove leading and trailing spaces
console.log(fullName.toUpperCase());    // Converts string to uppercase
console.log(fullName.toLowerCase());    // Converts string to lowercase
console.log(fullName.slice(0, 4));  // Returns part of string
console.log(str2.concat(fullName)); // joins two strings.
fullName = fullName.replace("A", "Na");
console.log(fullName);