"use strict";

let userName = "";
let score = 0;

//These questions are taken from ChatGPT
const questions = [
  "Are dogs capable of recognizing themselves in a mirror?",
  "Can dogs understand human emotions?",
  "Do dogs have a sense of time?",
  "Can dogs see color?",
  "Are dogs capable of feeling empathy for other animals?",
];

const answers = [];

//These answers are taken from ChatGPT
const correctAnswers = ["no", "yes", "no", "yes", "yes"];

//These explanations are taken from ChatGPT
const explanations = [
  "Dogs typically do not recognize themselves in a mirror. They may react to their reflection as if it's another dog or show curiosity, but they generally do not understand that it is their own image.",
  "Dogs have the ability to sense and understand human emotions. They are known to be highly perceptive and can often pick up on cues such as body language, tone of voice, and facial expressions to gauge their owner's emotional state.",
  "Dogs do not have a precise sense of time like humans do. While they may have an internal sense of routine and be able to anticipate certain events, their perception of time is primarily based on associative memory rather than a linear understanding of hours or minutes.",
  "Dogs can see colors, but their range of color vision is more limited compared to humans. They primarily see the world in shades of blue and yellow, with difficulty distinguishing between red and green hues.",
  "Dogs are capable of feeling empathy for other animals, including humans and other dogs. They can show concern, comfort, and exhibit behaviors that indicate empathy towards those in distress or pain. However, the extent of empathy may vary among individual dogs.",
];

function initialQuestions() {
  // First, we display message telling the user about the 5 questions
  userName = prompt("What is your name?");
  alert(
    'Please answer the following FIVE questions by answering\n"Yes" or "No"'
  );
  // Below iterates the questions using a for loop using the length of the string as the condition
  for (let i = 0; i < questions.length; i++) {
    //Below adds the the user's answer to the answers array
    answers.push(prompt(questions[i]));
    let j = i + 1;
    console.log(
      "The user answered " +
        answers[i] +
        " for Question #" +
        j +
        ". The answer is " +
        correctAnswers[i]
    );
    //Below checks the user's answer with the correct answer, outputs either correct or wrong, then explains why using the explanations array
    if (answers[i].toLowerCase() === correctAnswers[i]) {
      alert(
        "Correct!\n\nThe answer is " +
          correctAnswers[i] +
          "\n\nSee below for explanation\n" +
          explanations[i]
      );
      score = score + 1;
      console.log("Current score is " + score); //prints the current score
    } else {
      alert(
        "Wrong\n\nThe correct answer is " +
          correctAnswers[i] +
          "\n\nSee below for explanation\n" +
          explanations[i]
      );
    }
  }
  alert(
    "Thank you for playing " +
      userName +
      "!\n\nNow lets try a number guessing game!"
  );
}

//This invokes/calls the initialQuestions function
// initialQuestions();

const number = 3;
let tries = 4;

//The function below asks the user to guess a number from 1 thru 10. They have up to 4 tries to guess the number.
function guessTheNumber() {
  for (let i = 0; i < 4; i++) {
    let userNumber = parseInt(
      prompt("Guess the number!\n\nPick a number from 1 thru 10.")
    );
    if (userNumber === number) {
      alert("You guessed the number correctly!");
      score++; //adds a score if user guesses the number correctly
      break; //stops the for loop when answered correctly.
    } else if (userNumber > number) {
      tries -= 1;
      alert(
        "You guessed " +
          userNumber +
          ". It is too high!\n\nTry again!\n\nRemaining guesses = " +
          tries
      );
    } else {
      tries -= 1;
      alert(
        "You guessed " +
          userNumber +
          ". It is too low!\n\nTry again!\n\nRemaining guesses = " +
          tries
      );
    }
  }
  alert("Thank you for playing the guess the number game!");
  console.log("Current score is " + score); //prints the current score
}

//This invokes/calls the function guessTheNumber
// guessTheNumber();


