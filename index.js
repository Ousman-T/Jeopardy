// defining main variables for the game
const game = document.getElementById("game");
const score1 = document.getElementById("score-track");
const score2 = document.getElementById("2nd-score-track");
let reset = document.getElementById("reset");
// function to reset the buttons using the window scope
reset.onclick = function () { resetBoard() };
function resetBoard() {
  let reset = window.location.reload()
}
// creating teams by adding boolean variable to players 
let isPlayer1 = true;
let isPlayer2 = false;
let p1Score = 0;
let p2Score = 0;
const playerSpan = document.getElementById('player')
// tenary statement to span score to HTML
playerSpan.innerText = isPlayer1 ? "player1" : "player2"
// logic for a function to switch between players
function teamSwitch() {
  if (isPlayer1 == true) {
    isPlayer1 = false;
    isPlayer2 = true;
  } else {
    isPlayer1 = true;
    isPlayer2 = false;
  }
  playerSpan.innerText = isPlayer1 ? "player1" : "player2"

}
// large array storing all questions genres and answers
const jeopardyCats = [
  {
    genre: "History",
    questionsArr: [
      {
        // index id stored in every object for looping through
        id: 0,
        question: "Where was Ghengis Khan Born",
        answers: ["Khazakstan", "Mongolia"],
        correct: "Mongolia",
        level: "Beginner",
        score: 100
      },
      {
        id: 1,
        question: "How old was Alexander the Great when he passed?",
        answers: ["28", "32"],
        correct: "32",
        level: "Intermediate",
        score: 200
      },
      {
        id: 2,
        question:
          "What was the name of Mao Zedong's plan to industrialize China?",
        answers: ["Great Leap Forward", "China Rising"],
        correct: "Great Leap Forward",
        level: "Advance",
        score: 300
      },
    ],
  },
  {
    genre: "Programming",
    questionsArr: [
      {
        id: 3,
        question: "Which is safer innerText or innerHTML?",
        answers: ["innerHTML", "innerText"],
        correct: "innerText",
        level: "Beginner",
        score: 100
      },
      {
        id: 4,
        question:
          "What is the name of the person who invented the language JavaScript?",
        answers: ['Brendan Eich', 'John Carmack'],
        correct: "Brendan Eich",
        level: "Intermediate",
        score: 200
      },
      {
        id: 5,
        question: "When was GitHub founded?",
        answers: ["2008", "2012"],
        correct: "2008",
        level: "Advance",
        score: 300
      },
    ],
  },
  {
    genre: "Culture",
    questionsArr: [
      {
        id: 6,
        question: "In what city was Michael Jackson born?",
        answers: ["Detroit, Michigan", "Gary, Indiana"],
        correct: "Gary, Indiana",
        level: "Beginner",
        score: 100
      },
      {
        id: 7,
        question: "What year was 1984 published by George Orwell?",
        answers: ["1984", "1949"],
        correct: "1949",
        level: "Intermediate",
        score: 200
      },
      {
        id: 8,
        question: "Who is on the Twenty Dollar Bill?",
        answers: ["Benjamin Franklin", "Andrew Jackson"],
        correct: "Andrew Jackson",
        level: "Advance",
        score: 300
      },
    ],
  },
  {
    genre: "Science",
    questionsArr: [
      {
        id: 9,
        question: "Name at least one main layer of the atmosphere.",
        answers: ["Troposphere", "Nexosphere",],
        correct: "Troposphere",
        level: "Beginner",
        score: 100
      },
      {
        id: 10,
        question: "How many elements are in the periodic table?",
        answers: ["134", "118"],
        correct: "118",
        level: "Intermediate",
        score: 200
      },
      {
        id: 11,
        question: "How old is Earth? (According to 'science')",
        answers: ['11.7 billion years', '4.5 billion years'],
        correct: "4.5 billion years",
        level: "Advance",
        score: 300
      },
    ],
  },
];
// function to loop through questions and return based on matching ids
function getQuestion(id) {
  for (let i = 0; i < jeopardyCats.length; i++) {
    console.log(jeopardyCats[i].questionsArr);
    for (let j = 0; j < jeopardyCats[i].questionsArr.length; j++) {
      if (jeopardyCats[i].questionsArr[j].id == id)
        return jeopardyCats[i].questionsArr[j];
    }
  }
}
// function to loop through the jeopardy category
function addCategory(category) {
  // created a new div and named it column to store the columns
  const column = document.createElement("div");
  // adding a class to the  column variable
  column.classList.add("genre-column");
  // creating a variable to store the titles of each genre
  const genreTitle = document.createElement("div");
  // added a class to the title variable
  genreTitle.classList.add("genre-title");
  // Setting the inner text to the genre variable
  genreTitle.innerText = category.genre;
  // adding columns and genres to the original html
  column.appendChild(genreTitle);
  game.append(column);
  // creating card faces, card backs, columns, questions, and appending
  category.questionsArr.forEach((question, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const p1 = document.createElement('p');
    p1.classList.add('front');
    const p2 = document.createElement('p');
    p2.classList.add('back');
    const textDiv = document.createElement('div')
    textDiv.textContent = question.question;
    p2.appendChild(textDiv)
    // adding buttons
    const div = document.createElement('div')
    p2.appendChild(div)
    let correct = category.questionsArr[index].correct
    let score = category.questionsArr[index].score
    card.setAttribute("data-id", question.id);
    // assigning numbers to back of cards
    p1.innerText = score
    card.appendChild(p1);
    card.appendChild(p2);
    column.append(card);
  });
}
console.log(jeopardyCats);
// appending questions to the back of card
jeopardyCats.forEach((category) => addCategory(category));
console.log(jeopardyCats);
// creating flips
const flipping = document.querySelectorAll(".card");
function flipCard(event) {
  // added a classlist to the item
  this.classList.toggle("flip");
  // recieving id of the data attributes
  let id = event.target.getAttribute("data-id");
  console.log(id);
  // getting question from question array calling the get question function created
  let question = getQuestion(id);
  console.log(question);
  console.log(event.target);
  // setting values based off the current question
  document.getElementById('answer-text-button').setAttribute('data-id', id)
  document.getElementById('answer-text-button').setAttribute('data-card', event.target)
}
// array for id's of question that has ALREADY been answered
let answeredQuestions = [];
// function to loop through questions and check if id is in answered question array
function checkIfAnswered(id) {
  for (let i = 0; i < answeredQuestions.length; i++) {
    if (id == answeredQuestions[i])
      return true;
  }
  return false;
}
// function used to prompt user to answer question 
function answerQuestion(id) {
  // logic to check if the question has been answered already (by checking if it was passed into the array storing all answered questions)
  if (checkIfAnswered(id) == true) {
    alert('Answered Question Already')
    return;
  }
  // storing user's answer into a variable
  let answer = document.getElementById('answer-text').value
  console.log(answer);
  // getting the question and storing into variable
  let question = getQuestion(id);
  // getting correct answer from the answer object and storing into variable
  let correctAnswer = question.correct
  // checking if user's answer equals the correct answer
  if (answer == correctAnswer) {
    if (isPlayer1 == true) {
      // incrementing score up based off if it was answered by player1 or player2
      p1Score += question.score;
      console.log(p1Score);
      score1.innerText = p1Score
    } else {
      p2Score += question.score;
      score2.innerText = p2Score
    }
    // appending the id to the answered question array
    answeredQuestions.push(id)
    // calling a function to disable cards after answer
    // callling the win state to see if player hit the score cap
    winState();
  }
  // calling a function to switch between players
  teamSwitch();
}
// function used to determine if the player has reached score cap
function winState() {
  if (p1Score >= 1200) {
    alert('Player 1 Wins!!')
  } else if (p2Score >= 1200) {
    alert('Player 2 Wins!!')
  }
}
console.log(flipping);
// adding onclick event to all cards and using flipCard function on it
flipping.forEach((card) => card.addEventListener("click", flipCard));
