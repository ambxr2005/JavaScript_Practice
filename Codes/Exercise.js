// Q1.  Create an alert message.
alert("Welcome to the Exercise Portal!");

// Q2.  Get user to input a number using prompt("Enter a number:"). Check if the number is a multiple of 5 or not.
let num = parseInt(prompt("Enter a number:"));
if (num % 5 === 0) {
    alert("The number is a multiple of 5.");
} else {
    alert("The number is not a multiple of 5.");
}

/* Q3. Write a code which can give grades to students according to their scores:
- A: 90-100
- B: 80-89
- C: 70-79
- D: 60-69
- F: below 60
*/
let score = parseInt(prompt("Enter your score:"));
if (score <= 100 && score >= 90) {
    alert("Grade: A");
} else if (score >= 80) {
    alert("Grade: B");
} else if (score >= 70) {
    alert("Grade: C");
} else if (score >= 60) {
    alert("Grade: D");
} else {
    alert("Grade: F");
}