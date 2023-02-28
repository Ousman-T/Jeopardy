const game = document.getElementById('game');
const score = document.getElementById('score');
const player1 = document.getElementById('score-track');
const player2 = document.getElementById('2nd-score-track');

// large array storing all questions genres and answers
const jeopardyCats = [
    {
        genre: "History",
        questions: [
            {
                question: "Where was Ghengis Khan Born",
                // answer: document.createElement('form')
                answers:['Khazakstan', 'Mongolia'],
                correct: 'Mongolia'
            },
            {
                question:"How old was Alexander the Great when he passed?",
                // answer: document.createElement('form')
                answers:['48', '32'],
                correct:'32'
            },
            {
                question:"What was the name of Mao Zedong's plan to industrialize China?",
                // answer: document.createElement('form')
                answers:['China Rising', 'Great Leap Forward'],
                correct:'Great Leap Forward'
            }
        ]
    },
    {
        genre:"Programming",
        questions: [
            {
                question: "What is the name of the person who invented the language JavaScript?",
                // answer: document.createElement('form')
                answers:['Dennis Ritchie', 'Brendan Eich'],
                correct: 'Brendan Eich'
            },
            {
                question: "Which is safer between innerText and innerHTML?",
                // answer: document.createElement('form')
                answers:['innerText', 'innerHTML'],
                correct:'innerText'
            },
            {
                question: "When was GitHub founded?",
                // answer: document.createElement('form')
                answers:['2008','2012'],
                correct:'2008'
            }
        ]
    },
    {
        genre:"Culture",
        questions: [
            {
                question: "In what city was Michael Jackson born?",
                // answer: document.createElement('form')
                answers:['Gary, Indiana', 'Baltimore, Maryland'],
                correct:'Gary, Indiana'
            },
            {
                question: "What year was 1984 published by George Orwell?",
                // answer: document.createElement('form')
                answers:['1984', '1949'],
                correct:'1949'
            },
            {
                question:"Who is on the Twenty Dollar Bill?",
                // answer: document.createElement('form')
                answers:['Andrew Jackson', 'Benjamin Franklin'],
                correct:'Andrew Jackson'
            }

        ]
    },
    {
        genre:"Science",
        questions:[
            {
                question:"How many elements are in the periodic table?",
                // answer:document.createElement('form')
                answers:['185', '118'],
                correct:['118']
            },
            {
                question:"Name at least one main layer of the atmosphere.",
                // answer: document.createElement('form')
                answers:['Troposphere', 'Kilosphere', 'Stratosphere', 'Milosphere', 'Exosphere'],
                correct:['Troposphere', 'Stratosphere', 'Exosphere']
            },
            {
                question:"How old is Earth? (According to 'science')",
                // answer: document.createElement('form')
                answers:['6.8 billion years', '4.5 billion years', '2.4 billion years'],
                correct:['4.5 billion years']

            }
        ]
    }
]
// function to loop through the jeopardy category
function addCategory(category){
    // created a new div and named it column to store the columns
    const column = document.createElement('div')
    column.classList.add('genre-column')
    const genreTitle = document.createElement('div')
    genreTitle.classList.add('genre-title')
    genreTitle.innerText = category.genre


// adding columns and games to the original html
    column.appendChild(genreTitle)
    game.append(column)
}

jeopardyCats.forEach(category => addCategory(category))