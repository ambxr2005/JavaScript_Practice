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

// Q4.  Print all even numbers from 0 to 100.
for (let num = 0; num <= 100; num++) {
    if (num % 2 === 0) {
        console.log(num);
    }
}

// Q5.  Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.
let gameNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;
while (true) {
    let guess = parseInt(prompt("Guess the game number:"));
    guessCount++;
    if (guess === gameNumber) {
        alert(`Congratulations! You guessed the number in ${guessCount} attempts.`);
        break;
    } else if (guess < gameNumber) {
        alert("Too low! Try again.");
    } else
        alert("Too high! Try again.");
}

// Q6. Prompt the user to enter their full name. Generate a username for the based on the input. Start username with @, followed by their full name and ending with the fullname length.

let fullName = prompt("Enter your full name without spaces:");
alert(`@${fullName}${fullName.length}`);