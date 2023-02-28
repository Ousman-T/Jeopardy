const game = document.getElementById('game');
const score = document.getElementById('score');

const jeopardyCats = [
    {
        genre: "History",
        questions: [
            {
                question: "Where was Ghengis Khan Born",
                answer: document.createElement('form')
            },
            {
                question:"How old was Alexander the Great when he passed?",
                answer: document.createElement('form')
            },
            {
                question:"What was the name of Mao Zedong's plan to industrialize China?",
                answer: document.createElement('form')
            }
        ]
    },
    {
        genre:"Programming",
        questions: [
            {
                question: "What is the name of the person who invented the language JavaScript?",
                answer: document.createElement('form')
            },
            {
                question: "What is the difference between innerText and innerHTML?",
                answer: document.createElement('form')
            },
            {
                question: "lorem",
                answer: document.createElement('form')
            }
        ]
    },
    {
        genre:"Culture",
        questions: []
    },
    {
        genre:"Math",
        questions:[]
    }
]

