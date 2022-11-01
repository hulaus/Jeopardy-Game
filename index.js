const game = document.getElementById('game')
const scoreDisplay = document.getElementById('score')

const jeopardyCategories = [
    {
        genre: "Avengers",
        questions: [
            {
                question: 'Where is Captain America from?',
                answers: ['Brooklyn', 'Queens'],
                correct: 'Brooklyn'
            },
            {
                question: 'What is the Name of Thors hamer?',
                answers: ['Jonathon', 'Mjolnir'],
                correct: 'Mjolnir', 
            },
            {
              question: 'What is the name of the AI Tony Stark invented to replace J.A.R.V.I.S?',
                answers: ['T.U.E.S.D.A.Y.', 'F.R.I.D.A.Y.'],
                correct: 'F.R.I.D.A.Y.',
            },
            {
                question: 'The Flerkens are a race of extremely dangerous aliens that resemble __',
                answers: ['Humans', 'Cats'],
                correct: 'Cats'
            },
        
        ],
    },
    {
        genre: 'MARVEL',
        questions: [
            {
                question: 'What  is the first Marvel movei to earn $1 Billion?',
                answers: ['The Avengers', 'The Avengers Endgame'],
                correct: 'The Avengers',
            },
            {
                question: 'There is a frog with the power of Thor',
                answers:['True', 'False'],
                correct: 'True',
            },
            {
              question: 'Who Tried to buy Marvel Comics in the 90s?',
              answers:  ['Michael Jackson', 'Clint Eastwood'],
              correct: 'Michael Jackson',
            },
            {
            questions: 'Marvel Originally was named ___',
            answers: ['Timely Comics', 'Ditco Comics'],
            correct: 'Timely Comics',
            },
        ],
    },
    {
        genre: 'Disney Plus Shows',
        questions: [
            {
                question: 'After Loki Disappears from 2012 in Endgame, where does he end up?',
                answers: ['Mongolia', 'China'],
                correct:'Mongolia',
            },
            {
                question: 'What Egyptian God does Moon Knight Serve?',
                answers: ['Konshu', 'Horus'],
                correct: 'Konshu',
            },
            {
                question: 'What play did Hawkeye watch with his family?',
                answers: ['Rogers The Musical', 'The Wizard of Oz'],
                correct: 'Rogers The Musical',
            },
            {
                question: 'The First Episode of WandaVision was filmed in front of a Live Studio Audience',
                answers: ['True', 'False'],
                correct: 'True',
            },
        ],
    },
    {
        genre: 'Easter Eggs',
        questions: [
            {
                question: 'In Guardians of the Galaxy what character makes a quick cameo appearance?',
                answers: ['Cosmo the Dog', 'Mantis'],
                correct: 'Cosmo the Dog',
            },
            {
                question: 'Hawkeye assumes this identity after the events of Avengers Infinity War',
                answers: ['Ronin', 'Iron Fist'],
                correct: 'Ronin',
            },
            {
                question: 'In the MCU Spiderman is born on August 10th, why did they choose this date?',
                answers: ['First Comic Book Appearance', 'Tom Hollands Real Birthday'],
                correct: 'First Comic Book Appearance',
            },
            {
            question: 'The Infinity Gaunlet makes a stealth appearance in which marvel movie?',
            answers: ['Iron Man 3', 'Thor'],
            correct: 'Thor',
            },
        ]
    }
]

function addCategory(category) {
    const column = document.createElement('div')
    column.classList.add('genre-column')

    const genreTitle = document.createElement('div')
    genreTitle.classList.add('genre-title')
    genreTitle.innerText = category.genre

    column.appendChild(genreTitle)
    game.append(column)

}

jeopardyCategories.forEach(category => addCategory(category))