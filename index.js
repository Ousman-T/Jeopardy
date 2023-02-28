const game = document.getElementById('game');
const score1 = document.getElementById('score-track');
const score2 = document.getElementById('2nd-score-track');
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
                answers:[],
                correct: 'Mongolia',
                level: 'Beginner'
                
            },
            {
                question:"How old was Alexander the Great when he passed?",
                // answer: document.createElement('form')
                answers:[],
                correct:'32',
                level: 'Intermediate'
                
            },
            {
                question:"What was the name of Mao Zedong's plan to industrialize China?",
                // answer: document.createElement('form')
                answers:[],
                correct:'Great Leap Forward',
                level: 'Advance'
            }
        ]
    },
    {
        genre:"Programming",
        questions: [
            {
                question: "What is the name of the person who invented the language JavaScript?",
                // answer: document.createElement('form')
                answers:[],
                correct: 'Brendan Eich',
                level:'Intermediate'
            },
            {
                question: "Which is safer between innerText and innerHTML?",
                // answer: document.createElement('form')
                answers:[],
                correct:'innerText',
                level: 'Beginner'
            },
            {
                question: "When was GitHub founded?",
                // answer: document.createElement('form')
                answers:[],
                correct:'2008',
                level: 'Advance'
            }
        ]
    },
    {
        genre:"Culture",
        questions: [
            {
                question: "In what city was Michael Jackson born?",
                // answer: document.createElement('form')
                answers:[],
                correct:'Gary, Indiana',
                level: 'Beginner'
            },
            {
                question: "What year was 1984 published by George Orwell?",
                // answer: document.createElement('form')
                answers:[],
                correct:'1949',
                level:'Intermediate'
            },
            {
                question:"Who is on the Twenty Dollar Bill?",
                // answer: document.createElement('form')
                answers:[],
                correct:'Andrew Jackson',
                level:'Advance'
            }

        ]
    },
    {
        genre:"Science",
        questions:[
            {
                question:"How many elements are in the periodic table?",
                // answer:document.createElement('form')
                answers:[],
                correct:['118'],
                level: 'Intermediate'
            },
            {
                question:"Name at least one main layer of the atmosphere.",
                // answer: document.createElement('form')
                answers:[],
                correct:['Troposphere', 'Stratosphere', 'Exosphere'],
                level: 'Beginner'
            },
            {
                question:"How old is Earth? (According to 'science')",
                // answer: document.createElement('form')
                answers:[],
                correct:['4.5 billion years'],
                level: 'Advance'

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

    // creating cards
    category.questions.forEach(question => {
    const card = document.createElement('div')
    card.classList.add('card')
    column.append(card)
    // assigning numbers to back of cards
    if(question.level === 'Beginner'){
        card.innerText = '100';
    }
    if(question.level === 'Intermediate'){
        card.innerText = '200';
    }
    if(question.level === 'Advance'){
        card.innerText = '300';
    }

    })

}

jeopardyCats.forEach(category => addCategory(category))

