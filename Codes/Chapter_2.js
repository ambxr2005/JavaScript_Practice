// This is a single line comment.

/*
This is a multi-line comment.
*/

console.log("Hello Prashant!");

let a = 5;
let b = 10;

console.log("a =", a, "& b =", b);

// Operators:
// 1. Arithmetic Operators:
//   - Addition: +
console.log("a + b =", a + b);
//   - Subtraction: -
console.log("a - b =", a - b);
//   - Multiplication: *
console.log("a * b =", a * b);
//   - Division: /
console.log("b / a =", b / a);
//   - Modulus: %
console.log("b % a =", b % a);
//   - Exponentiation: **
console.log("b ** a =", b ** a);
//   - Increment: ++
console.log("++a =", ++a);  //  Pre-Increment
console.log("a++ =", a++);  //  Post-Increment
//   - Decrement: --
console.log("++b =", --b);  //  Pre-Decrement
console.log("b++ =", b--);  //  Post-Decrement

// 2. Assignment Operators:
// =
let c = 32;
// +=
c += 5;
console.log("c =", c);
// -=
a -= 2;
console.log("a =", a);
// *=
b *= 2;
console.log("b =", b);
// /=
c /= 2;
console.log("c =", c);
// %=
c %= 3;
console.log("c =", c);
// **=
b **= 2;
console.log("b =", b);

// 3. Comparison Operators:
//   - Equal to: ==
console.log("a == b =", a == b);
//   - Equal to & type: ===
console.log("a === b =", a === b);
//   - Not equal to: !=
console.log("a != b =", a != b);
//   - Not equal to & type: !==
console.log("a !== b =", a !== b);
//   - Greater than: >
console.log("a > b =", a > b);
//   - Less than: <
console.log("a < b =", a < b);
//   - Greater than or equal to: >=
console.log("a >= b =", a >= b);
//   - Less than or equal to: <=
console.log("a <= b =", a <= b);

// 4. Logical Operators:
//   - AND: &&
console.log("a && b =", a && b);
//   - OR: ||
console.log("a || b =", a || b);
//   - NOT: !
let isFalse = false;
console.log("!isFalse =", !isFalse);

// Conditional Statements:
//   - If statement
if (a > b) {
    console.log("a is greater than b");
}
//   - If-else statement
let mode = "light-mode";
let color;
if (mode === "light-mode") {
    color = "white";
} else {
    color = "black";
}
console.log("color =", color);

//   - else-if statement
let age = 32;
if (age < 18) {
    console.log("Junior");
} else if (age > 60) {
    console.log("Senior");
} else {
    console.log("Middle");
}
//   - switch statement
let day = "Today";
switch (day) {
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    case "Saturday":
        console.log("Today is Saturday");
        break;
    case "Sunday":
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid day");
}

// Ternary Operators
let result = age > 18 ? "Adult" : "Not adult";
console.log(result);